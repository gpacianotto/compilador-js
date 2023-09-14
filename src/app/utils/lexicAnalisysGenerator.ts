import { CharStream, CommonTokenStream } from 'antlr4';
import LALG from '../../../antlr/LALG';
import { LexicReturn, Token, GeneratorToken } from './Interfaces';


export default function lexicAnalisysGenerator(input: string) : GeneratorToken[] {
    // vide doc: https://github.com/antlr/antlr4/blob/master/doc/typescript-target.md
    const chars = new CharStream(input);
    const lexer = new LALG(chars);        
    const tokens = new CommonTokenStream(lexer);
    tokens.fill();

    // Formantando o resultado
    const result : GeneratorToken[] = tokens.tokens.map((token : any) => {
        const type = token.type;
        const text = token.text;
        const line = token.line;
        const column = token.column + 1; //colocando o início da coluna em 1 ao invés de 0
        const symbolicName = lexer.symbolicNames[type];

        return {'Token': symbolicName, 'Lexema': text, 'Linha': line, 'Coluna': column}
    });

    // console.log(formatTokens(result, input));
    console.log(result);
    return result;
}

export function formatTokens(rawLexems: GeneratorToken[], input: string) : LexicReturn {
    // formatando os tokens para retorno na forma da tabela
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