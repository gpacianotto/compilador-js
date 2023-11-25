import { AtribuicaoContext, ComandoCondicionalContext, ComandoRepetitivoContext, ExpressaoSimplesContext, ExpressaoSimples_auxContext, FatorContext, ListaIDContext, ListaID_auxContext, ProgramaContext } from "../../../antlr/LALGGrammar";
import LALGGrammarVisitor from "../../../antlr/LALGGrammarVisitor";
import LALGParserVisitor from "../../../antlr/LALGGrammarVisitor";
import CustomErrorListener from "./CustomErrorListener";

class CodeSymbol {
    public name: string;
    public stackPointer: number;

    constructor(name: string, stackPointer: number) {
        this.name = name;
        this.stackPointer = stackPointer;
    }
}

class CodeScope {
    public scopeName: string;
    public enclosingScope: CodeScope | null;
    public symbols: Map<string, CodeSymbol> = new Map();

    constructor(scopeName: string, enclosingScope: CodeScope | null = null) {
        this.scopeName = scopeName;
        this.enclosingScope = enclosingScope;
    }

    define(symbol: CodeSymbol): void {
        this.symbols.set(symbol.name, symbol);
    }

    resolve(name: string): CodeSymbol | null {
        let symbol = this.symbols.get(name);
        return symbol || null;
    }
}

class CodeGenerator extends LALGGrammarVisitor<void> {
    
    public currentScope: CodeScope = new CodeScope("global");
    public errorListener: CustomErrorListener;
    public generatedCode: string[] = [];

    constructor(errorListener: CustomErrorListener) {
        super();
        this.errorListener = errorListener;
    }

    public enterScope(scopeName: string): void {
        this.currentScope = new CodeScope(scopeName, this.currentScope);
    }

    public exitScope(): void {
        this.currentScope = this.currentScope.enclosingScope!;
    }

    visitPrograma = (ctx: ProgramaContext) => {
        this.generatedCode.push("INPP\n");
        super.visitChildren(ctx);
        this.generatedCode.push("PARA\n");
    }

    visitAtribuicao = (ctx: AtribuicaoContext) => {
        const variave = ctx.variavel();
        const nome = variave.ID().getText();
        const symbol = this.currentScope.resolve(nome);
        return super.visitChildren(ctx);
    }

    visitListaID = (ctx: ListaIDContext) => {
        this.generatedCode.push("AMEM 1");
        const variavel = ctx.ID().getText();
        const symbol = this.currentScope.resolve(variavel);
        if (symbol) {
            this.currentScope.define(new CodeSymbol(symbol.name, this.currentScope.symbols.size));
        }
    }

    visitListaID_aux = (ctx: ListaID_auxContext) => {
        this.generatedCode.push("AMEM 1");
        const variavel = ctx.ID().getText();
        const symbol = this.currentScope.resolve(variavel);
        if (symbol) {
            this.currentScope.define(new CodeSymbol(symbol.name, this.currentScope.symbols.size));
        }
    }

    visitExpressaoSimples = (ctx: ExpressaoSimplesContext) => {
        this.visitChildren(ctx.getChild(0));
        if (ctx.MENOS() !== null) {
            this.generatedCode.push("INVR\n");
        }
        self.visitChildren(ctx.getChild(1));
    }

    visitExpressaoSimples_aux = (ctx: ExpressaoSimples_auxContext) => {
        this.vistChildren(ctx);
        if (ctx.SUB() !== null) {
            this.generatedCode.push("SUB\n");
        }
        if (ctx.SOMA() !== null) {
            this.generatedCode.push("SUM\n");
        }
        if (ctx.OR() !== null) {
            this.generatedCode.push("DISJ\n");
        }
    }

    visitFator = (ctx: FatorContext) => {
        if (ctx.variavel() !== null) {
            const nome = ctx.variavel().ID().getText();
            const symbol = this.currentScope.resolve(nome);
            this.generatedCode.push(`CRVR ${symbol.stackPointer}\n`);
        }
        if (ctx.NUM_INT() !== null) {
            const value = ctx.NUM_INT().getText();
            this.generatedCode.push(`CRVL ${value}\n`);
        }
        // if (ctx.NUM_REAL() !== null) {
        //     const value = ctx.NUM_REAL().getText();
        //     this.generatedCode.push(`CRVL ${value}\n`);
        // }
        if (ctx.TRUE_CONST !== null) {
            this.generatedCode.push(`CRVL 1\n`);
        }
        if (ctx.FALSE_CONST !== null) {
            this.generatedCode.push(`CRVL 0\n`);
        }
        if (ctx.NOT() !== null) {
            this.generatedCode.push(`NEGA\n`);
        }
    }

    visitFator_aux = (ctx: Fator_auxContext) => {
        if (ctx.variavel() !== null) {
            const nome = ctx.variavel().ID().getText();
            const symbol = this.currentScope.resolve(nome);
            this.generatedCode.push(`CRVR ${symbol.stackPointer}\n`);
        }
        if (ctx.NUM_INT() !== null) {
            const value = ctx.NUM_INT().getText();
            this.generatedCode.push(`CRVL ${value}\n`);
        }
        // if (ctx.NUM_REAL() !== null) {
        //     const value = ctx.NUM_REAL().getText();
        //     this.generatedCode.push(`CRVL ${value}\n`);
        // }
        if (ctx.TRUE_CONST !== null) {
            this.generatedCode.push(`CRVL 1\n`);
        }
        if (ctx.FALSE_CONST !== null) {
            this.generatedCode.push(`CRVL 0\n`);
        }
        if (ctx.NOT() !== null) {
            this.generatedCode.push(`NEGA\n`);
        }
    }

    visitComandoRepetitivo = (ctx: ComandoRepetitivoContext) => {
        let loopStart = this.generatedCode.length -1 ;
        this.generatedCode.push("NADA\n");
        this.visitChildren(ctx.getChild(0));
        let instructionReminder = this.generatedCode.length;
        this.generatedCode.push("PLACEHOLDER\n");
        this.visitChildren(ctx.getChild(1));
        this.generatedCode.push(`DSVS ${loopStart}\n`);
        this.generatedCode[instructionReminder] = "DSVF " + instructionReminder + "\n";
    }

    visitComandoCondicional = (ctx: ComandoCondicionalContext) => {
        this.visitChildren(ctx.getChild(0));
        let instructionReminder = this.generatedCode.length;
        this.generatedCode.push("PLACEHOLDER\n");
        this.visitChildren(ctx.getChild(1));
        this.generatedCode[instructionReminder] = "DSVF " + instructionReminder + "\n";
        this.generatedCode.push("NADA\n");
    }

}