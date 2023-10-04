import * as React from 'react';
import * as monaco from 'monaco-editor-core';

export default function Editor() {
    let divNode: HTMLElement;
    
    const assingRef = React.useCallback(node => {
        divNode = node;
    }, []);
    React.useEffect(() => {
        if (divNode) {
        const editor = monaco.editor.create(divNode, {
            language: 'LALG',
            minimap: {enabled: false},
        });
        }
    }, [assingRef]);

    return <div ref={assingRef} style={{width: '100%', height: '500px'}}></div>;
}