// Definição da gramática
lexer grammar LALG;

// Palavras reservadas
PROGRAM: 'program';
BEGIN: 'begin';
END: 'end';
PROCEDURE: 'procedure';
IF: 'if';
THEN: 'then';
ELSE: 'else';
WHILE: 'while';
DO: 'do';
TRUE: 'true';
FALSE: 'false';
INT: 'int';
BOOLEAN: 'boolean';
READ: 'read';
WRITE: 'write';
NOT: 'not';
VAR: 'var';

// Identificadores
ASSIGN: ':=';
SEMICOLON: ';';
COMMA: ',';
DOT: '.';
COLON: ':';
LPAREN: '(';
RPAREN: ')';
LBRACKET: '[';
RBRACKET: ']';
LETRA: [a-zA-Z_];

// Símbolos
PLUS: '+';
MINUS: '-';
TIMES: '*';
DIV: '/';
EQUAL: '=';
DIFF: '<>';
LESS_THEN: '<';
GREATER_THEN: '>';
LESS_TTHEN_EQUAL: '<=';
GREATER_THEN_EQUAL: '>=';

// Comentátios
COMMENT: '//' ~[\r\n]* -> skip;
MULTILINE_COMMENT: '{' .*? '}' -> skip;