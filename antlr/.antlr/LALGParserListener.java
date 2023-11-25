// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALGParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LALGParser}.
 */
public interface LALGParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LALGParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(LALGParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(LALGParser.NumeroContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#termo_aux}.
	 * @param ctx the parse tree
	 */
	void enterTermo_aux(LALGParser.Termo_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#termo_aux}.
	 * @param ctx the parse tree
	 */
	void exitTermo_aux(LALGParser.Termo_auxContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#expressaoSimples_aux}.
	 * @param ctx the parse tree
	 */
	void enterExpressaoSimples_aux(LALGParser.ExpressaoSimples_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#expressaoSimples_aux}.
	 * @param ctx the parse tree
	 */
	void exitExpressaoSimples_aux(LALGParser.ExpressaoSimples_auxContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#expressao_aux}.
	 * @param ctx the parse tree
	 */
	void enterExpressao_aux(LALGParser.Expressao_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#expressao_aux}.
	 * @param ctx the parse tree
	 */
	void exitExpressao_aux(LALGParser.Expressao_auxContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#variavel1}.
	 * @param ctx the parse tree
	 */
	void enterVariavel1(LALGParser.Variavel1Context ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#variavel1}.
	 * @param ctx the parse tree
	 */
	void exitVariavel1(LALGParser.Variavel1Context ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#declaracaoVariavel}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracaoVariavel(LALGParser.DeclaracaoVariavelContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#declaracaoVariavel}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracaoVariavel(LALGParser.DeclaracaoVariavelContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#listaID}.
	 * @param ctx the parse tree
	 */
	void enterListaID(LALGParser.ListaIDContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#listaID}.
	 * @param ctx the parse tree
	 */
	void exitListaID(LALGParser.ListaIDContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#listaID_aux}.
	 * @param ctx the parse tree
	 */
	void enterListaID_aux(LALGParser.ListaID_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#listaID_aux}.
	 * @param ctx the parse tree
	 */
	void exitListaID_aux(LALGParser.ListaID_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#parteDeclaracaoVariavel}.
	 * @param ctx the parse tree
	 */
	void enterParteDeclaracaoVariavel(LALGParser.ParteDeclaracaoVariavelContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#parteDeclaracaoVariavel}.
	 * @param ctx the parse tree
	 */
	void exitParteDeclaracaoVariavel(LALGParser.ParteDeclaracaoVariavelContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#parteDeclaracaoVariavel_aux}.
	 * @param ctx the parse tree
	 */
	void enterParteDeclaracaoVariavel_aux(LALGParser.ParteDeclaracaoVariavel_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#parteDeclaracaoVariavel_aux}.
	 * @param ctx the parse tree
	 */
	void exitParteDeclaracaoVariavel_aux(LALGParser.ParteDeclaracaoVariavel_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#tipo}.
	 * @param ctx the parse tree
	 */
	void enterTipo(LALGParser.TipoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#tipo}.
	 * @param ctx the parse tree
	 */
	void exitTipo(LALGParser.TipoContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#parteDeclaracaoSubRotina}.
	 * @param ctx the parse tree
	 */
	void enterParteDeclaracaoSubRotina(LALGParser.ParteDeclaracaoSubRotinaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#parteDeclaracaoSubRotina}.
	 * @param ctx the parse tree
	 */
	void exitParteDeclaracaoSubRotina(LALGParser.ParteDeclaracaoSubRotinaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#parteDeclaracaoSubRotina_aux}.
	 * @param ctx the parse tree
	 */
	void enterParteDeclaracaoSubRotina_aux(LALGParser.ParteDeclaracaoSubRotina_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#parteDeclaracaoSubRotina_aux}.
	 * @param ctx the parse tree
	 */
	void exitParteDeclaracaoSubRotina_aux(LALGParser.ParteDeclaracaoSubRotina_auxContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#declaracaoProcedimento_aux}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracaoProcedimento_aux(LALGParser.DeclaracaoProcedimento_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#declaracaoProcedimento_aux}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracaoProcedimento_aux(LALGParser.DeclaracaoProcedimento_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(LALGParser.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(LALGParser.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#parametros_aux}.
	 * @param ctx the parse tree
	 */
	void enterParametros_aux(LALGParser.Parametros_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#parametros_aux}.
	 * @param ctx the parse tree
	 */
	void exitParametros_aux(LALGParser.Parametros_auxContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#secaoParametros}.
	 * @param ctx the parse tree
	 */
	void enterSecaoParametros(LALGParser.SecaoParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#secaoParametros}.
	 * @param ctx the parse tree
	 */
	void exitSecaoParametros(LALGParser.SecaoParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#secaoParametrosFormais_aux}.
	 * @param ctx the parse tree
	 */
	void enterSecaoParametrosFormais_aux(LALGParser.SecaoParametrosFormais_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#secaoParametrosFormais_aux}.
	 * @param ctx the parse tree
	 */
	void exitSecaoParametrosFormais_aux(LALGParser.SecaoParametrosFormais_auxContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#comandoComposto_aux}.
	 * @param ctx the parse tree
	 */
	void enterComandoComposto_aux(LALGParser.ComandoComposto_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#comandoComposto_aux}.
	 * @param ctx the parse tree
	 */
	void exitComandoComposto_aux(LALGParser.ComandoComposto_auxContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#chamadaProcedimento_aux}.
	 * @param ctx the parse tree
	 */
	void enterChamadaProcedimento_aux(LALGParser.ChamadaProcedimento_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#chamadaProcedimento_aux}.
	 * @param ctx the parse tree
	 */
	void exitChamadaProcedimento_aux(LALGParser.ChamadaProcedimento_auxContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#comandoCondicional_aux}.
	 * @param ctx the parse tree
	 */
	void enterComandoCondicional_aux(LALGParser.ComandoCondicional_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#comandoCondicional_aux}.
	 * @param ctx the parse tree
	 */
	void exitComandoCondicional_aux(LALGParser.ComandoCondicional_auxContext ctx);
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
	 * Enter a parse tree produced by {@link LALGParser#listaExpressao}.
	 * @param ctx the parse tree
	 */
	void enterListaExpressao(LALGParser.ListaExpressaoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#listaExpressao}.
	 * @param ctx the parse tree
	 */
	void exitListaExpressao(LALGParser.ListaExpressaoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LALGParser#listaExpressao_aux}.
	 * @param ctx the parse tree
	 */
	void enterListaExpressao_aux(LALGParser.ListaExpressao_auxContext ctx);
	/**
	 * Exit a parse tree produced by {@link LALGParser#listaExpressao_aux}.
	 * @param ctx the parse tree
	 */
	void exitListaExpressao_aux(LALGParser.ListaExpressao_auxContext ctx);
}