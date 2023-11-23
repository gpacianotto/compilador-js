import antlr4 from "antlr4";

export default class CustomErrorListener extends antlr4.error.ErrorListener {
    errors: string[];

    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer: antlr4.Parser, offendingSymbol: antlr4.Token, line: number, column: number, msg: string, e: antlr4.error.RecognitionException) {
        const error = `Erro na linha ${line}, coluna ${column + 1}: ${msg}`;
        console.log(error);
        this.errors.push(error);
    }

    semanticError(line: number, column: number, msg: string) {
        const error = `Erro na linha ${line}, coluna ${column + 1}: ${msg}`;
        console.log(error);
        this.errors.push(error);
    }

    getErrors() {
        return this.errors;
    }
}