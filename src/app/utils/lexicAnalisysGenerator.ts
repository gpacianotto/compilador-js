import { CharStream, CommonTokenStream } from 'antlr4';
import LALG from '../../../antlr/LALG';
import { LexicReturn, Token, GeneratorToken } from './Interfaces';


export default function lexicAnalisysGenerator(input: string): GeneratorToken[] {
    // vide doc: https://github.com/antlr/antlr4/blob/master/doc/typescript-target.md
    const chars = new CharStream(input);
    const lexer = new LALG(chars);
    const tokens = new CommonTokenStream(lexer);
    tokens.fill();

    // Formantando o resultado
    const result: GeneratorToken[] = tokens.tokens.map((token: any) => {
        const type = token.type;
        const text = token.text;
        const line = token.line;
        const column = token.column + 1; //colocando o início da coluna em 1 ao invés de 0
        const symbolicName = lexer.symbolicNames[type];

        return { 'Token': symbolicName, 'Lexema': text, 'Linha': line, 'Coluna': column }
    });

    // console.log(formatTokens(result, input));
    console.log(result);
    return result;
}


const tokenToColor: {
    [key: string]: number
} = {
    "COMENTARIO": 0,
    "COMENTARIO_MULTI": 0,
    "WS": 0,
    "PROGRAM": 5,
    "BEGIN": 2,
    "END": 2,
    "VAR": 3,
    "PROCEDURE": 3,
    "INT_LITERAL": 1,
    "FLOAT_LITERAL": 1,
    "BOOL_CONST": 1,
    "READ": 3,
    "WRITE": 3,
    "BOOLEAN_LITERAL": 1,
    "IF": 2,
    "THEN": 2,
    "ELSE": 2,
    "WHILE": 2,
    "DO": 2,
    "NOT": 1,
    "ATRIBUICAO": 4,
    "MAIS": 4,
    "MENOS": 4,
    "MULT": 4,
    "DIV": 4,
    "RELACAO": 4,
    "ABRE_PARENTESES": 4,
    "FECHA_PARENTESES": 4,
    "VIRGULA": 4,
    "PONTO_VIRGULA": 4,
    "DOIS_PONTOS": 4,
    "PONTO": 4,
    "ID": 1,
    "INT": 3,
    "FLOAT": 3,
    "ERRO": 3,
    "EOF ": 0
}

export function formatTokens(rawLexems: GeneratorToken[], input: string): LexicReturn {
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

    for (let i = 0; i < tokens.length; i++) {

        // const token = tokens[i]

        // const split = input.split("\n");
        
        // for (let i = 0; i < split.length; i++) {

        //     const linha = split[i];
            
        //     for (let j = 0; j < linha.length; j++) {
        //         if(j > token.position.colStart)
        //     }
            
            
        // }

        // let linha = 1;

        // let j = 1;

        // while(j !== -1) {

            

        //     if (input[j] === "\n") {
        //         linha++;
        //         j = 1
        //         continue;
        //     }

        //     if (token.position.line === linha && token.position.colStart) {
        //        while(j !== token.position.colEnd) {
        //             charMap.push(tokenToColor[token.token]);
        //             j++;
        //        }
        //        break;
        //     }
        //     else {
        //         charMap.push(0);
        //     }

        //     j++;
        // }

    }

    return {
        error: false,
        charMap: charMap,
        tokens: tokens,
        errorChar: null
    };
}