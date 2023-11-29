// Generated from ./antlr/LALGGrammar.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { NumeroContext } from "./LALGGrammar";
import { TermoContext } from "./LALGGrammar";
import { Termo_auxContext } from "./LALGGrammar";
import { ExpressaoSimplesContext } from "./LALGGrammar";
import { ExpressaoSimples_auxContext } from "./LALGGrammar";
import { ExpressaoContext } from "./LALGGrammar";
import { Expressao_auxContext } from "./LALGGrammar";
import { FatorContext } from "./LALGGrammar";
import { VariavelContext } from "./LALGGrammar";
import { Variavel1Context } from "./LALGGrammar";
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
import { SecaoParametrosFormais_auxContext } from "./LALGGrammar";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LALGGrammar`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LALGGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LALGGrammar.numero`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumero?: (ctx: NumeroContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.termo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermo?: (ctx: TermoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.termo_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermo_aux?: (ctx: Termo_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.expressaoSimples`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressaoSimples?: (ctx: ExpressaoSimplesContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.expressaoSimples_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressaoSimples_aux?: (ctx: ExpressaoSimples_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.expressao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao?: (ctx: ExpressaoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.expressao_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao_aux?: (ctx: Expressao_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.fator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFator?: (ctx: FatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.variavel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariavel?: (ctx: VariavelContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.variavel1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariavel1?: (ctx: Variavel1Context) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.declaracaoVariavel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracaoVariavel?: (ctx: DeclaracaoVariavelContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.listaID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaID?: (ctx: ListaIDContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.listaID_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaID_aux?: (ctx: ListaID_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.parteDeclaracaoVariavel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParteDeclaracaoVariavel?: (ctx: ParteDeclaracaoVariavelContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.parteDeclaracaoVariavel_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParteDeclaracaoVariavel_aux?: (ctx: ParteDeclaracaoVariavel_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.tipo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTipo?: (ctx: TipoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.programa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrograma?: (ctx: ProgramaContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.bloco`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBloco?: (ctx: BlocoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.parteDeclaracaoSubRotina`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParteDeclaracaoSubRotina?: (ctx: ParteDeclaracaoSubRotinaContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.parteDeclaracaoSubRotina_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParteDeclaracaoSubRotina_aux?: (ctx: ParteDeclaracaoSubRotina_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.declaracaoProcedimento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracaoProcedimento?: (ctx: DeclaracaoProcedimentoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.declaracaoProcedimento_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracaoProcedimento_aux?: (ctx: DeclaracaoProcedimento_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.parametros`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParametros?: (ctx: ParametrosContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.parametros_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParametros_aux?: (ctx: Parametros_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.secaoParametros`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecaoParametros?: (ctx: SecaoParametrosContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.secaoParametrosFormais_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecaoParametrosFormais_aux?: (ctx: SecaoParametrosFormais_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.comandoComposto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoComposto?: (ctx: ComandoCompostoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.comandoComposto_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoComposto_aux?: (ctx: ComandoComposto_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.comando`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComando?: (ctx: ComandoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.atribuicao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtribuicao?: (ctx: AtribuicaoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.chamadaProcedimento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChamadaProcedimento?: (ctx: ChamadaProcedimentoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.chamadaProcedimento_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChamadaProcedimento_aux?: (ctx: ChamadaProcedimento_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.comandoCondicional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoCondicional?: (ctx: ComandoCondicionalContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.comandoCondicional_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoCondicional_aux?: (ctx: ComandoCondicional_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.comandoRepetitivo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoRepetitivo?: (ctx: ComandoRepetitivoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.listaExpressao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaExpressao?: (ctx: ListaExpressaoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGGrammar.listaExpressao_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaExpressao_aux?: (ctx: ListaExpressao_auxContext) => Result;
}

