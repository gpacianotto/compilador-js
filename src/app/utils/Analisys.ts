import LALGLexer from "../../../antlr/LALGLexer";
import LALGParser from "../../../antlr/LALGParser";
import antlr4 from "antlr4";
import { GeneratorToken, LexicReturn, Token } from "./Interfaces";
import CustomErrorListener from "./CustomErrorListener";
import CustomErrorStrategy from "./CustomErrorStrategy";
import semanticAnalysis from "./SemanticAnalysis";

export default class Analisys{

    public char: any;
    public lexer: any;
    public tokens: any;
    public parser: any;
    public tree: any;


    constructor(input: string){
        this.char = new antlr4.InputStream(input);
        this.lexer = new LALGLexer(this.char);
        this.tokens = new antlr4.CommonTokenStream(this.lexer);
        this.parser = new LALGParser(this.tokens);
    }

    public lexicAnalisys() : GeneratorToken[] {
        this.tokens.fill(); //não apagar, é necessário para o funcionamento do lexer

        // Formantando o resultado
        const result: GeneratorToken[] = this.tokens.tokens.map((token: any) => {
            const type = token.type;
            const text = token.text;
            const line = token.line;
            const column = token.column + 1; //colocando o início da coluna em 1 ao invés de 0
            const symbolicName = this.lexer.symbolicNames[type];

            return { 'Token': symbolicName, 'Lexema': text, 'Linha': line, 'Coluna': column }
        });

        return result;
    }

    public sintatic() {
        const errorListener = new CustomErrorListener();

        const parser = new LALGParser(this.tokens);

        antlr4.Parser.prototype._errHandler = new CustomErrorStrategy();
        

        antlr4.Parser.prototype.removeErrorListeners.call(parser);
        antlr4.Parser.prototype.addErrorListener.call(parser, errorListener);
        antlr4.Lexer.prototype.removeErrorListeners.call(this.lexer);
        antlr4.Lexer.prototype.addErrorListener.call(this.lexer, errorListener);

        this.tree = parser.programa();
        return errorListener.getErrors();
    }
    
    public semantic(){
        let errorListener = new CustomErrorListener();
        let semanticAnalys = new semanticAnalysis(errorListener);
        semanticAnalys.visit(this.tree);
        return errorListener.getErrors();
    }

    public formatTokens(rawLexems: GeneratorToken[], input: string): LexicReturn {
        // formatando os tokens para retorno na forma da tabela
        const tokens: Token[] = [];
        const charMap: number[] = [];
    
        rawLexems.map((lexem: GeneratorToken) => {
            tokens?.push({ lexem: lexem.Lexema, token: lexem.Token, position: { line: lexem.Linha, colStart: lexem.Coluna, colEnd: lexem.Coluna + lexem.Lexema.length } })
        })
    
        console.log(tokens);
    
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            charMap.push(1)
        }
    
        return {
            error: false,
            charMap: charMap,
            tokens: tokens,
            errorChar: null
        };
    }
}