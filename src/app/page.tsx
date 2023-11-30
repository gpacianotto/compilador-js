'use client'
import { Button, Row, Col, Input, Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { use, useEffect, useState } from 'react';
import { LexicReturn } from './utils/Interfaces';
import TextAreaWithLineNumber from 'text-area-with-line-number';
import { SaveButton } from './components/SaveButton';
import LexicTable from './components/LexicTable';
import Analisys from './utils/Analisys';
import CodeGenerator from './utils/CodeGenerator';
import Mepa from './utils/MEPA';
import ModalConsole from './components/ModalConsole';

export default function Home() {
  
  const [fileContentRaw, setFileContentRaw] = useState<string>("")
  const [lexic, setLexicResult] = useState<LexicReturn>({} as LexicReturn)
  const [errors, setErrorsResult] = useState<Array<string>>([]);
  const [analisys, setAnalisys] = useState<Analisys>({} as Analisys);
  const [generator, setGenerator] = useState<CodeGenerator>({} as CodeGenerator);
  const [generatedCode, setGeneratedCode] = useState<string[]>([] as string[]);
  const [openModalConsole, setOpenModalConsole] = useState<boolean>(false);

  function handleFilePickerClick() {
    // Create an input element of type 'file'
    const fileInput = document.createElement('input');
    fileInput.type = "file";
    

    // Add an event listener to handle file selection
    fileInput.addEventListener('change', (event) => {
      
      const target = event.target as HTMLInputElement;
        const files = target.files as FileList;

      const selectedFile = files[0];
      // Do something with the selected file, e.g., upload or process it
      console.log('Selected file:', selectedFile);
      console.log("extension: ", selectedFile.type);

      if(selectedFile.type !== "text/plain"){
        alert("precisa ser um arquivo .txt");
        return;
      }

      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContents = event?.target ? event.target.result : null;
        console.log(fileContents);
        setFileContentRaw(fileContents as string);
      };

      reader.readAsText(selectedFile);
    });

    // Click the file input element programmatically
    fileInput.click();
  };


  return (
    <main >
      <Row style={{backgroundColor: "white"}}>
        <Col className='text-center mt-4'>
          <Button onClick={() => {handleFilePickerClick()}}>
            Escolher arquivo
          </Button>
        </Col>
        <Col className='text-center mt-4'>
          <SaveButton content={fileContentRaw}/>
        </Col>
        
        <Col className='text-center mt-4'>
          <Button onClick={() => {

            const analisys = new Analisys(fileContentRaw);
            setAnalisys(analisys);
            setLexicResult(analisys.formatTokens(analisys.lexicAnalisys(), fileContentRaw));
            setErrorsResult(analisys.sintatic());
            setErrorsResult(analisys.semantic());

            // const lexicAux = lexicAnalisysGenerator(fileContentRaw);
            // setLexicResult(formatTokens(lexicAux, fileContentRaw));
            // setErrorsResult(sintaticAnalisysGenerator(fileContentRaw));

          }}>
            Analise(léxica/sintática/semântica)
          </Button>
        </Col>
        <Col className='text-center mt-4'>
          <Button onClick={() => {
            const generator = new CodeGenerator();
            setGenerator(generator);
            generator.start(analisys.tree);
          }}>
            Gerar código
          </Button>
        </Col>
        <Col className='text-center mt-4'>
          <Button onClick={() => {
            // const MEPA = new Mepa(generator.code);
            // MEPA.run_code();
            // setGeneratedCode(generator.generatedCode);
            setOpenModalConsole(true);
          }}>
            Executar código
          </Button>
        </Col>
        
      </Row>
      <ModalConsole codeGenerator={generator} isOpen={openModalConsole} setOpen={setOpenModalConsole}/>
      <Row className='mt-5'>
        <Col className='mb-5' style={{
          border: "1px solid black"
        }}>
          {/* <Input
            id='textArea'
            value={fileContentRaw}
            onChange={(e) => {setFileContentRaw(e.target.value)}}
            type='textarea'
            style={{minHeight: "500px"}}
          /> */}
          <TextAreaWithLineNumber
            value={fileContentRaw}
            onChange={(e : any) => {setFileContentRaw(e.target.value)}}
            style={{border: "1px solid black"}}
            height={"50vh"}
          />
          
        </Col>
        {/* <Col>
          <Highlighter lexic={lexic} code={fileContentRaw}/>
        </Col> */}
      </Row>
      <Row>
        <Col>
        {
          errors.map((er) => <>
            <Alert color="danger">
              {er}
            </Alert>
          </>)
        }
        
        </Col>
      </Row>
      <Row>
        <Col>
          <LexicTable lexic={lexic}/>
        </Col>
      </Row>
      <Row className='text-center mb-4'>
        
      </Row>
      
    </main>
    
  )
}
