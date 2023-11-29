

export default class Mepa {
    codeStack: string[];
    instructionPointer: number;
    dataStack: (number | boolean | string | null)[];

    constructor(code_stack: string) {
        this.codeStack = code_stack.split("\n");
        this.instructionPointer = 0;
        this.dataStack = [];
    }

    public run_code(): void {
        while (true) {
            const instructionLine = this.codeStack[this.instructionPointer].split(" ");
            const instruction = instructionLine[0];
            const instructionValue = instructionLine.length > 1 ? parseInt(instructionLine[1]) : undefined;

            switch (instruction) {
                case "INPP":
                    this.instructionPointer = 0;
                    this.dataStack = [];
                    break;

                case "AMEM":
                    for (let i = 0; i < (instructionValue ?? 0); i++) {
                        this.dataStack.push(null);
                    }
                    break;

                case "CRCT":
                    this.dataStack.push(instructionValue!);
                    break;

                case "CRVL":
                    const loaded_value = this.dataStack[instructionValue!];
                    this.dataStack.push(loaded_value);
                    break;

                case "ARMZ":
                    this.dataStack[instructionValue!] = this.dataStack.pop()!;
                    break;

                case "SOMA":
                    const val2 = this.dataStack.pop()!;
                    const val1 = this.dataStack.pop()!;
                    this.dataStack.push(Number(val1) + Number(val2));
                    break;

                case "SUBT":
                    const subVal2 = this.dataStack.pop()!;
                    const subVal1 = this.dataStack.pop()!;
                    this.dataStack.push(Number(subVal1) - Number(subVal2));
                    break;
            
                case "MULT":
                    const multVal2 = this.dataStack.pop()!;
                    const multVal1 = this.dataStack.pop()!;
                    this.dataStack.push(Number(multVal1) * Number(multVal2));
                    break;
            
                case "DIVI":
                    const divVal2 = this.dataStack.pop()!;
                    const divVal1 = this.dataStack.pop()!;
                    this.dataStack.push(Math.floor(Number(divVal1) / Number(divVal2)));
                    break;
            
                case "MODI":
                    const modVal2 = this.dataStack.pop()!;
                    const modVal1 = this.dataStack.pop()!;
                    this.dataStack.push(Number(modVal1) % Number(modVal2));
                    break;
            
                case "INVR":
                    const invrVal = this.dataStack.pop()!;
                    this.dataStack.push(-1 * Number(invrVal));
                    break;
            
                case "CONJ":
                    const conjVal2 = this.dataStack.pop()!;
                    const conjVal1 = this.dataStack.pop()!;
                    this.dataStack.push(conjVal1 && conjVal2);
                    break;
            
                case "DISJ":
                    const disjVal2 = this.dataStack.pop()!;
                    const disjVal1 = this.dataStack.pop()!;
                    this.dataStack.push(disjVal1 || disjVal2);
                    break;
            
                case "NEGA":
                    const negaVal = this.dataStack.pop()!;
                    this.dataStack.push(!negaVal);
                    break;
            
                case "CMME":
                    const cmmeVal2 = this.dataStack.pop()!;
                    const cmmeVal1 = this.dataStack.pop()!;
                    this.dataStack.push(cmmeVal1 < cmmeVal2);
                    break;
            
                case "CMMA":
                    const cmmaVal2 = this.dataStack.pop()!;
                    const cmmaVal1 = this.dataStack.pop()!;
                    this.dataStack.push(cmmaVal1 > cmmaVal2);
                    break;
            
                case "CMIG":
                    const cmigVal2 = this.dataStack.pop()!;
                    const cmigVal1 = this.dataStack.pop()!;
                    this.dataStack.push(cmigVal1 === cmigVal2);
                    break;
            
                case "CMDG":
                    const cmdgVal2 = this.dataStack.pop()!;
                    const cmdgVal1 = this.dataStack.pop()!;
                    this.dataStack.push(cmdgVal1 !== cmdgVal2);
                    break;
            
                case "CMEG":
                    const cmegVal2 = this.dataStack.pop()!;
                    const cmegVal1 = this.dataStack.pop()!;
                    this.dataStack.push(cmegVal1 <= cmegVal2);
                    break;
            
                case "CMAG":
                    const cmagVal2 = this.dataStack.pop()!;
                    const cmagVal1 = this.dataStack.pop()!;
                    this.dataStack.push(cmagVal1 >= cmagVal2);
                    break;
            
                case "DSVS":
                    this.instructionPointer = instructionValue!;
                    break;
            
                case "DSVF":
                    const flag = this.dataStack.pop()!;
                    if (!flag) {
                        this.instructionPointer = instructionValue!;
                    }
                    break;
            
                case "LEIT":
                    const leitVal = Number(prompt());
                    this.dataStack.push(leitVal);
                    break;
            
                case "LECH":
                    const lechVal = prompt();
                    this.dataStack.push(lechVal);
                    break;
            
                case "IMPR":
                    console.log(Number(this.dataStack.pop()));
                    break;
            
                case "IMPC":
                    console.log(this.dataStack.pop());
                    break;
            
                case "IMPE":
                    console.log("");
                    break;
            
                case "DMEM":
                    for (let i = 0; i < (instructionValue ?? 0); i++) {
                        this.dataStack.pop();
                    }
                    break;
            
                case "NADA":
                    break;
            
                case "PARA":
                    console.log("FIM DA EXECUÇÃO");
                    return;
            
                default:
                    console.log("COMANDO DESCONHECIDO: " + instruction);
                    return;
            }

            this.instructionPointer += 1;
        }
    }
}
