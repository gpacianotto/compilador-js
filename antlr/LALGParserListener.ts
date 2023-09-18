// Generated from ./antlr/LALGParser.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { ProgramaContext } from "./LALGParser";
import { BlocoContext } from "./LALGParser";
import { DeclaracoesVariaveisContext } from "./LALGParser";
import { DeclaracaoVariaveisContext } from "./LALGParser";
import { ListaIdentificadoresContext } from "./LALGParser";
import { DeclaracoesSubrotinasContext } from "./LALGParser";
import { DeclaracaoProcedimentoContext } from "./LALGParser";
import { ParametrosFormaisContext } from "./LALGParser";
import { SecaoParametrosFormaisContext } from "./LALGParser";
import { ComandoCompostoContext } from "./LALGParser";
import { ComandoContext } from "./LALGParser";
import { AtribuicaoContext } from "./LALGParser";
import { ChamadaProcedimentoContext } from "./LALGParser";
import { ComandoCondicionalContext } from "./LALGParser";
import { ComandoRepetitivoContext } from "./LALGParser";
import { ExpressaoContext } from "./LALGParser";
import { ExpressaoSimplesContext } from "./LALGParser";
import { TermoContext } from "./LALGParser";
import { FatorContext } from "./LALGParser";
import { VariavelContext } from "./LALGParser";
import { ListaExpressoesContext } from "./LALGParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LALGParser`.
 */
export default class LALGParserListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `LALGParser.declaracoesVariaveis`.
	 * @param ctx the parse tree
	 */
	enterDeclaracoesVariaveis?: (ctx: DeclaracoesVariaveisContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.declaracoesVariaveis`.
	 * @param ctx the parse tree
	 */
	exitDeclaracoesVariaveis?: (ctx: DeclaracoesVariaveisContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.declaracaoVariaveis`.
	 * @param ctx the parse tree
	 */
	enterDeclaracaoVariaveis?: (ctx: DeclaracaoVariaveisContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.declaracaoVariaveis`.
	 * @param ctx the parse tree
	 */
	exitDeclaracaoVariaveis?: (ctx: DeclaracaoVariaveisContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.listaIdentificadores`.
	 * @param ctx the parse tree
	 */
	enterListaIdentificadores?: (ctx: ListaIdentificadoresContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.listaIdentificadores`.
	 * @param ctx the parse tree
	 */
	exitListaIdentificadores?: (ctx: ListaIdentificadoresContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.declaracoesSubrotinas`.
	 * @param ctx the parse tree
	 */
	enterDeclaracoesSubrotinas?: (ctx: DeclaracoesSubrotinasContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.declaracoesSubrotinas`.
	 * @param ctx the parse tree
	 */
	exitDeclaracoesSubrotinas?: (ctx: DeclaracoesSubrotinasContext) => void;
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
	 * Enter a parse tree produced by `LALGParser.parametrosFormais`.
	 * @param ctx the parse tree
	 */
	enterParametrosFormais?: (ctx: ParametrosFormaisContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.parametrosFormais`.
	 * @param ctx the parse tree
	 */
	exitParametrosFormais?: (ctx: ParametrosFormaisContext) => void;
	/**
	 * Enter a parse tree produced by `LALGParser.secaoParametrosFormais`.
	 * @param ctx the parse tree
	 */
	enterSecaoParametrosFormais?: (ctx: SecaoParametrosFormaisContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.secaoParametrosFormais`.
	 * @param ctx the parse tree
	 */
	exitSecaoParametrosFormais?: (ctx: SecaoParametrosFormaisContext) => void;
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
	 * Enter a parse tree produced by `LALGParser.listaExpressoes`.
	 * @param ctx the parse tree
	 */
	enterListaExpressoes?: (ctx: ListaExpressoesContext) => void;
	/**
	 * Exit a parse tree produced by `LALGParser.listaExpressoes`.
	 * @param ctx the parse tree
	 */
	exitListaExpressoes?: (ctx: ListaExpressoesContext) => void;
}

