export interface errorPosition { //deprecated
    line: number,
    col: number
}

export interface Position {
    line: number,
    colStart: number,
    colEnd: number
}
export interface LexicReturn {
    error: boolean,
    tokens: Token[] | null,
    errorChar: string[] | null,
    erroPos?: errorPosition[],
    charMap: number[]
}

export interface Token {
    lexem: string,
    token: string,
    position: Position
}

// Objeto para formato de retorno do analisador léxico com Gerador
export interface GeneratorToken {
    Token: string;
    Lexema: string;
    Linha: number;
    Coluna: number;
}
