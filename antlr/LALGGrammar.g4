parser grammar LALGGrammar;
options { tokenVocab = LALGLexer; }

numero: (INT | FLOAT);

termo: fator termo_aux ;

termo_aux: ( ( MULT | AND | DIV ) fator termo_aux )? ;

expressaoSimples:
    ( MAIS | MENOS )? termo expressaoSimples_aux ;

expressaoSimples_aux:
    ( ( MAIS | MENOS | OR ) termo expressaoSimples_aux )? ;

expressao:
    expressaoSimples expressao_aux;

expressao_aux:
    (RELACAO expressaoSimples)? ;

fator:
    ( variavel | numero | ( ABRE_PARENTESES expressao FECHA_PARENTESES ) | ( NOT fator ) | TRUE_CONST | FALSE_CONST ) ;

variavel:
    ID variavel1 ;

variavel1:
    expressao? ;

declaracaoVariavel: tipo listaID ;

listaID: ID listaID_aux;
listaID_aux: ( VIRGULA ID listaID_aux )?;

parteDeclaracaoVariavel: declaracaoVariavel parteDeclaracaoVariavel_aux PONTO_VIRGULA;

parteDeclaracaoVariavel_aux: ( PONTO_VIRGULA declaracaoVariavel parteDeclaracaoVariavel_aux )? ;

tipo: ( BOOL_TIPO | INT_TIPO | FLOAT_TIPO ) ;

programa:
    PROGRAM ID PONTO_VIRGULA
    	bloco 
	PONTO + EOF;

bloco: ( parteDeclaracaoVariavel )? 
       ( parteDeclaracaoSubRotina )? 
    	comandoComposto ;

parteDeclaracaoSubRotina: declaracaoProcedimento PONTO_VIRGULA parteDeclaracaoSubRotina_aux  ;

parteDeclaracaoSubRotina_aux: ( declaracaoProcedimento parteDeclaracaoSubRotina_aux PONTO_VIRGULA ) ? ; 

declaracaoProcedimento: PROCEDURE ID declaracaoProcedimento_aux PONTO_VIRGULA bloco ;

declaracaoProcedimento_aux: ( parametros )? ;

parametros: ABRE_PARENTESES secaoParametros parametros_aux FECHA_PARENTESES ;
parametros_aux: (PONTO_VIRGULA secaoParametros parametros_aux) ? ; 

secaoParametros: ( VAR )? listaID DOIS_PONTOS secaoParametrosFormais_aux ;
secaoParametrosFormais_aux: ID | tipo ;

comandoComposto: BEGIN comando comandoComposto_aux END ;
comandoComposto_aux: ( PONTO_VIRGULA comando comandoComposto_aux ) ? ;

comando: ( atribuicao | chamadaProcedimento | comandoComposto | comandoCondicional | comandoRepetitivo ) ;

atribuicao: variavel ATRIBUICAO expressao ;

chamadaProcedimento: (ID | READ | WRITE) chamadaProcedimento_aux ;
chamadaProcedimento_aux: ( ABRE_PARENTESES listaExpressao FECHA_PARENTESES )? ;

comandoCondicional: IF expressao THEN comando comandoCondicional_aux ;
comandoCondicional_aux: (ELSE comando)? ;

comandoRepetitivo: WHILE expressao DO comando ;

listaExpressao: expressao listaExpressao_aux ;
listaExpressao_aux: ( VIRGULA expressao listaExpressao_aux ) ? ;