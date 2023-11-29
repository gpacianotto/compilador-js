

export default class Mepa {
    code_stack: string[];
    instruction_pointer: number;
    data_stack: (number | boolean | string | null)[];

    constructor(code_stack: string) {
        this.code_stack = code_stack.split("\n");
        this.instruction_pointer = 0;
        this.data_stack = [];
    }

    public run_code(): void {
        while (true) {
            const instruction_line = this.code_stack[this.instruction_pointer].split(" ");
            const instruction = instruction_line[0];
            const instruction_value = instruction_line.length === 2 ? parseInt(instruction_line[1]) : undefined;

            switch (instruction) {
                case "INPP":
                    this.instruction_pointer = 0;
                    this.data_stack = [];
                    break;

                case "AMEM":
                    for (let i = 0; i < (instruction_value ?? 0); i++) {
                        this.data_stack.push(null);
                    }
                    break;

                case "CRCT":
                    this.data_stack.push(instruction_value!);
                    break;

                case "CRVL":
                    const loaded_value = this.data_stack[instruction_value!];
                    this.data_stack.push(loaded_value);
                    break;

                case "ARMZ":
                    this.data_stack[instruction_value!] = this.data_stack.pop()!;
                    break;

                case "SOMA":
                    const val2 = this.data_stack.pop()!;
                    const val1 = this.data_stack.pop()!;
                    this.data_stack.push(Number(val1) + Number(val2));
                    break;

                case "SUB":
                    const subVal2 = this.data_stack.pop()!;
                    const subVal1 = this.data_stack.pop()!;
                    this.data_stack.push(Number(subVal1) - Number(subVal2));
                    break;
            
                case "MULT":
                    const multVal2 = this.data_stack.pop()!;
                    const multVal1 = this.data_stack.pop()!;
                    this.data_stack.push(Number(multVal1) * Number(multVal2));
                    break;
            
                case "DIVI":
                    const divVal2 = this.data_stack.pop()!;
                    const divVal1 = this.data_stack.pop()!;
                    this.data_stack.push(Math.floor(Number(divVal1) / Number(divVal2)));
                    break;
            
                case "MODI":
                    const modVal2 = this.data_stack.pop()!;
                    const modVal1 = this.data_stack.pop()!;
                    this.data_stack.push(Number(modVal1) % Number(modVal2));
                    break;
            
                case "INVR":
                    const invrVal = this.data_stack.pop()!;
                    this.data_stack.push(-1 * Number(invrVal));
                    break;
            
                case "CONJ":
                    const conjVal2 = this.data_stack.pop()!;
                    const conjVal1 = this.data_stack.pop()!;
                    this.data_stack.push(conjVal1 && conjVal2);
                    break;
            
                case "DISJ":
                    const disjVal2 = this.data_stack.pop()!;
                    const disjVal1 = this.data_stack.pop()!;
                    this.data_stack.push(disjVal1 || disjVal2);
                    break;
            
                case "NEGA":
                    const negaVal = this.data_stack.pop()!;
                    this.data_stack.push(!negaVal);
                    break;
            
                case "CMME":
                    const cmmeVal2 = this.data_stack.pop()!;
                    const cmmeVal1 = this.data_stack.pop()!;
                    this.data_stack.push(cmmeVal1 < cmmeVal2);
                    break;
            
                case "CMMA":
                    const cmmaVal2 = this.data_stack.pop()!;
                    const cmmaVal1 = this.data_stack.pop()!;
                    this.data_stack.push(cmmaVal1 > cmmaVal2);
                    break;
            
                case "CMIG":
                    const cmigVal2 = this.data_stack.pop()!;
                    const cmigVal1 = this.data_stack.pop()!;
                    this.data_stack.push(cmigVal1 === cmigVal2);
                    break;
            
                case "CMDG":
                    const cmdgVal2 = this.data_stack.pop()!;
                    const cmdgVal1 = this.data_stack.pop()!;
                    this.data_stack.push(cmdgVal1 !== cmdgVal2);
                    break;
            
                case "CMEG":
                    const cmegVal2 = this.data_stack.pop()!;
                    const cmegVal1 = this.data_stack.pop()!;
                    this.data_stack.push(cmegVal1 <= cmegVal2);
                    break;
            
                case "CMAG":
                    const cmagVal2 = this.data_stack.pop()!;
                    const cmagVal1 = this.data_stack.pop()!;
                    this.data_stack.push(cmagVal1 >= cmagVal2);
                    break;
            
                case "DSVS":
                    this.instruction_pointer = instruction_value!;
                    break;
            
                case "DSVF":
                    const flag = this.data_stack.pop()!;
                    if (!flag) {
                        this.instruction_pointer = instruction_value!;
                    }
                    break;
            
                case "LEIT":
                    const leitVal = Number(prompt());
                    this.data_stack.push(leitVal);
                    break;
            
                case "LECH":
                    const lechVal = prompt();
                    this.data_stack.push(lechVal);
                    break;
            
                case "IMPR":
                    console.log(Number(this.data_stack.pop()));
                    break;
            
                case "IMPC":
                    console.log(this.data_stack.pop());
                    break;
            
                case "IMPE":
                    console.log("");
                    break;
            
                case "DMEM":
                    for (let i = 0; i < (instruction_value ?? 0); i++) {
                        this.data_stack.pop();
                    }
                    break;
            
                case "NADA":
                    break;
            
                case "PARA":
                    return;
            
                default:
                    console.log("COMANDO DESCONHECIDO");
                    return;
            }

            this.instruction_pointer += 1;
        }
    }
}
