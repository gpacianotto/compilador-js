import { CharStream, CommonTokenStream } from 'antlr4';
import LALG from '../../../antlr/LALG';


export default function lexicAnalisysGenerator(input: string) {
        const chars = new CharStream(input);
        const lexer = new LALG(chars);        
        const tokens = new CommonTokenStream(lexer);
        tokens.fill();
    
        const result = tokens.tokens.map((token) => {
            const type = token.type;
            const text = token.text;
            const line = token.line;
            const column = token.column;
            const symbolicName = lexer.symbolicNames[type];

            return {'Token': symbolicName, 'Lexema': text, 'Linha': line, 'Coluna': column}
        });

        console.log(result);
        return result;
    }