import antlr4 from "antlr4";
import LALG from "../../../antlr/LALG";

const lexicAnalisysGenerator = (input: string) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new LALG(chars);
    const tokens = new antlr4.CommonTokenStream(lexer as any);
    console.log(tokens);
}

export default lexicAnalisysGenerator;