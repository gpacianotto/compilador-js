// Generated from ./antlr/LALGGrammar.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { NumeroContext } from "./LALGGrammar";
import { TermoContext } from "./LALGGrammar";
import { Termo_auxContext } from "./LALGGrammar";
import { ExpressaoSimplesContext } from "./LALGGrammar";
import { ExpressaoSimples_auxContext } from "./LALGGrammar";
import { ExpressaoContext } from "./LALGGrammar";
import { Expressao_auxContext } from "./LALGGrammar";
import { RelacaoContext } from "./LALGGrammar";
import { FatorContext } from "./LALGGrammar";
import { VariavelContext } from "./LALGGrammar";
import { Variavel_auxContext } from "./LALGGrammar";
import { DeclaracaoVariavelContext } from "./LALGGrammar";
import { ListaIDContext } from "./LALGGrammar";
import { ListaID_auxContext } from "./LALGGrammar";
import { ParteDeclaracaoVariavelContext } from "./LALGGrammar";
import { ParteDeclaracaoVariavel_auxContext } from "./LALGGrammar";
import { TipoContext } from "./LALGGrammar";
import { ProgramaContext } from "./LALGGrammar";
import { BlocoContext } from "./LALGGrammar";
import { ParteDeclaracaoSubRotinaContext } from "./LALGGrammar";
import { ParteDeclaracaoSubRotina_auxContext } from "./LALGGrammar";
import { DeclaracaoProcedimentoContext } from "./LALGGrammar";
import { DeclaracaoProcedimento_auxContext } from "./LALGGrammar";
import { ParametrosContext } from "./LALGGrammar";
import { Parametros_auxContext } from "./LALGGrammar";
import { SecaoParametrosContext } from "./LALGGrammar";
import { SecaoParametros_auxContext } from "./LALGGrammar";
import { ComandoCompostoContext } from "./LALGGrammar";
import { ComandoComposto_auxContext } from "./LALGGrammar";
import { ComandoContext } from "./LALGGrammar";
import { AtribuicaoContext } from "./LALGGrammar";
import { ChamadaProcedimentoContext } from "./LALGGrammar";
import { ChamadaProcedimento_auxContext } from "./LALGGrammar";
import { ComandoCondicionalContext } from "./LALGGrammar";
import { ComandoCondicional_auxContext } from "./LALGGrammar";
import { ComandoRepetitivoContext } from "./LALGGrammar";
import { ListaExpressaoContext } from "./LALGGrammar";
import { ListaExpressao_auxContext } from "./LALGGrammar";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LALGGrammar`.
 */
export default class LALGGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LALGGrammar.numero`.
	 * @param ctx the parse tree
	 */
	enterNumero?: (ctx: NumeroContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.numero`.
	 * @param ctx the parse tree
	 */
	exitNumero?: (ctx: NumeroContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.termo`.
	 * @param ctx the parse tree
	 */
	enterTermo?: (ctx: TermoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.termo`.
	 * @param ctx the parse tree
	 */
	exitTermo?: (ctx: TermoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.termo_aux`.
	 * @param ctx the parse tree
	 */
	enterTermo_aux?: (ctx: Termo_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.termo_aux`.
	 * @param ctx the parse tree
	 */
	exitTermo_aux?: (ctx: Termo_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.expressaoSimples`.
	 * @param ctx the parse tree
	 */
	enterExpressaoSimples?: (ctx: ExpressaoSimplesContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.expressaoSimples`.
	 * @param ctx the parse tree
	 */
	exitExpressaoSimples?: (ctx: ExpressaoSimplesContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.expressaoSimples_aux`.
	 * @param ctx the parse tree
	 */
	enterExpressaoSimples_aux?: (ctx: ExpressaoSimples_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.expressaoSimples_aux`.
	 * @param ctx the parse tree
	 */
	exitExpressaoSimples_aux?: (ctx: ExpressaoSimples_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.expressao`.
	 * @param ctx the parse tree
	 */
	enterExpressao?: (ctx: ExpressaoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.expressao`.
	 * @param ctx the parse tree
	 */
	exitExpressao?: (ctx: ExpressaoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.expressao_aux`.
	 * @param ctx the parse tree
	 */
	enterExpressao_aux?: (ctx: Expressao_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.expressao_aux`.
	 * @param ctx the parse tree
	 */
	exitExpressao_aux?: (ctx: Expressao_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.relacao`.
	 * @param ctx the parse tree
	 */
	enterRelacao?: (ctx: RelacaoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.relacao`.
	 * @param ctx the parse tree
	 */
	exitRelacao?: (ctx: RelacaoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.fator`.
	 * @param ctx the parse tree
	 */
	enterFator?: (ctx: FatorContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.fator`.
	 * @param ctx the parse tree
	 */
	exitFator?: (ctx: FatorContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.variavel`.
	 * @param ctx the parse tree
	 */
	enterVariavel?: (ctx: VariavelContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.variavel`.
	 * @param ctx the parse tree
	 */
	exitVariavel?: (ctx: VariavelContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.variavel_aux`.
	 * @param ctx the parse tree
	 */
	enterVariavel_aux?: (ctx: Variavel_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.variavel_aux`.
	 * @param ctx the parse tree
	 */
	exitVariavel_aux?: (ctx: Variavel_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.declaracaoVariavel`.
	 * @param ctx the parse tree
	 */
	enterDeclaracaoVariavel?: (ctx: DeclaracaoVariavelContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.declaracaoVariavel`.
	 * @param ctx the parse tree
	 */
	exitDeclaracaoVariavel?: (ctx: DeclaracaoVariavelContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.listaID`.
	 * @param ctx the parse tree
	 */
	enterListaID?: (ctx: ListaIDContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.listaID`.
	 * @param ctx the parse tree
	 */
	exitListaID?: (ctx: ListaIDContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.listaID_aux`.
	 * @param ctx the parse tree
	 */
	enterListaID_aux?: (ctx: ListaID_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.listaID_aux`.
	 * @param ctx the parse tree
	 */
	exitListaID_aux?: (ctx: ListaID_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.parteDeclaracaoVariavel`.
	 * @param ctx the parse tree
	 */
	enterParteDeclaracaoVariavel?: (ctx: ParteDeclaracaoVariavelContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.parteDeclaracaoVariavel`.
	 * @param ctx the parse tree
	 */
	exitParteDeclaracaoVariavel?: (ctx: ParteDeclaracaoVariavelContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.parteDeclaracaoVariavel_aux`.
	 * @param ctx the parse tree
	 */
	enterParteDeclaracaoVariavel_aux?: (ctx: ParteDeclaracaoVariavel_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.parteDeclaracaoVariavel_aux`.
	 * @param ctx the parse tree
	 */
	exitParteDeclaracaoVariavel_aux?: (ctx: ParteDeclaracaoVariavel_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.tipo`.
	 * @param ctx the parse tree
	 */
	enterTipo?: (ctx: TipoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.tipo`.
	 * @param ctx the parse tree
	 */
	exitTipo?: (ctx: TipoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.programa`.
	 * @param ctx the parse tree
	 */
	enterPrograma?: (ctx: ProgramaContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.programa`.
	 * @param ctx the parse tree
	 */
	exitPrograma?: (ctx: ProgramaContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.bloco`.
	 * @param ctx the parse tree
	 */
	enterBloco?: (ctx: BlocoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.bloco`.
	 * @param ctx the parse tree
	 */
	exitBloco?: (ctx: BlocoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.parteDeclaracaoSubRotina`.
	 * @param ctx the parse tree
	 */
	enterParteDeclaracaoSubRotina?: (ctx: ParteDeclaracaoSubRotinaContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.parteDeclaracaoSubRotina`.
	 * @param ctx the parse tree
	 */
	exitParteDeclaracaoSubRotina?: (ctx: ParteDeclaracaoSubRotinaContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.parteDeclaracaoSubRotina_aux`.
	 * @param ctx the parse tree
	 */
	enterParteDeclaracaoSubRotina_aux?: (ctx: ParteDeclaracaoSubRotina_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.parteDeclaracaoSubRotina_aux`.
	 * @param ctx the parse tree
	 */
	exitParteDeclaracaoSubRotina_aux?: (ctx: ParteDeclaracaoSubRotina_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.declaracaoProcedimento`.
	 * @param ctx the parse tree
	 */
	enterDeclaracaoProcedimento?: (ctx: DeclaracaoProcedimentoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.declaracaoProcedimento`.
	 * @param ctx the parse tree
	 */
	exitDeclaracaoProcedimento?: (ctx: DeclaracaoProcedimentoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.declaracaoProcedimento_aux`.
	 * @param ctx the parse tree
	 */
	enterDeclaracaoProcedimento_aux?: (ctx: DeclaracaoProcedimento_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.declaracaoProcedimento_aux`.
	 * @param ctx the parse tree
	 */
	exitDeclaracaoProcedimento_aux?: (ctx: DeclaracaoProcedimento_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.parametros`.
	 * @param ctx the parse tree
	 */
	enterParametros?: (ctx: ParametrosContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.parametros`.
	 * @param ctx the parse tree
	 */
	exitParametros?: (ctx: ParametrosContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.parametros_aux`.
	 * @param ctx the parse tree
	 */
	enterParametros_aux?: (ctx: Parametros_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.parametros_aux`.
	 * @param ctx the parse tree
	 */
	exitParametros_aux?: (ctx: Parametros_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.secaoParametros`.
	 * @param ctx the parse tree
	 */
	enterSecaoParametros?: (ctx: SecaoParametrosContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.secaoParametros`.
	 * @param ctx the parse tree
	 */
	exitSecaoParametros?: (ctx: SecaoParametrosContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.secaoParametros_aux`.
	 * @param ctx the parse tree
	 */
	enterSecaoParametros_aux?: (ctx: SecaoParametros_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.secaoParametros_aux`.
	 * @param ctx the parse tree
	 */
	exitSecaoParametros_aux?: (ctx: SecaoParametros_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.comandoComposto`.
	 * @param ctx the parse tree
	 */
	enterComandoComposto?: (ctx: ComandoCompostoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.comandoComposto`.
	 * @param ctx the parse tree
	 */
	exitComandoComposto?: (ctx: ComandoCompostoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.comandoComposto_aux`.
	 * @param ctx the parse tree
	 */
	enterComandoComposto_aux?: (ctx: ComandoComposto_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.comandoComposto_aux`.
	 * @param ctx the parse tree
	 */
	exitComandoComposto_aux?: (ctx: ComandoComposto_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.comando`.
	 * @param ctx the parse tree
	 */
	enterComando?: (ctx: ComandoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.comando`.
	 * @param ctx the parse tree
	 */
	exitComando?: (ctx: ComandoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.atribuicao`.
	 * @param ctx the parse tree
	 */
	enterAtribuicao?: (ctx: AtribuicaoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.atribuicao`.
	 * @param ctx the parse tree
	 */
	exitAtribuicao?: (ctx: AtribuicaoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.chamadaProcedimento`.
	 * @param ctx the parse tree
	 */
	enterChamadaProcedimento?: (ctx: ChamadaProcedimentoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.chamadaProcedimento`.
	 * @param ctx the parse tree
	 */
	exitChamadaProcedimento?: (ctx: ChamadaProcedimentoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.chamadaProcedimento_aux`.
	 * @param ctx the parse tree
	 */
	enterChamadaProcedimento_aux?: (ctx: ChamadaProcedimento_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.chamadaProcedimento_aux`.
	 * @param ctx the parse tree
	 */
	exitChamadaProcedimento_aux?: (ctx: ChamadaProcedimento_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.comandoCondicional`.
	 * @param ctx the parse tree
	 */
	enterComandoCondicional?: (ctx: ComandoCondicionalContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.comandoCondicional`.
	 * @param ctx the parse tree
	 */
	exitComandoCondicional?: (ctx: ComandoCondicionalContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.comandoCondicional_aux`.
	 * @param ctx the parse tree
	 */
	enterComandoCondicional_aux?: (ctx: ComandoCondicional_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.comandoCondicional_aux`.
	 * @param ctx the parse tree
	 */
	exitComandoCondicional_aux?: (ctx: ComandoCondicional_auxContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.comandoRepetitivo`.
	 * @param ctx the parse tree
	 */
	enterComandoRepetitivo?: (ctx: ComandoRepetitivoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.comandoRepetitivo`.
	 * @param ctx the parse tree
	 */
	exitComandoRepetitivo?: (ctx: ComandoRepetitivoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.listaExpressao`.
	 * @param ctx the parse tree
	 */
	enterListaExpressao?: (ctx: ListaExpressaoContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.listaExpressao`.
	 * @param ctx the parse tree
	 */
	exitListaExpressao?: (ctx: ListaExpressaoContext) => void;
	/**
	 * Enter a parse tree produced by `LALGGrammar.listaExpressao_aux`.
	 * @param ctx the parse tree
	 */
	enterListaExpressao_aux?: (ctx: ListaExpressao_auxContext) => void;
	/**
	 * Exit a parse tree produced by `LALGGrammar.listaExpressao_aux`.
	 * @param ctx the parse tree
	 */
	exitListaExpressao_aux?: (ctx: ListaExpressao_auxContext) => void;
}

