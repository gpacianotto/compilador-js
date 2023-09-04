grammar LALG;

programa : 'program' identificador ';' bloco '.';
bloco : (declaracao_variaveis ';')* (declaracao_subrotinas ';')? comando_composto;

declaracao_variaveis : tipo lista_identificadores;
tipo : 'int' | 'boolean';
lista_identificadores : identificador (',' identificador)*;

declaracao_subrotinas : declaracao_procedimento*;
declaracao_procedimento : 'procedure' identificador parametros_formais ';' bloco;
parametros_formais : '(' secao_parametros_formais ( ';' secao_parametros_formais )* ')';
secao_parametros_formais : lista_identificadores ':' identificador;

comando_composto : 'begin' comando ( ';' comando )* 'end';
comando : atribuicao | chamada_procedimento | comando_composto | comando_condicional | comando_repetitivo;

atribuicao : variavel ':=' expressao;
chamada_procedimento : identificador '(' lista_expressoes ')';
comando_condicional : 'if' expressao 'then' comando ('else' comando)?;
comando_repetitivo : 'while' expressao 'do' comando;

expressao : expressao_simples (relacao expressao_simples)?;
relacao : '=' | '<>' | '<' | '<=' | '>=' | '>';
expressao_simples : ( '+' | '-' )? termo ( ( '+' | '-' | 'or' ) termo )*;
termo : fator ( ( '*' | 'div' | 'and' ) fator )*;
fator : variavel | numero | '(' expressao ')' | 'not' fator;

variavel : identificador | identificador '[' expressao ']';
lista_expressoes : expressao (',' expressao)*;

identificador : LETRA (LETRA | DIGITO)*;
numero : DIGITO+;

DIGITO : [0-9];
LETRA : [a-zA-Z_];
WS : [ \t\r\n]+ -> skip;
