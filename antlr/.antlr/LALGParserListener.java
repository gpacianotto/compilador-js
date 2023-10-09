// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALGParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LALGParser}.
 */
public interface LALGParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LALGParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(LALGParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(LALGParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#bloco}.
	 * @param ctx the parse tree
	 */
	void enterBloco(LALGParser.BlocoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#bloco}.
	 * @param ctx the parse tree
	 */
	void exitBloco(LALGParser.BlocoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#declaracoesVariaveis}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracoesVariaveis(LALGParser.DeclaracoesVariaveisContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#declaracoesVariaveis}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracoesVariaveis(LALGParser.DeclaracoesVariaveisContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#declaracaoVariaveis}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracaoVariaveis(LALGParser.DeclaracaoVariaveisContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#declaracaoVariaveis}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracaoVariaveis(LALGParser.DeclaracaoVariaveisContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#listaIdentificadores}.
	 * @param ctx the parse tree
	 */
	void enterListaIdentificadores(LALGParser.ListaIdentificadoresContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#listaIdentificadores}.
	 * @param ctx the parse tree
	 */
	void exitListaIdentificadores(LALGParser.ListaIdentificadoresContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#declaracoesSubrotinas}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracoesSubrotinas(LALGParser.DeclaracoesSubrotinasContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#declaracoesSubrotinas}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracoesSubrotinas(LALGParser.DeclaracoesSubrotinasContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#declaracaoProcedimento}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracaoProcedimento(LALGParser.DeclaracaoProcedimentoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#declaracaoProcedimento}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracaoProcedimento(LALGParser.DeclaracaoProcedimentoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#parametrosFormais}.
	 * @param ctx the parse tree
	 */
	void enterParametrosFormais(LALGParser.ParametrosFormaisContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#parametrosFormais}.
	 * @param ctx the parse tree
	 */
	void exitParametrosFormais(LALGParser.ParametrosFormaisContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#secaoParametrosFormais}.
	 * @param ctx the parse tree
	 */
	void enterSecaoParametrosFormais(LALGParser.SecaoParametrosFormaisContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#secaoParametrosFormais}.
	 * @param ctx the parse tree
	 */
	void exitSecaoParametrosFormais(LALGParser.SecaoParametrosFormaisContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#comandoComposto}.
	 * @param ctx the parse tree
	 */
	void enterComandoComposto(LALGParser.ComandoCompostoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#comandoComposto}.
	 * @param ctx the parse tree
	 */
	void exitComandoComposto(LALGParser.ComandoCompostoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#comando}.
	 * @param ctx the parse tree
	 */
	void enterComando(LALGParser.ComandoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#comando}.
	 * @param ctx the parse tree
	 */
	void exitComando(LALGParser.ComandoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#atribuicao}.
	 * @param ctx the parse tree
	 */
	void enterAtribuicao(LALGParser.AtribuicaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#atribuicao}.
	 * @param ctx the parse tree
	 */
	void exitAtribuicao(LALGParser.AtribuicaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#chamadaProcedimento}.
	 * @param ctx the parse tree
	 */
	void enterChamadaProcedimento(LALGParser.ChamadaProcedimentoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#chamadaProcedimento}.
	 * @param ctx the parse tree
	 */
	void exitChamadaProcedimento(LALGParser.ChamadaProcedimentoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#comandoCondicional}.
	 * @param ctx the parse tree
	 */
	void enterComandoCondicional(LALGParser.ComandoCondicionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#comandoCondicional}.
	 * @param ctx the parse tree
	 */
	void exitComandoCondicional(LALGParser.ComandoCondicionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#comandoRepetitivo}.
	 * @param ctx the parse tree
	 */
	void enterComandoRepetitivo(LALGParser.ComandoRepetitivoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#comandoRepetitivo}.
	 * @param ctx the parse tree
	 */
	void exitComandoRepetitivo(LALGParser.ComandoRepetitivoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#expressao}.
	 * @param ctx the parse tree
	 */
	void enterExpressao(LALGParser.ExpressaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#expressao}.
	 * @param ctx the parse tree
	 */
	void exitExpressao(LALGParser.ExpressaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#expressaoSimples}.
	 * @param ctx the parse tree
	 */
	void enterExpressaoSimples(LALGParser.ExpressaoSimplesContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#expressaoSimples}.
	 * @param ctx the parse tree
	 */
	void exitExpressaoSimples(LALGParser.ExpressaoSimplesContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#termo}.
	 * @param ctx the parse tree
	 */
	void enterTermo(LALGParser.TermoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#termo}.
	 * @param ctx the parse tree
	 */
	void exitTermo(LALGParser.TermoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#fator}.
	 * @param ctx the parse tree
	 */
	void enterFator(LALGParser.FatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#fator}.
	 * @param ctx the parse tree
	 */
	void exitFator(LALGParser.FatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#variavel}.
	 * @param ctx the parse tree
	 */
	void enterVariavel(LALGParser.VariavelContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#variavel}.
	 * @param ctx the parse tree
	 */
	void exitVariavel(LALGParser.VariavelContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#listaExpressoes}.
	 * @param ctx the parse tree
	 */
	void enterListaExpressoes(LALGParser.ListaExpressoesContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#listaExpressoes}.
	 * @param ctx the parse tree
	 */
	void exitListaExpressoes(LALGParser.ListaExpressoesContext ctx);
}