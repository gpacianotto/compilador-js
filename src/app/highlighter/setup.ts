import * as monaco from 'monaco-editor-core';
import { setupMonarchLanguage } from './monarchLanguage';

export function setupLanguage() {
    (window as any).MonacoEnvironment = {
        getWorkerURL: function (_moduleID: any, _label: any) {
            return './editor.worker.js';
        }
    };
    monaco.languages.register({ id: 'LALG' });
    monaco.languages.onLanguage('LALG', () => {
        monaco.languages.setMonarchTokensProvider('LALG', setupMonarchLanguage);
    });
}