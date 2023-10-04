import antlr4, { InputStream, CommonTokenStream } from 'antlr4';
import LALGLexer from '../../../antlr/LALGLexer';
import LALGParser from '../../../antlr/LALGParser';
import { LexicReturn, Token, GeneratorToken } from './Interfaces';
import CustomErrorListener from './CustomErrorListener';
import CustomErrorStrategy from './CustomErrorStrategy';


export default function sintaticAnalisysGenerator(input: string) {
    const errorListener = new CustomErrorListener();

    const chars = new InputStream(input);
    const lexer = new LALGLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LALGParser(tokens);

    antlr4.Parser.prototype._errHandler = new CustomErrorStrategy();
    

    antlr4.Parser.prototype.removeErrorListeners.call(parser);
    antlr4.Parser.prototype.addErrorListener.call(parser, errorListener);
    antlr4.Lexer.prototype.removeErrorListeners.call(lexer);
    antlr4.Lexer.prototype.addErrorListener.call(lexer, errorListener);

    parser.declaracoesVariaveis();
    const errors = errorListener.getErrors();
    console.log(errors);
}
    