let alphabet = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','(',')',',','.',' ','\n','\t'];
let numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
let regexIntegerNumber = new RegExp('^[0-9]+$');
let regexFloatNumber = new RegExp('^[0-9]+.?[0-9]*$');

const lexicAnalysis = (text: string) => {

    let tokens = [];
    let currentToken = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        //tests if char is a valid char
        if (alphabet.includes(char)) {
            //tests if char is a integer number
            if (numbers.includes(char)) {
                let number_i = numberConcat(text, i);
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
            console.log("Error: invalid char: " + char + " at position " + i);
            return;
        }
    }

    return tokens;
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
    else if (regexFloatNumber.test(number)) {
        return "FLOATNUM";
    }
    else {
        console.log("Error: invalid number: " + number + " at position " + i);
        return;
    }
}

const operatorTesting = (char: string) => {
    switch (char) {
        case ' ':
            return null;
        case '+':
            return "OPSOMA";
        case '-':
            return "OPSUB";
        case '*':
            return "OPMULT";
        case '/':
            return "OPDIV";
        case '(':
            return "AP";
        case ')':
            return "FP";
    }
}

export default lexicAnalysis;