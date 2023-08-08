
let regexNumber = new RegExp('^[0-9]+.[0-9]*$');

const lexicAnalysis = (text: string) => {

    const tokens = text.split(' ');
    const lexems: string[] = [];

    tokens.forEach(token => {
        if (regexNumber.test(token)) {
            lexems.push('NUM');
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
        else {
            lexems.push('ID');
        }
    });

    return lexems;

}