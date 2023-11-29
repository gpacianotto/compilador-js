import { AtribuicaoContext, ChamadaProcedimentoContext, ComandoCondicionalContext, ComandoRepetitivoContext, ExpressaoSimplesContext, ExpressaoSimples_auxContext, Expressao_auxContext, FatorContext, ListaExpressaoContext, ListaIDContext, ListaID_auxContext, ProgramaContext, Termo_auxContext, Variavel1Context } from "../../../antlr/LALGGrammar";
import LALGGrammarVisitor from "../../../antlr/LALGGrammarVisitor";
import CustomErrorListener from "./CustomErrorListener";

class Symbol {
    public name: string;
    public position: number;

    constructor(name: string, position: number) {
        this.name = name;
        this.position = position;
    }
}

class Scope {
    public scopeName: string;
    public enclosingScope: Scope | null;
    public symbols: Map<string, Symbol> = new Map();

    constructor(scopeName: string, enclosingScope: Scope | null = null) {
        this.scopeName = scopeName;
        this.enclosingScope = enclosingScope;
    }

    define(symbol: Symbol): void {
        this.symbols.set(symbol.name, symbol);
    }

    resolve(name: string): Symbol | null {
        let symbol = this.symbols.get(name);
        return symbol || null;
    }
}

export default class CodeGenerator extends LALGGrammarVisitor<void> {
    
    public currentScope: Scope = new Scope("global");
    public errorListener: CustomErrorListener;
    public historicoVariavel: string[] = [];
    public generatedCode: string[] = [];

    constructor() {
        super();
        this.errorListener = new CustomErrorListener();
    }

    public enterScope(scopeName: string): void {
        this.currentScope = new Scope(scopeName, this.currentScope);
    }

    public exitScope(): void {
        this.currentScope = this.currentScope.enclosingScope!;
    }

    visitPrograma = (ctx: ProgramaContext) : string  => {
        this.generatedCode.push("INPP\n");
        //@ts-ignore
        this.visitChildren(ctx);
        this.generatedCode.push("PARA\n");
        return this.salvarPrograma();
    }

    visitListaID = (ctx: ListaIDContext) => {
        let id = ctx.ID();
        if (id != null) {
            let nome = id.getText();
            let posicao = this.currentScope.symbols.size;

            console.log("Variável " + nome + " declarada na posição " + posicao);
            this.currentScope.define(new Symbol(nome, posicao));
            this.generatedCode.push("AMEM 1\n");
        }
        //@ts-ignore
        this.visitChildren(ctx);
    }

    visitListaID_aux = (ctx: ListaID_auxContext) => {
        let id = ctx.ID();
        if (id != null) {
            let nome = id.getText();
            let posicao = this.currentScope.symbols.size;

            console.log("Variável " + nome + " declarada na posição " + posicao);
            this.currentScope.define(new Symbol(nome, posicao));
            this.generatedCode.push("AMEM 1\n");
        }
        //@ts-ignore
        this.visitChildren(ctx);
    }

    visitExpressao_aux = (ctx: Expressao_auxContext) => {
        let relacao = ctx.RELACAO();
        if (relacao != null) {
            let operador = relacao.getText();
            //@ts-ignore
            this.visitChildren(ctx);
            if (operador == "=") {
                this.generatedCode.push("CMIG\n");
            } else if (operador == "<>") {
                this.generatedCode.push("CMDG\n");
            } else if (operador == ">") {
                this.generatedCode.push("CMMA\n");
            } else if (operador == "<") {
                this.generatedCode.push("CMME\n");
            } else if (operador == ">=") {
                this.generatedCode.push("CMAG\n");
            } else if (operador == "<=") {
                this.generatedCode.push("CMEG\n");
            }
        }
    }

    visitExpressaoSimples = (ctx: ExpressaoSimplesContext) => {
        if (ctx.MENOS() != null) {
            //@ts-ignore
            if (ctx.parentCtx.parentCtx instanceof Variavel1Context) {
                //@ts-ignore
                this.visitChildren(ctx);
                this.generatedCode.push("SUBT\n");
            } else {
                const intructionReminder = this.generatedCode.length;
                //@ts-ignore
                this.visitChildren(ctx.termo());
                let newGeneratedCode = [
                    ...this.generatedCode.slice(0, intructionReminder),
                    "INVR\n",
                    ...this.generatedCode.slice(intructionReminder)
                ];
                this.generatedCode = newGeneratedCode;
                //@ts-ignore
                this.visitChildren(ctx.expressaoSimples_aux());
            }
        }  else if (ctx.MAIS() != null) {
            //@ts-ignore
            this.visitChildren(ctx);
            this.generatedCode.push("SOMA\n");
        } else {
            //@ts-ignore
            this.visitChildren(ctx);
        }
    }
    
    visitExpressaoSimples_aux = (ctx: ExpressaoSimples_auxContext) => {
        if (ctx.MAIS() != null) {
            //@ts-ignore
            this.visitChildren(ctx);
            this.generatedCode.push("SOMA\n");
        } else if (ctx.MENOS() != null) {
            //@ts-ignore
            this.visitChildren(ctx);
            this.generatedCode.push("SUBT\n");
        } else if (ctx.OR() != null) {
            //@ts-ignore
            this.visitChildren(ctx);
            this.generatedCode.push("DISJ\n");
        }
    }

    visitFator = (ctx: FatorContext) => {
        if (ctx.variavel() != null) {
            let variavel = ctx.variavel();
            let id = variavel.ID();
            let nome = id.getText();
            this.historicoVariavel.push(nome);
            let stackPosition = this.currentScope.resolve(nome)?.position;
            this.generatedCode.push("CRVL " + stackPosition + "\n");
        } else if (ctx.numero() != null) {
            let numero = ctx.numero().INT().getText();
            let valor = parseInt(numero);
            this.generatedCode.push("CRCT " + valor + "\n");
        } else if (ctx.TRUE_CONST() != null) {
            this.generatedCode.push("CRCT 1\n");
        } else if (ctx.FALSE_CONST() != null) {
            this.generatedCode.push("CRCT 0\n");
        } else if (ctx.NOT() != null) {
            this.generatedCode.push("NEGA\n");
        }
    }

    visitTermo_aux = (ctx: Termo_auxContext) => {
        //@ts-ignore
        if (ctx.children != null){
            //@ts-ignore
            this.visitChildren(ctx);
            if (ctx.MULT() != null) {
                this.generatedCode.push("MULT\n");
            //@ts-ignore
            } else if (ctx.DIV() != null) {
                //@ts-ignore
                this.visitChildren(ctx);
                this.generatedCode.push("DIVI\n");
            } else if (ctx.AND() != null) {
                //@ts-ignore
                this.visitChildren(ctx);
                this.generatedCode.push("CONJ\n");
            }
        }
    }

    visitComandoRepetitivo = (ctx: ComandoRepetitivoContext) => {
        let loopStart = this.generatedCode.length;
        this.generatedCode.push("NADA\n");
        //@ts-ignore
        this.visitChildren(ctx.expressao());
        let instructionReminder = this.generatedCode.length;
        this.generatedCode.push("NADA\n");
        //@ts-ignore
        this.visitChildren(ctx.comando());
        this.generatedCode.push("DSVS " + loopStart + "\n");
        this.generatedCode[instructionReminder] = "DSVF " + this.generatedCode.length + "\n";
        this.generatedCode.push("NADA\n");
    }

    visitAtribuicao = (ctx: AtribuicaoContext) => {
        let variavel = ctx.variavel();
        let id = variavel.ID();
        let nome = id.getText();
        this.historicoVariavel.push(nome);
        let stackPosition = this.currentScope.resolve(nome)?.position;
        this.generatedCode.push("ARMZ " + stackPosition + "\n");
        //@ts-ignore
        this.visitChildren(ctx.expressao());
    }

    visitComandoCondicional = (ctx: ComandoCondicionalContext) => {
        //@ts-ignore
        this.visitChildren(ctx.expressao());
        let instructionReminder = this.generatedCode.length;
        this.generatedCode.push("NADA\n");
        //@ts-ignore
        this.visitChildren(ctx.comando());
        this.generatedCode[instructionReminder] = "DSVF " + this.generatedCode.length + "\n";
        this.generatedCode.push("NADA\n");
        instructionReminder = this.generatedCode.length;
        //@ts-ignore
        this.visitChildren(ctx.comandoCondicional_aux());
        let currentInstruction = this.generatedCode.length;
        if (instructionReminder != currentInstruction) {
            this.generatedCode[instructionReminder] = "DSVS " + currentInstruction + "\n";
            this.generatedCode.push("NADA\n");
        }
    }

    visitChamadaProcedimento = (ctx: ChamadaProcedimentoContext) => {
        if (ctx.READ() != null) {
            let instructionPointer = this.generatedCode.length;
            //@ts-ignore
            this.visitChildren(ctx);

            while (instructionPointer !== this.generatedCode.length) {
                this.generatedCode.pop();
            }
            for (let i = 0; i < this.historicoVariavel.length; i++) {
                this.generatedCode.push("LEIT\n");
                let stackPosition = this.currentScope.resolve(this.historicoVariavel[i])?.position;
                this.generatedCode.push("ARMZ " + stackPosition + "\n");
            }
        } else if (ctx.WRITE() != null) {
            //@ts-ignore
            this.visitChildren(ctx);
            this.generatedCode.push("IMPR\n");
        }
    }

    visitListaExpressao = (ctx: ListaExpressaoContext) => {
        this.historicoVariavel = [];
        //@ts-ignore
        this.visitChildren(ctx);
    }

    salvarPrograma = () : string => {
        let codigo = "";
        for (let i = 0; i < this.generatedCode.length; i++) {
            codigo += this.generatedCode[i];
        }
        return codigo;
    }
}