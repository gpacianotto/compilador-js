// Generated from ./antlr/LALGParser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { NumeroContext } from "./LALGParser";
import { TermoContext } from "./LALGParser";
import { Termo_auxContext } from "./LALGParser";
import { ExpressaoSimplesContext } from "./LALGParser";
import { ExpressaoSimples_auxContext } from "./LALGParser";
import { ExpressaoContext } from "./LALGParser";
import { Expressao_auxContext } from "./LALGParser";
import { FatorContext } from "./LALGParser";
import { VariavelContext } from "./LALGParser";
import { Variavel1Context } from "./LALGParser";
import { DeclaracaoVariavelContext } from "./LALGParser";
import { ListaIDContext } from "./LALGParser";
import { ListaID_auxContext } from "./LALGParser";
import { ParteDeclaracaoVariavelContext } from "./LALGParser";
import { ParteDeclaracaoVariavel_auxContext } from "./LALGParser";
import { TipoContext } from "./LALGParser";
import { ProgramaContext } from "./LALGParser";
import { BlocoContext } from "./LALGParser";
import { ParteDeclaracaoSubRotinaContext } from "./LALGParser";
import { ParteDeclaracaoSubRotina_auxContext } from "./LALGParser";
import { DeclaracaoProcedimentoContext } from "./LALGParser";
import { DeclaracaoProcedimento_auxContext } from "./LALGParser";
import { ParametrosContext } from "./LALGParser";
import { Parametros_auxContext } from "./LALGParser";
import { SecaoParametrosContext } from "./LALGParser";
import { SecaoParametrosFormais_auxContext } from "./LALGParser";
import { ComandoCompostoContext } from "./LALGParser";
import { ComandoComposto_auxContext } from "./LALGParser";
import { ComandoContext } from "./LALGParser";
import { AtribuicaoContext } from "./LALGParser";
import { ChamadaProcedimentoContext } from "./LALGParser";
import { ChamadaProcedimento_auxContext } from "./LALGParser";
import { ComandoCondicionalContext } from "./LALGParser";
import { ComandoCondicional_auxContext } from "./LALGParser";
import { ComandoRepetitivoContext } from "./LALGParser";
import { ListaExpressaoContext } from "./LALGParser";
import { ListaExpressao_auxContext } from "./LALGParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LALGParser`.
 */
export default class LALGParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LALGParser.numero`.
	 * @param ctx the parse tree
	 */
	enterNumero?: (ctx: NumeroContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.numero`.
	 * @param ctx the parse tree
	 */
	exitNumero?: (ctx: NumeroContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.termo`.
	 * @param ctx the parse tree
	 */
	enterTermo?: (ctx: TermoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.termo`.
	 * @param ctx the parse tree
	 */
	exitTermo?: (ctx: TermoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.termo_aux`.
	 * @param ctx the parse tree
	 */
	enterTermo_aux?: (ctx: Termo_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.termo_aux`.
	 * @param ctx the parse tree
	 */
	exitTermo_aux?: (ctx: Termo_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.expressaoSimples`.
	 * @param ctx the parse tree
	 */
	enterExpressaoSimples?: (ctx: ExpressaoSimplesContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.expressaoSimples`.
	 * @param ctx the parse tree
	 */
	exitExpressaoSimples?: (ctx: ExpressaoSimplesContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.expressaoSimples_aux`.
	 * @param ctx the parse tree
	 */
	enterExpressaoSimples_aux?: (ctx: ExpressaoSimples_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.expressaoSimples_aux`.
	 * @param ctx the parse tree
	 */
	exitExpressaoSimples_aux?: (ctx: ExpressaoSimples_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.expressao`.
	 * @param ctx the parse tree
	 */
	enterExpressao?: (ctx: ExpressaoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.expressao`.
	 * @param ctx the parse tree
	 */
	exitExpressao?: (ctx: ExpressaoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.expressao_aux`.
	 * @param ctx the parse tree
	 */
	enterExpressao_aux?: (ctx: Expressao_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.expressao_aux`.
	 * @param ctx the parse tree
	 */
	exitExpressao_aux?: (ctx: Expressao_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.fator`.
	 * @param ctx the parse tree
	 */
	enterFator?: (ctx: FatorContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.fator`.
	 * @param ctx the parse tree
	 */
	exitFator?: (ctx: FatorContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.variavel`.
	 * @param ctx the parse tree
	 */
	enterVariavel?: (ctx: VariavelContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.variavel`.
	 * @param ctx the parse tree
	 */
	exitVariavel?: (ctx: VariavelContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.variavel1`.
	 * @param ctx the parse tree
	 */
	enterVariavel1?: (ctx: Variavel1Context) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.variavel1`.
	 * @param ctx the parse tree
	 */
	exitVariavel1?: (ctx: Variavel1Context) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.declaracaoVariavel`.
	 * @param ctx the parse tree
	 */
	enterDeclaracaoVariavel?: (ctx: DeclaracaoVariavelContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.declaracaoVariavel`.
	 * @param ctx the parse tree
	 */
	exitDeclaracaoVariavel?: (ctx: DeclaracaoVariavelContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.listaID`.
	 * @param ctx the parse tree
	 */
	enterListaID?: (ctx: ListaIDContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.listaID`.
	 * @param ctx the parse tree
	 */
	exitListaID?: (ctx: ListaIDContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.listaID_aux`.
	 * @param ctx the parse tree
	 */
	enterListaID_aux?: (ctx: ListaID_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.listaID_aux`.
	 * @param ctx the parse tree
	 */
	exitListaID_aux?: (ctx: ListaID_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.parteDeclaracaoVariavel`.
	 * @param ctx the parse tree
	 */
	enterParteDeclaracaoVariavel?: (ctx: ParteDeclaracaoVariavelContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.parteDeclaracaoVariavel`.
	 * @param ctx the parse tree
	 */
	exitParteDeclaracaoVariavel?: (ctx: ParteDeclaracaoVariavelContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.parteDeclaracaoVariavel_aux`.
	 * @param ctx the parse tree
	 */
	enterParteDeclaracaoVariavel_aux?: (ctx: ParteDeclaracaoVariavel_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.parteDeclaracaoVariavel_aux`.
	 * @param ctx the parse tree
	 */
	exitParteDeclaracaoVariavel_aux?: (ctx: ParteDeclaracaoVariavel_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.tipo`.
	 * @param ctx the parse tree
	 */
	enterTipo?: (ctx: TipoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.tipo`.
	 * @param ctx the parse tree
	 */
	exitTipo?: (ctx: TipoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.programa`.
	 * @param ctx the parse tree
	 */
	enterPrograma?: (ctx: ProgramaContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.programa`.
	 * @param ctx the parse tree
	 */
	exitPrograma?: (ctx: ProgramaContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.bloco`.
	 * @param ctx the parse tree
	 */
	enterBloco?: (ctx: BlocoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.bloco`.
	 * @param ctx the parse tree
	 */
	exitBloco?: (ctx: BlocoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.parteDeclaracaoSubRotina`.
	 * @param ctx the parse tree
	 */
	enterParteDeclaracaoSubRotina?: (ctx: ParteDeclaracaoSubRotinaContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.parteDeclaracaoSubRotina`.
	 * @param ctx the parse tree
	 */
	exitParteDeclaracaoSubRotina?: (ctx: ParteDeclaracaoSubRotinaContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.parteDeclaracaoSubRotina_aux`.
	 * @param ctx the parse tree
	 */
	enterParteDeclaracaoSubRotina_aux?: (ctx: ParteDeclaracaoSubRotina_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.parteDeclaracaoSubRotina_aux`.
	 * @param ctx the parse tree
	 */
	exitParteDeclaracaoSubRotina_aux?: (ctx: ParteDeclaracaoSubRotina_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.declaracaoProcedimento`.
	 * @param ctx the parse tree
	 */
	enterDeclaracaoProcedimento?: (ctx: DeclaracaoProcedimentoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.declaracaoProcedimento`.
	 * @param ctx the parse tree
	 */
	exitDeclaracaoProcedimento?: (ctx: DeclaracaoProcedimentoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.declaracaoProcedimento_aux`.
	 * @param ctx the parse tree
	 */
	enterDeclaracaoProcedimento_aux?: (ctx: DeclaracaoProcedimento_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.declaracaoProcedimento_aux`.
	 * @param ctx the parse tree
	 */
	exitDeclaracaoProcedimento_aux?: (ctx: DeclaracaoProcedimento_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.parametros`.
	 * @param ctx the parse tree
	 */
	enterParametros?: (ctx: ParametrosContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.parametros`.
	 * @param ctx the parse tree
	 */
	exitParametros?: (ctx: ParametrosContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.parametros_aux`.
	 * @param ctx the parse tree
	 */
	enterParametros_aux?: (ctx: Parametros_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.parametros_aux`.
	 * @param ctx the parse tree
	 */
	exitParametros_aux?: (ctx: Parametros_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.secaoParametros`.
	 * @param ctx the parse tree
	 */
	enterSecaoParametros?: (ctx: SecaoParametrosContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.secaoParametros`.
	 * @param ctx the parse tree
	 */
	exitSecaoParametros?: (ctx: SecaoParametrosContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.secaoParametrosFormais_aux`.
	 * @param ctx the parse tree
	 */
	enterSecaoParametrosFormais_aux?: (ctx: SecaoParametrosFormais_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.secaoParametrosFormais_aux`.
	 * @param ctx the parse tree
	 */
	exitSecaoParametrosFormais_aux?: (ctx: SecaoParametrosFormais_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.comandoComposto`.
	 * @param ctx the parse tree
	 */
	enterComandoComposto?: (ctx: ComandoCompostoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.comandoComposto`.
	 * @param ctx the parse tree
	 */
	exitComandoComposto?: (ctx: ComandoCompostoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.comandoComposto_aux`.
	 * @param ctx the parse tree
	 */
	enterComandoComposto_aux?: (ctx: ComandoComposto_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.comandoComposto_aux`.
	 * @param ctx the parse tree
	 */
	exitComandoComposto_aux?: (ctx: ComandoComposto_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.comando`.
	 * @param ctx the parse tree
	 */
	enterComando?: (ctx: ComandoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.comando`.
	 * @param ctx the parse tree
	 */
	exitComando?: (ctx: ComandoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.atribuicao`.
	 * @param ctx the parse tree
	 */
	enterAtribuicao?: (ctx: AtribuicaoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.atribuicao`.
	 * @param ctx the parse tree
	 */
	exitAtribuicao?: (ctx: AtribuicaoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.chamadaProcedimento`.
	 * @param ctx the parse tree
	 */
	enterChamadaProcedimento?: (ctx: ChamadaProcedimentoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.chamadaProcedimento`.
	 * @param ctx the parse tree
	 */
	exitChamadaProcedimento?: (ctx: ChamadaProcedimentoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.chamadaProcedimento_aux`.
	 * @param ctx the parse tree
	 */
	enterChamadaProcedimento_aux?: (ctx: ChamadaProcedimento_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.chamadaProcedimento_aux`.
	 * @param ctx the parse tree
	 */
	exitChamadaProcedimento_aux?: (ctx: ChamadaProcedimento_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.comandoCondicional`.
	 * @param ctx the parse tree
	 */
	enterComandoCondicional?: (ctx: ComandoCondicionalContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.comandoCondicional`.
	 * @param ctx the parse tree
	 */
	exitComandoCondicional?: (ctx: ComandoCondicionalContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.comandoCondicional_aux`.
	 * @param ctx the parse tree
	 */
	enterComandoCondicional_aux?: (ctx: ComandoCondicional_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.comandoCondicional_aux`.
	 * @param ctx the parse tree
	 */
	exitComandoCondicional_aux?: (ctx: ComandoCondicional_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.comandoRepetitivo`.
	 * @param ctx the parse tree
	 */
	enterComandoRepetitivo?: (ctx: ComandoRepetitivoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.comandoRepetitivo`.
	 * @param ctx the parse tree
	 */
	exitComandoRepetitivo?: (ctx: ComandoRepetitivoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.listaExpressao`.
	 * @param ctx the parse tree
	 */
	enterListaExpressao?: (ctx: ListaExpressaoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.listaExpressao`.
	 * @param ctx the parse tree
	 */
	exitListaExpressao?: (ctx: ListaExpressaoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.listaExpressao_aux`.
	 * @param ctx the parse tree
	 */
	enterListaExpressao_aux?: (ctx: ListaExpressao_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.listaExpressao_aux`.
	 * @param ctx the parse tree
	 */
	exitListaExpressao_aux?: (ctx: ListaExpressao_auxContext) => void;
}

