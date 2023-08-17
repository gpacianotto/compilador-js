let alphabet = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','(',')',',','.',' ','\n','\t'];
let numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
let regexIntegerNumber = new RegExp('^[0-9]+$');
let regexFloatNumber = new RegExp('^[0-9]+.?[0-9]*$');

/*
    para charmap: 

    0: nada ou espaço
    1: número
    2: operador
    3: delimitador ()

*/

let charMap : number[] = [];

export interface errorPosition {
    line: number,
    col: number
}
export interface LexicReturn {
    error: boolean,
    tokens: any[] | null,
    errorChar: string[] | null,
    erroPos?: errorPosition[],
    charMap: number[]
}

const addToCharMap = ( value: number, times:number) => {

    times++;

    for(let i = 0; i < times; i++) {
        charMap.push(value);
    }

}

const lexicAnalysis = (text: string) : LexicReturn => {

    let tokens = [];
    let error = false;
    let errorCharList = [];
    let errorPositionList = [];
    let result : LexicReturn = {
        error: false,
        tokens: null,
        errorChar: null,
        
        charMap: []
    };

    charMap = [];

    let line = 1;
    let col = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if(char === "\n") {
            line++;
            col = 0;
        }
        //tests if char is a valid char
        if (alphabet.includes(char)) {
            //tests if char is a integer number and skips until the end of the number
            if (numbers.includes(char)) {
                let number_i = numberConcat(text, i);
                console.log("concat: ", number_i)
                addToCharMap(1, number_i.i - i);
                let number = number_i.number;
                i = number_i.i;
                tokens.push(numberTypeTesting(number, i));
            }
            else {
                let opResult = operatorTesting(char);
                if (opResult) {
                    tokens.push(opResult);
                }
            }
        }

        //if it is not a valid char
        else {
            error = true;
            tokens.push("ERROR");
            console.error("Error: invalid char: " + char + " at position " + i);
            charMap.push(4);
            errorPositionList.push({line: line, col: col});
            errorCharList.push(char);
        }
        col++;
    }

    if (error) {
        result.charMap = charMap;
        result.tokens = tokens;
        result.error = true;
        result.errorChar = errorCharList;
        result.erroPos = errorPositionList;
        return result as LexicReturn;
    }

    result = {error: false, tokens: tokens, errorChar: null, charMap: charMap};
    return  result as LexicReturn;
}

const numberConcat = (text: string, i: number) => {
    let j = i;
    let number = '';
    while (numbers.includes(text[j])) {
        number += text[j];
        j++;
    }
    i = j - 1;
    return {number, i};
}



const numberTypeTesting = (number: string, i: number) => {
    if (regexIntegerNumber.test(number)) {
        return "INTNUM";
    }
    if (regexFloatNumber.test(number)) {
        return "FLOATNUM";
    }
}

const operatorTesting = (char: string) => {
    switch (char) {
        case ' ':
            charMap.push(0)
            return null;
        case '+':
            charMap.push(2)
            return "OPSOMA";
        case '-':
            charMap.push(2)
            return "OPSUB";
        case '*':
            charMap.push(2)
            return "OPMULT";
        case '/':
            charMap.push(2)
            return "OPDIV";
        case '(':
            charMap.push(3)
            return "AP";
        case ')':
            charMap.push(3)
            return "FP";
        case '\n': 
            charMap.push(0)
            return "NEXTLINE";
    }
}

export default lexicAnalysis;