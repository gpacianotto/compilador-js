lexer grammar LALG;

// Comentátios
COMENTARIO: '//' ~[\r\n]* -> skip;
COMENTARIO_MULTI: '{' .*? '}' -> skip;
WS: [ \t\r\n]+ -> skip;

// Palavras reservadas
PROGRAM: 'program';
BEGIN: 'begin';
END: 'end';
VAR: 'var';
PROCEDURE: 'procedure';
INT_LITERAL: 'int';
FLOAT_LITERAL: 'float';
BOOL_CONST: 'boolean';
READ: 'read';
WRITE: 'write';
BOOLEAN_LITERAL: 'true' | 'false';
IF: 'if';
THEN: 'then';
ELSE: 'else';
WHILE: 'while';
DO: 'do';
NOT: 'not';

// Terminais
ATRIBUICAO: ':=';
MAIS: '+';
MENOS: '-';
MULT: '*';
DIV: '/';
RELACAO: '<' | '>' | '<=' | '>=' | '=' | '<>';
ABRE_PARENTESES: '(';
FECHA_PARENTESES: ')';
VIRGULA: ',';
PONTO_VIRGULA: ';';
DOIS_PONTOS: ':';


// Identificadores
fragment LETRA: [a-zA-Z_];
fragment DIGITO: [0-9];
ID: LETRA (LETRA | DIGITO)*;
INT: DIGITO+;
FLOAT: DIGITO+ '.' DIGITO+;