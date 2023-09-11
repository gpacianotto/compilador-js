'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button, Row, Col, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import lexicAnalysis, { LexicReturn } from './utils/lexicAnalisys';
import lexicAnalisysGenerator from './utils/lexicAnalisysGenerator';
import TextAreaWithLineNumber from 'text-area-with-line-number';
import Highlighter from './components/Highlighter';
import { SaveButton } from './components/SaveButton';
import LexicTable from './components/LexicTable';

export default function Home() {
  
  const [fileContentRaw, setFileContentRaw] = useState<string>("")
  const [lexic, setLexic] = useState<LexicReturn>({} as LexicReturn)

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
      </Row>
      
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
        <Col>
          <Highlighter lexic={lexic} code={fileContentRaw}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <LexicTable lexic={lexic}/>
        </Col>
      </Row>
      <Row className='text-center mb-4'>
        <Col>
          <Button onClick={() => {
            
            // const lexicAux : LexicReturn = lexicAnalysis(fileContentRaw);
            // console.log(lexicAux);
            // console.log(fileContentRaw.length)

            const lexicAux = lexicAnalisysGenerator(fileContentRaw);

            // setLexic(lexicAux);

            // console.log(fileContentRaw !== "" ? lexicAnalysis(fileContentRaw) : null)

          }}>
            Analise Lexica
          </Button>
        </Col>
      </Row>
      
    </main>
    
  )
}
