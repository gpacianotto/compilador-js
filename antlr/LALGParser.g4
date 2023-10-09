parser grammar LALGParser;
options { tokenVocab = LALGLexer; }

programa: PROGRAM ID PONTO_VIRGULA bloco PONTO;

bloco: declaracoesVariaveis? declaracoesSubrotinas? comandoComposto;

declaracoesVariaveis: declaracaoVariaveis (PONTO_VIRGULA declaracaoVariaveis)* PONTO_VIRGULA;

declaracaoVariaveis: TIPO listaIdentificadores;

listaIdentificadores: ID (VIRGULA ID)*;

declaracoesSubrotinas: declaracaoProcedimento (PONTO_VIRGULA declaracaoProcedimento)*;

declaracaoProcedimento:	PROCEDURE ID parametrosFormais PONTO_VIRGULA bloco;

parametrosFormais: ABRE_PARENTESES secaoParametrosFormais ( PONTO_VIRGULA secaoParametrosFormais )* FECHA_PARENTESES;

secaoParametrosFormais: VAR? listaIdentificadores DOIS_PONTOS ID;

comandoComposto: BEGIN comando (PONTO_VIRGULA comando)* END;

comando: atribuicao
	| chamadaProcedimento
	| comandoComposto
	| comandoCondicional
	| comandoRepetitivo;

atribuicao: variavel ATRIBUICAO expressao;

chamadaProcedimento: ID ABRE_PARENTESES listaExpressoes? FECHA_PARENTESES;

comandoCondicional: IF expressao THEN comando (ELSE comando)?;

comandoRepetitivo: WHILE expressao DO comando;

expressao: expressaoSimples (RELACAO expressaoSimples)?;

expressaoSimples: (MAIS | MENOS)? termo ( (MAIS | MENOS | OR) termo )*;

termo: fator ((MULT | DIV | AND) fator)*;

fator: variavel
	| TIPO
	| ABRE_PARENTESES expressao FECHA_PARENTESES
	| NOT fator;

variavel: ID | ID ABRE_COLCHETES expressao FECHA_COLCHETES;

listaExpressoes: expressao (VIRGULA expressao)*;