import * as monaco from "monaco-editor-core";
import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const setupMonarchLanguage =  <ILanguage> {
    defaultToken: "invalid",
    keywords: [
        'program',
        'begin',
        'end',
        'var',
        'procedure',
        'read',
        'write',
        'if',
        'then',
        'else',
        'while',
        'do',
        'not',
    ],
    typeKeywords: [
        'integer',
        'boolean',
    ],
    operators: [
        '+',
        '-',
        '*',
        '/',
        '<',
        '<=',
        '>',
        '>=',
        '=',
        '<>',
        ':=',
        'and',
        'or',
    ],
    symbols: /[=><:]+/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    tokenizer: {
        root: [
            [/[a-zA-Z_]\w*/, {
                cases: {
                    '@keywords': 'keyword',
                    '@typeKeywords': 'typeKeyword',
                    '@default': 'identifier',
                },
            }],
            { include: '@whitespace' },
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/@symbols/, {
                cases: {
                    '@operators': 'operator',
                    '@default': '',
                },
            }],
            [/\d*\.\d+([eE][-+]?\d+)?/, 'number.float'],
            [/\d+/, 'number'],
            [/[;,.]/, 'delimiter'],
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment'],
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop'],
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/{comment}/, 'comment', '@comment'],
        ],
    },
};