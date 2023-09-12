import { CharStream, CommonTokenStream } from 'antlr4';
import LALG from '../../../antlr/LALG';
import { LexicReturn, Token } from './lexicAnalisys';


export interface GeneratorToken {
    Token: string;
    Lexema: string;
    Linha: number;
    Coluna: number;
}

export default function lexicAnalisysGenerator(input: string) : GeneratorToken[] {
    const chars = new CharStream(input);
    const lexer = new LALG(chars);        
    const tokens = new CommonTokenStream(lexer);
    tokens.fill();

    const result : GeneratorToken[] = tokens.tokens.map((token) => {
        const type = token.type;
        const text = token.text;
        const line = token.line;
        const column = token.column;
        const symbolicName = lexer.symbolicNames[type];

        

        return {'Token': symbolicName, 'Lexema': text, 'Linha': line, 'Coluna': column}
    });

    // console.log(formatTokens(result, input));

    console.log(result);
    return result;
}

export function formatTokens(rawLexems: GeneratorToken[], input: string) : LexicReturn {
    
    const tokens : Token[] = [];
    const charMap : number[] = [];
    
    rawLexems.map((lexem:GeneratorToken) => {
        tokens?.push({lexem: lexem.Lexema, token: lexem.Token, position: {line: lexem.Linha, colStart: lexem.Coluna, colEnd: lexem.Coluna + lexem.Lexema.length}})
    })

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