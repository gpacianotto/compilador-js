import CustomErrorListener from "./CustomErrorListener";
import { Position, Symbol, ProcedureSymbol, ParameterSymbol, VariableSymbol } from "./Interfaces";
import LALGGrammarVisitor from "../../../antlr/LALGGrammarVisitor";
import ParseTree from "antlr4/tree/ParseTree";
import ParseTreeVisitor from "antlr4/tree/ParseTreeVisitor";
import LALGGrammar, { AtribuicaoContext, BlocoContext, ChamadaProcedimentoContext, ComandoCondicionalContext, ComandoRepetitivoContext, DeclaracaoProcedimentoContext, DeclaracaoVariavelContext, ExpressaoContext, ExpressaoSimplesContext, FatorContext, ProgramaContext, SecaoParametrosContext, TermoContext, VariavelContext } from "../../../antlr/LALGGrammar";
import LALGGrammarListener from "../../../antlr/LALGGrammarListener";


class Scope {
    public scopeName: string;
    public enclosingScope: Scope | null;
    public symbols: Map<string, Symbol> = new Map<string, Symbol>();

    constructor(scopeName: string, enclosingScope: Scope | null) {
        this.scopeName = scopeName;
        this.enclosingScope = enclosingScope;
    }

    public define(symbol: Symbol): void {
        this.symbols.set(symbol.name, symbol);
    }

    public resolve(name: string): Symbol | null {
        let symbol = this.symbols.get(name);
        if (symbol != null) {
            return symbol;
        }
        if (this.enclosingScope != null) {
            return this.enclosingScope.resolve(name);
        }
        return null;
    }
}

class TypeExtractor {
    scope: Scope;
    errorListener: CustomErrorListener;

    constructor(scope: Scope, listener: CustomErrorListener) {
        this.scope = scope;
        this.errorListener = listener;
    }

    public fromFator(fator: FatorContext): any {
        if (fator.variavel()) {
            const identifier = fator.variavel().ID();
            const variableName = identifier.getText();
            const symbol = this.scope.resolve(variableName);
            if (!symbol || !(symbol instanceof VariableSymbol || symbol instanceof ParameterSymbol)) {
                const [symbol, msg] = [identifier.symbol, `Variable ${variableName} not declared`];
                this.errorListener.semanticError(symbol.line, symbol.column, msg);
                return "unknown";
            }
            symbol.isUsed = true;
            const symbolAux = symbol as VariableSymbol;
            return symbolAux.type;
        } else if (fator.numero()) {
            return fator.numero().INT() ? "int" : "real";
        } else if (fator.TRUE_CONST() || fator.FALSE_CONST()) {
            return "boolean";
        } else if (fator.expressao()) {
            return this.fromExpression(fator.expressao());
        } else if (fator.NOT()) {
            return "boolean";
        }

        //@ts-ignore
        this.errorListener.semanticError(fator.start.line, fator.start.column, "Unknown factor type");
        return "unknown";
    }

    public fromTermo(termo: TermoContext): string {
        const factors: FatorContext[] = termo.fator();
        const typesInTerm = new Set<string>();

        for (let i = 0; i < factors.length; i++) {
            const factor = factors[i];
            const factorType = this.fromFator(factor);
            typesInTerm.add(factorType);

            if (i > 0) {
                const operator = termo.children[i * 2 - 1]; // The operator is every second child (1, 3, 5, ...)
                if (operator.getText() === "*") {
                    if (factorType !== "int" && factorType !== "real") {
                        this.errorListener.semanticError(operator.symbol.line, operator.symbol.column, "Invalid type for multiplication");
                    }
                } else {
                    this.errorListener.semanticError(operator.symbol.line, operator.symbol.column, "Unknown operator type");
                }
            }
        }

        if (typesInTerm.size > 1) {
            this.errorListener.semanticError(termo.start.line, termo.start.column, "Mixed types in term without coercion");
        }

        return typesInTerm.values().next().value;
    }

    public fromExpressaoSimples(expressaoSimples: ExpressaoSimplesContext): any {
        const termos: TermoContext[] = expressaoSimples.termo();
        const typesInExpression = new Set<string>();

        for (let i = 0; i < termos.length; i++) {
            const term = termos[i];
            const termType = this.fromTermo(term);
            typesInExpression.add(termType);

            if (i > 0) {
                const operator = expressaoSimples.children[i * 2 - 1]; // The operator is every second child (1, 3, 5, ...)
                if (["+", "-", "or"].includes(operator.getText())) {
                    if (termType !== "int" && termType !== "real") {
                        this.errorListener.semanticError(operator.symbol.line, operator.symbol.column, "Invalid type for additive operation");
                    }
                } else {
                    this.errorListener.semanticError(operator.symbol.line, operator.symbol.column, "Unknown operator type");
                }
            }
        }

        if (typesInExpression.size > 1) {
            this.errorListener.semanticError(expressaoSimples.start.line, expressaoSimples.start.column, "Mixed types in simple expression without coercion");
        }

        return typesInExpression.values().next().value;
    }

    public fromExpression(expression: ExpressaoContext): any {
        if (expression.expressao_aux().relacao() !== null) {
            return "boolean";
        }

        const simpleExpression = expression.expressaoSimples();
        return this.fromExpressaoSimples(simpleExpression);
    }
}


export default class semanticAnalyzer extends LALGGrammarVisitor<void> {

    private currentScope: Scope;
    private errorListener: CustomErrorListener;
    private typeExtractor: TypeExtractor;

    constructor(errorListener: CustomErrorListener) {
        super();
        this.currentScope = new Scope("global", null);
        this.errorListener = errorListener;
        this.typeExtractor = new TypeExtractor(this.currentScope, errorListener);
    }

    private enterScope(scopeName: string): void {
        this.currentScope = new Scope(scopeName, this.currentScope);
    }

    private exitScope(): void {
        if (this.currentScope.enclosingScope != null) {
            this.currentScope = this.currentScope.enclosingScope;
        }
    }

    public visitPrograma = (ctx: ProgramaContext): void => {
        //@ts-ignore
        this.visitChildren(ctx);
        this.exitScope();
    }
    
    public visitDeclaracaoVariavel = (ctx: DeclaracaoVariavelContext) => {
        let varType = ctx.tipo().getText();
        let id = ctx.listaID().ID();

        for (let i = 0; i < id.length; i++) {
            let name = id[i].getText();
            if (this.currentScope.resolve(name) != null) {
                this.errorListener.semanticError(id[i].symbol.line, id[i].symbol.column, `Variável ${name} já declarada`);
            } else {
                let symbol : VariableSymbol = { name: name, type: varType, isUsed: true, position: { line: id[i].symbol.line, colStart: id[i].symbol.column, colEnd: id[i].symbol.column + name.length } };
                this.currentScope.define(symbol);
            }
        }
    }

    public visitDeclaracaoProcedimento = (ctx: DeclaracaoProcedimentoContext) => {
        let name = ctx.ID().getText();
        if (this.currentScope.resolve(name) != null) {
            this.errorListener.semanticError(ctx.ID().symbol.line, ctx.ID().symbol.column, `Procedimento ${name} já declarado`);
        } else {
            this.enterScope(name);
            //@ts-ignore
            this.visitChildren(ctx);

            let collectedSymbols = this.currentScope.symbols.values();
            let id  = ctx.ID();
            let symbol : ProcedureSymbol = { name: name, isUsed: true, position: { line: id.symbol.line, colStart: id.symbol.column, colEnd: id.symbol.column + name.length }, parameters: [], variables: [] };
            if (this.currentScope.enclosingScope != null) {
                this.currentScope.enclosingScope.define(symbol);
            }
            this.exitScope();
        }
    }

    public visitSecaoParametros = (ctx: SecaoParametrosContext) => {
        let params = ctx.listaID();
        for (let i = 0; i < params.length; i++) {
            let varType = params[i].tipo().getText();
            let symbol = this.currentScope.resolve(params[i].ID().getText());
            if (symbol != null) {
                this.errorListener.semanticError(params[i].ID().symbol.line, params[i].ID().symbol.column, `Parâmetro ${symbol.name} já declarado`);
            } else {
                let symbol_aux : ParameterSymbol = { 
                                                    name: params[i].ID().getText(), 
                                                    type: varType, isUsed: true, 
                                                    position: { line: params[i].ID().symbol.line, colStart: params[i].ID().symbol.column, colEnd: params[i].ID().symbol.column + params[i].ID().getText().length },
                                                    };
                this.currentScope.define(symbol_aux);
            }
        }
    }

    public visitchamadaProcedimento = (ctx: ChamadaProcedimentoContext) => {
        let procName = ctx.ID().getText();
        let procSymbol = this.currentScope.resolve(procName);
        if (procSymbol == null) {
            this.errorListener.semanticError(ctx.ID().symbol.line, ctx.ID().symbol.column, `Procedimento ${procName} não declarado`);
        } else {
            procSymbol.isUsed = true;
        }

        let procExpressionList = ctx.chamadaProcedimento_aux().listaExpressao();
        if (procExpressionList != null) {
            let expressionList = procExpressionList.expressao();
            //@ts-ignore
            let qtdExpressionList = expressionList.length;
            //@ts-ignore
            let procParams = procSymbol.params;
            let qtdProcParams = procParams.length;
            if (qtdExpressionList != qtdProcParams) {
                this.errorListener.semanticError(ctx.ID().symbol.line, ctx.ID().symbol.column, `Quantidade de parâmetros inválida`);
            }

            let paramsTypes = procParams.map((param: any) => param.type);
            let expressionTypes = expressionList.map((expression: any) => this.visit(expression));

            for (let i = 0; i < qtdProcParams; i++) {
                if (paramsTypes[i] != expressionTypes[i]) {
                    this.errorListener.semanticError(ctx.ID().symbol.line, ctx.ID().symbol.column, `Tipo de parâmetro inválido`);
                }
            }
        } else {
            //@ts-ignore
            if (procSymbol.params.length > 0) {
                this.errorListener.semanticError(ctx.ID().symbol.line, ctx.ID().symbol.column, `Quantidade de parâmetros inválida`);
            }
        }
    }

    public visitAtriuicao = (ctx: AtribuicaoContext) => {
        let variable = ctx.variavel();
        let variableName = variable.ID().getText();
        let variableSymbol = this.currentScope.resolve(variableName) as VariableSymbol;

        if (variableSymbol == null) {
            this.errorListener.semanticError(variable.ID().symbol.line, variable.ID().symbol.column, `Variável ${variableName} não declarada`);
        }

        variableSymbol.isUsed = true;
        let expression = ctx.expressao();
        let expressionType = this.typeExtractor.fromExpressaoSimples(expression);
        if (expressionType != variableSymbol.type) {
            this.errorListener.semanticError(variable.ID().symbol.line, variable.ID().symbol.column, `Tipo de atribuição inválido`);
        }
    }

    public visitComandoCondicional = (ctx: ComandoCondicionalContext) => {
        let expression = ctx.expressao();
        let expressionType = this.typeExtractor.fromExpressaoSimples(expression.expressaoSimples());
        if (expressionType != "boolean") {
            this.errorListener.semanticError(expression.start.line ,expression.start.column, `Tipo de expressão inválido`);
        }
    }
    
    public visitComandoRepetitivo = (ctx: ComandoRepetitivoContext) => {
        let expression = ctx.expressao();
        let expressionType = this.typeExtractor.fromExpression(expression);
        if (expressionType != "boolean") {
            this.errorListener.semanticError(expression.start.line, expression.start.column, `Tipo de expressão inválido`);
        }
    }

    public visitTermo = (ctx: TermoContext) => {
        if (ctx.termo_aux().MULT()) {
            let leftTerm = ctx.fator()
            let leftTermType = this.typeExtractor.fromFator(leftTerm);
            let rightTerm = ctx.termo_aux().fator();
            let rightTermType = this.typeExtractor.fromFator(rightTerm);

            if (leftTermType != rightTermType) {
                this.errorListener.semanticError(leftTerm.start.line, leftTerm.start.column, `Tipo de expressão inválido`);
            }
        }
    }

    public visitBloco = (ctx: BlocoContext) => {
        //@ts-ignore
        this.visitChildren(ctx);
        //@ts-ignore
        for (let symbol of this.currentScope.symbols.values()) {
            if (!symbol.isUsed) {
                if (symbol instanceof VariableSymbol) {
                    this.errorListener.semanticError(symbol.position.line, symbol.position.colStart, `Variável ${symbol.name} não utilizada`);
                }
                if (symbol instanceof ProcedureSymbol) {
                    this.errorListener.semanticError(symbol.position.line, symbol.position.colStart, `Procedimento ${symbol.name} não utilizado`);
                }
                if (symbol instanceof ParameterSymbol) {
                    this.errorListener.semanticError(symbol.position.line, symbol.position.colStart, `Parâmetro ${symbol.name} não utilizado`);
                }
                else {
                    this.errorListener.semanticError(symbol.position.line, symbol.position.colStart, `Símbolo ${symbol.name} não utilizado`);
                }
            }
        }
    }
}
