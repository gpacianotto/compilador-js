import { SetStateAction, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap"

interface SaveButtonProps {
    content: string
}

export function SaveButton(props : SaveButtonProps) {
    
    const [fileName, setFileName] = useState<string>("text.txt");
    const [showModal, setShowModal] = useState<boolean>(false);
    const toggle = () => setShowModal(!showModal);

    const handleDownloadClick = () => {
        const blob = new Blob([props.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // Specify the filename for the downloaded file
        a.style.display = 'none';
        document.body.appendChild(a);
    
        a.click();
    
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return <>
        <Modal isOpen={showModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Salvando Arquivo</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="fileName">
                            Informe o Nome do arquivo
                        </Label>
                        <Input
                            id="fileName"
                            value={fileName}
                            onChange={(e) => {
                                setFileName(e.target.value);
                            }}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={() => {
                handleDownloadClick();
                toggle()
            }}>
                Salvar
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancelar
            </Button>
            </ModalFooter>
        </Modal>
        <Button onClick={() => {
            setShowModal(true);
        }}>
            Salvar Arquivo    
        </Button>
    </>
}