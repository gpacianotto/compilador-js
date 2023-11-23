// Generated from ./antlr/LALGParser.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { NumeroContext } from "./LALGParser";
import { TermoContext } from "./LALGParser";
import { Termo_auxContext } from "./LALGParser";
import { ExpressaoSimplesContext } from "./LALGParser";
import { ExpressaoSimples_auxContext } from "./LALGParser";
import { ExpressaoContext } from "./LALGParser";
import { Expressao1Context } from "./LALGParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LALGParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LALGParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LALGParser.numero`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumero?: (ctx: NumeroContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.termo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermo?: (ctx: TermoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.termo_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermo_aux?: (ctx: Termo_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.expressaoSimples`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressaoSimples?: (ctx: ExpressaoSimplesContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.expressaoSimples_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressaoSimples_aux?: (ctx: ExpressaoSimples_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.expressao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao?: (ctx: ExpressaoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.expressao1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressao1?: (ctx: Expressao1Context) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.fator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFator?: (ctx: FatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.variavel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariavel?: (ctx: VariavelContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.variavel1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariavel1?: (ctx: Variavel1Context) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.declaracaoVariavel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracaoVariavel?: (ctx: DeclaracaoVariavelContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.listaID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaID?: (ctx: ListaIDContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.listaID_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaID_aux?: (ctx: ListaID_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.parteDeclaracaoVariavel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParteDeclaracaoVariavel?: (ctx: ParteDeclaracaoVariavelContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.parteDeclaracaoVariavel_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParteDeclaracaoVariavel_aux?: (ctx: ParteDeclaracaoVariavel_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.tipo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTipo?: (ctx: TipoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.programa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrograma?: (ctx: ProgramaContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.bloco`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBloco?: (ctx: BlocoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.parteDeclaracaoSubRotina`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParteDeclaracaoSubRotina?: (ctx: ParteDeclaracaoSubRotinaContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.parteDeclaracaoSubRotina_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParteDeclaracaoSubRotina_aux?: (ctx: ParteDeclaracaoSubRotina_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.declaracaoProcedimento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracaoProcedimento?: (ctx: DeclaracaoProcedimentoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.declaracaoProcedimento_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaracaoProcedimento_aux?: (ctx: DeclaracaoProcedimento_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.parametros`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParametros?: (ctx: ParametrosContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.parametros_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParametros_aux?: (ctx: Parametros_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.secaoParametros`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecaoParametros?: (ctx: SecaoParametrosContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.secaoParametrosFormais_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecaoParametrosFormais_aux?: (ctx: SecaoParametrosFormais_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.comandoComposto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoComposto?: (ctx: ComandoCompostoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.comandoComposto_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoComposto_aux?: (ctx: ComandoComposto_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.comando`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComando?: (ctx: ComandoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.atribuicao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtribuicao?: (ctx: AtribuicaoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.chamadaProcedimento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChamadaProcedimento?: (ctx: ChamadaProcedimentoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.chamadaProcedimento_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChamadaProcedimento_aux?: (ctx: ChamadaProcedimento_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.comandoCondicional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoCondicional?: (ctx: ComandoCondicionalContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.comandoCondicional_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoCondicional_aux?: (ctx: ComandoCondicional_auxContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.comandoRepetitivo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComandoRepetitivo?: (ctx: ComandoRepetitivoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.listaExpressao`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaExpressao?: (ctx: ListaExpressaoContext) => Result;
	/**
	 * Visit a parse tree produced by `LALGParser.listaExpressao_aux`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListaExpressao_aux?: (ctx: ListaExpressao_auxContext) => Result;
}

