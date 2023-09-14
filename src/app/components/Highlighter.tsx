import colorSchemes from "../utils/ColorSchemes";
import { LexicReturn } from "../utils/Interfaces";
import { useEffect} from "react"

interface HighlighterProps {
    code: string,
    lexic: LexicReturn
}

export default function Highlighter(props : HighlighterProps) {
    const {code, lexic} = props;
    
    let lines = 0;

    return <>

        <div>
            {(!lexic || lexic.tokens === null) && code.split("").map((char) => {
                return <>
                    <span>
                        {char === "\n" && <><br></br></>}
                        {char !== "\n" && <>{char}</>}
                    </span>
                </>
            })}

            {(lexic.tokens && lexic.tokens?.length > 0) && code.split("").map((char, index) => {
                char === "\n" ? lines++ : null;
                let color = lexic.charMap[index]
                return <>
                    <span style={{fontWeight: "700" ,color: colorSchemes.default[color as keyof typeof colorSchemes.default]}}>
                        {char === "\n" && <><br></br> </>}
                        {/* {(char === "\n" || index === 0) && <>{lines + 1}{"\t"}</>} */}
                        {char !== "\n" && <>{char}</>}
                    </span>
                </>
            })}
        </div>
    
    </>
}