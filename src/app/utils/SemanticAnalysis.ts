import CustomErrorListener from "./CustomErrorListener";
import { Symbol, Variable, Procedure, ProcedureParam } from "./Interfaces";
import { LALGParser } from "../antlr/LALGParser";


class Scope {

    public scopeName: string;
    public enclosingScope: Scope | null;
    public symbols: Symbol[];

    constructor(scopeName: string, enclosingScope: Scope | null = null) {
        this.scopeName = scopeName;
        this.enclosingScope = enclosingScope;
        this.symbols = [];
    }

    define(symbol: Symbol) {
        this.symbols.push(symbol);
    }

    resolve(name: string): Symbol | null {
        const symbol = this.symbols.find(s => s.name === name);
        if (symbol) {
            return symbol;
        }
        return null;
    }
}

export class TypeExtractor {
    private scope: Scope;
    private listener: CustomErrorListener;

    constructor(scope: Scope, listener: CustomErrorListener) {
        this.scope = scope;
        this.listener = listener;
    }

    public fromFactor(factor: LALGParser.FactorContext): string{
        // Verificar se o fator é uma variável
        if (factor.variable()) {
            const id = factor.variable().ID();
            const name = id.getText();
            const symbol = this.scope.resolve(name);

            if (symbol === null) {
                this.listener.semanticError(id.symbol.line, id.symbol.column, `Symbol ${name} not found`);
                return "unknown";
            }
            symbol.isUsed = true;
            return (symbol as Variable).type;
        }

        if (factor.number()) {
            const number = factor.number();
            if (number.INTEGER()) {
                return "int";
            }
            return "real";
        }
        if (factor.literal()) {
            return "string";
        }
        if (factor.expression()) {
            const expression = factor.expression();
            return this.fromExpression(expression);
        }
        if (factor.)
    }

    public fromTerm(term: LALGParser.TermContext): VariableType {
        const factors: any[] = term.factor(); // type: ignore
        const operationTypes = new Set<VariableType>();

        for (let i = 0; i < factors.length; i++) {
            const factor = factors[i];
            const factorType = this.fromFactor(factor);
            operationTypes.add(factorType);

            if (i > 0) {
                const operation = term.children[i * 2 - 1]; // type: ignore
                if (["*", "/", "div", "and"].includes(operation.getText())) {
                    if (factorType !== "int" && factorType !== "real") {
                        this.listener.semanticError(operation.symbol.line, operation.symbol.column, "Invalid type for arithmetic operation");
                    }
                } else {
                    this.listener.semanticError(operation.symbol.line, operation.symbol.column, "Unknown operation type");
                }
            }
        }

        if (operationTypes.size > 1) {
            this.listener.semanticError(term.start.line, term.start.column, "Mixed types in term without coercion");
        }

        return Array.from(operationTypes)[0];
    }

    public fromSimpleExpression(simpleExpression: LALGParser.SimpleExpressionContext): VariableType {
        const terms: any[] = simpleExpression.term(); // type: ignore
        const typesInExpression = new Set<VariableType>();

        for (let i = 0; i < terms.length; i++) {
            const term = terms[i];
            const termType = this.fromTerm(term);
            typesInExpression.add(termType);

            if (i > 0) {
                const operator = simpleExpression.children[i * 2 - 1]; // type: ignore
                if (["+", "-", "or"].includes(operator.getText())) {
                    if (termType !== "int" && termType !== "real") {
                        this.listener.semanticError(operator.symbol.line, operator.symbol.column, "Invalid type for additive operation");
                    }
                } else {
                    this.listener.semanticError(operator.symbol.line, operator.symbol.column, "Unknown operator type");
                }
            }
        }

        if (typesInExpression.size > 1) {
            this.listener.semanticError(simpleExpression.start.line, simpleExpression.start.column, "Mixed types in simple expression without coercion");
        }

        return Array.from(typesInExpression)[0];
    }

    public fromExpression(expression: LALGParser.ExpressionContext): VariableType {
        if (expression.relationalOperator() !== null) {
            return "boolean";
        }

        const simpleExpression = expression.simpleExpression()[0]; // type: ignore
        return this.fromSimpleExpression(simpleExpression);
    }
}

export default class semanticAnalyzer extends LALGParserVisitor<any> {

    public errorListener: CustomErrorListener;
    public currentScope: Scope | null;

    constructor(errorListener: CustomErrorListener) {
        super();
        this.errorListener = errorListener;
        this.currentScope = null;
    }

    enterScope(scopeName: string) {
        const scope = new Scope(scopeName, this.currentScope);
        this.currentScope = scope;
    }

    exitScope() {
        if (this.currentScope) {
            this.currentScope = this.currentScope.enclosingScope;
        }
    }

    public visitPrograma(ctx: LALGParser.ProgramaContext) {
        this.enterScope("global");
        super.visitChildren(ctx);
        this.exitScope();
    }

    public visitDeclaracao(ctx: LALGParser.DeclaracaoContext) {
        const type = ctx.tipo().getText();
        const name = ctx.ID().getText();
        const symbol = {
            name,
            type,
            value: null
        };
        if (this.currentScope) {
            this.currentScope.define(symbol);
        }
    }
}