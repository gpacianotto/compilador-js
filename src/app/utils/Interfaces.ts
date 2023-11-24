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

export interface Symbol {
    name: string,
    position: Position,
}

export interface Variable extends Symbol {
    type: string,
    isUsed: boolean,
}

export interface ProcedureParam extends Symbol {
    type: string,
    isUsed: boolean,
}

export interface Procedure extends Symbol {
    params: ProcedureParam[],
    isUsed: boolean,
}