
let regexIntegerNumber = new RegExp('^[0-9]+$');
let regexFloatNumber = new RegExp('^[0-9]+.?[0-9]*$');

const lexicAnalysis = (text: string) => {

    const tokens = text.split(' ');
    const lexems: string[] = [];

    tokens.forEach(token => {
        if (token === " "){
            return;   
        }
        if (regexIntegerNumber.test(token)) {
            lexems.push('INTNUM');
        }
        if (regexFloatNumber.test(token)) {
            lexems.push('FLOATNUM');
        }
        if (token === '+') {
            lexems.push('OPSOMA');
        }
        if (token === '-') {
            lexems.push('OPSUB');
        }
        if (token === '*') {
            lexems.push('OPMULT');
        }
        if (token === '/') {
            lexems.push('OPDIV');
        }
        if (token === '(') {
            lexems.push('AP');
        }
        if (token === ')') {
            lexems.push('FP');
        }
    });
    return lexems;
}

export default lexicAnalysis;