import { CharStream, CommonTokenStream } from 'antlr4';
import LALG from '../../../antlr/LALG';


export default function lexicAnalisysGenerator(input: string) {
        const chars = new CharStream(input);
        const lexer = new LALG(chars);
        const tokens = new CommonTokenStream(lexer);
        console.log(tokens.tokens);
        tokens.fill();
    
        const result = tokens.tokens.map((token) => {
            const tokenType = LALG.symbolicNames[token.type];
            const tokenName = tokenType ? tokenType : token.text;
            return `${tokenName} ${token.text}`;
        
        }).join('\n');

        console.log(result);
    }