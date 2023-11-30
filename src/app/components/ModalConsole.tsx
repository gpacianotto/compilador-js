import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Terminal from "react-console-emulator"
import { useEffect, useRef, useState } from "react";
import CodeGenerator from "../utils/CodeGenerator";
import Mepa from "../utils/MEPA";

interface Props {
    isOpen: boolean;
    setOpen: (prop:boolean) => void;
    codeGenerator: CodeGenerator
}


function waitForEnter(): Promise<void> {
    return new Promise<void>((resolve) => {
      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          window.removeEventListener('keydown', handleKeyPress);
          resolve();
        }
      };
  
      window.addEventListener('keydown', handleKeyPress);
    });
}


export default function ModalConsole({isOpen, setOpen, codeGenerator} : Props) {
    
    const terminalRef = useRef();
    const [processedCommands, setProcessedCommands] = useState(0);
    const [refresh, setRefresh] = useState<boolean>(false);

    

    //@ts-ignore
    const printLine = (str: string) => {terminalRef.current.pushToStdout(str)}

    
    const readLine = async () : Promise<string|null> => {

        printLine("insira o valor da variavel");

        await waitForEnter();
        //@ts-ignore
        return terminalRef.current.terminalInput.current.value
    }

    const refreshLoading = (n : number) => {
        if(terminalRef.current) {
            printLine("Linha executada: " + n);
            setRefresh(!refresh);
        }
    }
    
    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args: string[]) => args.join(' ')
        },
        start: {
            fn: async (...args: string[]) => {
                const MEPA = new Mepa(codeGenerator.code);
                const codeGenerated = codeGenerator.generatedCode;
                printLine("Lendo Código de execução: ")
                
                if(args[0] === "devmode") {
                    for (let i = 0; i < codeGenerated.length; i++) {
                    
                        printLine(codeGenerated[i]);
                        
                    }
                }
                

                printLine("Executando código: ")

                await MEPA.run_code({
                    printLineCallback: printLine,
                    readLineCallback: readLine
                });

                return "código executado com sucesso."
            }
        }
    }

    useEffect(() => {
        
    }, [])

    return <>
    <Modal scrollable isOpen={isOpen} toggle={() => {setOpen(!isOpen)}} size="xl">
        <ModalHeader>Rodando Programa</ModalHeader>
        <ModalBody>
            <Terminal
                commands={commands}
                promptLabel={' '}
                ref={terminalRef}
                welcomeMessage={'Para começar a execução do programa, execute o comando "start"'}
                commandCallback={() => {}}
            />
        </ModalBody>
        <ModalFooter>
            <Button onClick={() => {setOpen(false)}}>
                Encerrar programa
            </Button>
        </ModalFooter>
    </Modal>
    </>
}