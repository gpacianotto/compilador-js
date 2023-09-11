const a_z = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const A_Z = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const digit = ['0','1','2','3','4','5','6','7','8','9'];
const letter = ['_', ...a_z, ...A_Z]
const reserved = ['program', 'procedure', 'begin', 'end', 'if', 'then', 'else', 'while', 'do']

const number = new RegExp('^[0-9]+$');
// const identificator = new RegExp('^[a-zA-Z|_][a-zA-Z]{0,9}$');

const identificator = [...a_z, ...A_Z, '_']

function LALG(str : string) {

    let buffer = ""

    // for(let i = 0; i < str.length; i++) {
    //     if(identificator.includes())
    // }

    


}

console.log();