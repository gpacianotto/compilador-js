lexer grammar LALGLexer;

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
fragment INT_LITERAL: 'int';
fragment FLOAT_LITERAL: 'float';
fragment BOOL_LITERAL: 'boolean';
TIPO: INT_LITERAL | FLOAT_LITERAL | BOOL_LITERAL;
READ: 'read';
WRITE: 'write';
BOOL_CONST: 'true' | 'false';
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
ABRE_COLCHETES: '[';
FECHA_COLCHETES: ']';
VIRGULA: ',';
PONTO_VIRGULA: ';';
DOIS_PONTOS: ':';
PONTO: '.';

// operações lógicas
AND: 'and';
OR: 'or';

// Identificadores
fragment LETRA: [a-zA-Z_];
fragment DIGITO: [0-9];
ID: LETRA (LETRA | DIGITO)*;
INT: DIGITO+;
FLOAT: DIGITO+ '.' DIGITO+;

// Erro
ERRO: .;