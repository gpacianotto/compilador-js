'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

    function handleFilePickerClick() {
        // Create an input element of type 'file'
        const fileInput = document.createElement('input');
        fileInput.type = "file";
        
    
        // Add an event listener to handle file selection
        fileInput.addEventListener('change', (event) => {
            
          const selectedFile = event?.target ? event.target.files[0] : null;
          // Do something with the selected file, e.g., upload or process it
          console.log('Selected file:', selectedFile);
          console.log("extension: ", selectedFile.type);

          if(selectedFile.type !== "text/plain"){
            alert("precisa ser um arquivo .txt");
            return;
          }
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
      </Row>
    </main>
    
  )
}
