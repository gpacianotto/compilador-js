import { Table } from "reactstrap";
import { LexicReturn } from "../utils/Interfaces";

interface LexicTableProps {
    lexic: LexicReturn
}

export default function LexicTable(props : LexicTableProps) {

    return <>
        
        <Table striped hover>
            <thead>
                <tr>
                <th>
                    index
                </th>
                <th>
                    Lexem
                </th>
                <th>
                    Token
                </th>
                <th>
                    Line
                </th>
                <th>
                    Col start
                </th>
                <th>
                    Col end
                </th>
                </tr>
            </thead>
            <tbody>
                {props.lexic.tokens?.map((item, index) => {
                    
                    return <>
                    <tr>
                        <td>{index}</td>
                        <td>{item.lexem}</td>
                        <td>{item.token}</td>
                        <td>{item.position.line}</td>
                        <td>{item.position.colStart}</td>
                        <td>{item.position.colEnd}</td>
                    </tr>
                    </>
                })}
            </tbody>

        </Table>
    
    </>
}