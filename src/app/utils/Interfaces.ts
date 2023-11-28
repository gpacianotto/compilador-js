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

export class Symbol {
    name: string;
    isUsed: boolean;
    position: Position;

    constructor(name: string, isUsed: boolean, position: Position) {
        this.name = name;
        this.isUsed = isUsed;
        this.position = position;
    }
}

export class VariableSymbol extends Symbol {
    type: string;

    constructor(name: string, type: string, isUsed: boolean, position: Position) {
        super(name, isUsed, position);
        this.type = type;
    }
}

export class ParameterSymbol extends Symbol {
    type: string;

    constructor(name: string, type: string, isUsed: boolean, position: Position) {
        super(name, isUsed, position);
        this.type = type;
    }
}

export class ProcedureSymbol extends Symbol {
    parameters: ParameterSymbol[];

    constructor(name: string, isUsed: boolean, position: Position, parameters: ParameterSymbol[]) {
        super(name, isUsed, position);
        this.parameters = parameters;
    }
}