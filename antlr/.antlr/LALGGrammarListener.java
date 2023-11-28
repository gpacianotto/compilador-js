// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALGGrammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LALGGrammar}.
 */
public interface LALGGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(LALGGrammar.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(LALGGrammar.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#termo}.
	 * @param ctx the parse tree
	 */
	void enterTermo(LALGGrammar.TermoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#termo}.
	 * @param ctx the parse tree
	 */
	void exitTermo(LALGGrammar.TermoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#termo_aux}.
	 * @param ctx the parse tree
	 */
	void enterTermo_aux(LALGGrammar.Termo_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#termo_aux}.
	 * @param ctx the parse tree
	 */
	void exitTermo_aux(LALGGrammar.Termo_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#expressaoSimples}.
	 * @param ctx the parse tree
	 */
	void enterExpressaoSimples(LALGGrammar.ExpressaoSimplesContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#expressaoSimples}.
	 * @param ctx the parse tree
	 */
	void exitExpressaoSimples(LALGGrammar.ExpressaoSimplesContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#expressaoSimples_aux}.
	 * @param ctx the parse tree
	 */
	void enterExpressaoSimples_aux(LALGGrammar.ExpressaoSimples_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#expressaoSimples_aux}.
	 * @param ctx the parse tree
	 */
	void exitExpressaoSimples_aux(LALGGrammar.ExpressaoSimples_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#expressao}.
	 * @param ctx the parse tree
	 */
	void enterExpressao(LALGGrammar.ExpressaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#expressao}.
	 * @param ctx the parse tree
	 */
	void exitExpressao(LALGGrammar.ExpressaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#expressao_aux}.
	 * @param ctx the parse tree
	 */
	void enterExpressao_aux(LALGGrammar.Expressao_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#expressao_aux}.
	 * @param ctx the parse tree
	 */
	void exitExpressao_aux(LALGGrammar.Expressao_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#fator}.
	 * @param ctx the parse tree
	 */
	void enterFator(LALGGrammar.FatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#fator}.
	 * @param ctx the parse tree
	 */
	void exitFator(LALGGrammar.FatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#variavel}.
	 * @param ctx the parse tree
	 */
	void enterVariavel(LALGGrammar.VariavelContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#variavel}.
	 * @param ctx the parse tree
	 */
	void exitVariavel(LALGGrammar.VariavelContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#variavel1}.
	 * @param ctx the parse tree
	 */
	void enterVariavel1(LALGGrammar.Variavel1Context ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#variavel1}.
	 * @param ctx the parse tree
	 */
	void exitVariavel1(LALGGrammar.Variavel1Context ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#declaracaoVariavel}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracaoVariavel(LALGGrammar.DeclaracaoVariavelContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#declaracaoVariavel}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracaoVariavel(LALGGrammar.DeclaracaoVariavelContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#listaID}.
	 * @param ctx the parse tree
	 */
	void enterListaID(LALGGrammar.ListaIDContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#listaID}.
	 * @param ctx the parse tree
	 */
	void exitListaID(LALGGrammar.ListaIDContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#listaID_aux}.
	 * @param ctx the parse tree
	 */
	void enterListaID_aux(LALGGrammar.ListaID_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#listaID_aux}.
	 * @param ctx the parse tree
	 */
	void exitListaID_aux(LALGGrammar.ListaID_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#parteDeclaracaoVariavel}.
	 * @param ctx the parse tree
	 */
	void enterParteDeclaracaoVariavel(LALGGrammar.ParteDeclaracaoVariavelContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#parteDeclaracaoVariavel}.
	 * @param ctx the parse tree
	 */
	void exitParteDeclaracaoVariavel(LALGGrammar.ParteDeclaracaoVariavelContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#parteDeclaracaoVariavel_aux}.
	 * @param ctx the parse tree
	 */
	void enterParteDeclaracaoVariavel_aux(LALGGrammar.ParteDeclaracaoVariavel_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#parteDeclaracaoVariavel_aux}.
	 * @param ctx the parse tree
	 */
	void exitParteDeclaracaoVariavel_aux(LALGGrammar.ParteDeclaracaoVariavel_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#tipo}.
	 * @param ctx the parse tree
	 */
	void enterTipo(LALGGrammar.TipoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#tipo}.
	 * @param ctx the parse tree
	 */
	void exitTipo(LALGGrammar.TipoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(LALGGrammar.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(LALGGrammar.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#bloco}.
	 * @param ctx the parse tree
	 */
	void enterBloco(LALGGrammar.BlocoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#bloco}.
	 * @param ctx the parse tree
	 */
	void exitBloco(LALGGrammar.BlocoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#parteDeclaracaoSubRotina}.
	 * @param ctx the parse tree
	 */
	void enterParteDeclaracaoSubRotina(LALGGrammar.ParteDeclaracaoSubRotinaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#parteDeclaracaoSubRotina}.
	 * @param ctx the parse tree
	 */
	void exitParteDeclaracaoSubRotina(LALGGrammar.ParteDeclaracaoSubRotinaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#parteDeclaracaoSubRotina_aux}.
	 * @param ctx the parse tree
	 */
	void enterParteDeclaracaoSubRotina_aux(LALGGrammar.ParteDeclaracaoSubRotina_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#parteDeclaracaoSubRotina_aux}.
	 * @param ctx the parse tree
	 */
	void exitParteDeclaracaoSubRotina_aux(LALGGrammar.ParteDeclaracaoSubRotina_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#declaracaoProcedimento}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracaoProcedimento(LALGGrammar.DeclaracaoProcedimentoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#declaracaoProcedimento}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracaoProcedimento(LALGGrammar.DeclaracaoProcedimentoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#declaracaoProcedimento_aux}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracaoProcedimento_aux(LALGGrammar.DeclaracaoProcedimento_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#declaracaoProcedimento_aux}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracaoProcedimento_aux(LALGGrammar.DeclaracaoProcedimento_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(LALGGrammar.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(LALGGrammar.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#parametros_aux}.
	 * @param ctx the parse tree
	 */
	void enterParametros_aux(LALGGrammar.Parametros_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#parametros_aux}.
	 * @param ctx the parse tree
	 */
	void exitParametros_aux(LALGGrammar.Parametros_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#secaoParametros}.
	 * @param ctx the parse tree
	 */
	void enterSecaoParametros(LALGGrammar.SecaoParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#secaoParametros}.
	 * @param ctx the parse tree
	 */
	void exitSecaoParametros(LALGGrammar.SecaoParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#secaoParametrosFormais_aux}.
	 * @param ctx the parse tree
	 */
	void enterSecaoParametrosFormais_aux(LALGGrammar.SecaoParametrosFormais_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#secaoParametrosFormais_aux}.
	 * @param ctx the parse tree
	 */
	void exitSecaoParametrosFormais_aux(LALGGrammar.SecaoParametrosFormais_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#comandoComposto}.
	 * @param ctx the parse tree
	 */
	void enterComandoComposto(LALGGrammar.ComandoCompostoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#comandoComposto}.
	 * @param ctx the parse tree
	 */
	void exitComandoComposto(LALGGrammar.ComandoCompostoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#comandoComposto_aux}.
	 * @param ctx the parse tree
	 */
	void enterComandoComposto_aux(LALGGrammar.ComandoComposto_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#comandoComposto_aux}.
	 * @param ctx the parse tree
	 */
	void exitComandoComposto_aux(LALGGrammar.ComandoComposto_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#comando}.
	 * @param ctx the parse tree
	 */
	void enterComando(LALGGrammar.ComandoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#comando}.
	 * @param ctx the parse tree
	 */
	void exitComando(LALGGrammar.ComandoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#atribuicao}.
	 * @param ctx the parse tree
	 */
	void enterAtribuicao(LALGGrammar.AtribuicaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#atribuicao}.
	 * @param ctx the parse tree
	 */
	void exitAtribuicao(LALGGrammar.AtribuicaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#chamadaProcedimento}.
	 * @param ctx the parse tree
	 */
	void enterChamadaProcedimento(LALGGrammar.ChamadaProcedimentoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#chamadaProcedimento}.
	 * @param ctx the parse tree
	 */
	void exitChamadaProcedimento(LALGGrammar.ChamadaProcedimentoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#chamadaProcedimento_aux}.
	 * @param ctx the parse tree
	 */
	void enterChamadaProcedimento_aux(LALGGrammar.ChamadaProcedimento_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#chamadaProcedimento_aux}.
	 * @param ctx the parse tree
	 */
	void exitChamadaProcedimento_aux(LALGGrammar.ChamadaProcedimento_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#comandoCondicional}.
	 * @param ctx the parse tree
	 */
	void enterComandoCondicional(LALGGrammar.ComandoCondicionalContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#comandoCondicional}.
	 * @param ctx the parse tree
	 */
	void exitComandoCondicional(LALGGrammar.ComandoCondicionalContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#comandoCondicional_aux}.
	 * @param ctx the parse tree
	 */
	void enterComandoCondicional_aux(LALGGrammar.ComandoCondicional_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#comandoCondicional_aux}.
	 * @param ctx the parse tree
	 */
	void exitComandoCondicional_aux(LALGGrammar.ComandoCondicional_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#comandoRepetitivo}.
	 * @param ctx the parse tree
	 */
	void enterComandoRepetitivo(LALGGrammar.ComandoRepetitivoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#comandoRepetitivo}.
	 * @param ctx the parse tree
	 */
	void exitComandoRepetitivo(LALGGrammar.ComandoRepetitivoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#listaExpressao}.
	 * @param ctx the parse tree
	 */
	void enterListaExpressao(LALGGrammar.ListaExpressaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#listaExpressao}.
	 * @param ctx the parse tree
	 */
	void exitListaExpressao(LALGGrammar.ListaExpressaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGGrammar#listaExpressao_aux}.
	 * @param ctx the parse tree
	 */
	void enterListaExpressao_aux(LALGGrammar.ListaExpressao_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGGrammar#listaExpressao_aux}.
	 * @param ctx the parse tree
	 */
	void exitListaExpressao_aux(LALGGrammar.ListaExpressao_auxContext ctx);
}