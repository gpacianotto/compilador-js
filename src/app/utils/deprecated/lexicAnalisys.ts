//Código LEGADO e DEPRECIADO

import { LexicReturn, Token } from "./Interfaces";


const a_z = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const A_Z = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const digit = ['0','1','2','3','4','5','6','7','8','9'];
const letter = ['_', ...a_z, ...A_Z]
const reserved = ['program', 'procedure', 'begin', 'end', 'if', 'then', 'else', 'while', 'do']

let alphabet = [...digit, ...letter,'+','-','*','/','(',')',',','.',' ','\n','\t'];
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

const addToCharMap = ( value: number, times:number) => {

    times++;

    for(let i = 0; i < times; i++) {
        charMap.push(value);
    }

}

const lexicAnalysis = (text: string) : LexicReturn => {

    let tokens : Token[] = [] as Token[];
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
            if (digit.includes(char)) {
                let number_i = numberConcat(text, i);
                // console.log("concat: ", number_i)
                addToCharMap(1, number_i.i - i);
                let number = number_i.number;
                
                tokens.push({token: numberTypeTesting(number, i), lexem: number, position: {line: line, colStart: (i + 1), colEnd: (number_i.i + 1)}});
                i = number_i.i;
            }
            else {
                let opResult = operatorTesting(char);
                if (opResult) {
                    tokens.push({token: opResult.token, lexem: opResult.lexem, position:{line: line, colStart: (i + 1), colEnd: (i + 1)}});
                }
            }
        }

        //if it is not a valid char
        else {
            error = true;
            let errorConcatResult = errorConcat(text, i); 
            tokens.push({token: "ERROR", lexem: errorConcatResult.errorText, position: {line: line, colStart: i + 1, colEnd: (errorConcatResult.i + 1)}});
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

const errorConcat = (text: string, i: number) => {
    let j = i;
    let errorText = "";

    while (!alphabet.includes(text[j])) {
        errorText += text[j];
        j++;
    }

    i = j - 1

    return {errorText, i};
};

const numberConcat = (text: string, i: number) => {
    let j = i;
    let number = '';
    while (digit.includes(text[j])) {
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
    return "ERROR"
}

const operatorTesting = (char: string) => {
    switch (char) {
        case ' ':
            charMap.push(0)
            return null;
        case '+':
            charMap.push(2)
            return {token: "OPSOMA", lexem: "+"};
        case '-':
            charMap.push(2)
            return {token: "OPSUB", lexem: "-"};
        case '*':
            charMap.push(2)
            return {token: "OPMULT", lexem: "*"};
        case '/':
            charMap.push(2)
            return {token: "OPDIV", lexem: "/"};
        case '(':
            charMap.push(3)
            return {token: "AP", lexem: "("};
        case ')':
            charMap.push(3)
            return {token: "FP", lexem: ")"};
        case '\n': 
            charMap.push(0)
            return null;
    }
}

export default lexicAnalysis;