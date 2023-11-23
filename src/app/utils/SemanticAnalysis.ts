import CustomErrorListener from "./CustomErrorListener";
import { Symbol } from "./Interfaces";
import LALGParserVisitor from "../../../antlr/LALGParserVisitor";

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

export default class semanticAnalysis extends LALGParserVisitor<any> {

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

    visit(parseTree: any) {
        if (parseTree) {
            return parseTree.accept(this);
        }
    }
}