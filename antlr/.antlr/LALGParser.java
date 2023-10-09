// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALGParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class LALGParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMENTARIO=1, COMENTARIO_MULTI=2, WS=3, PROGRAM=4, BEGIN=5, END=6, VAR=7, 
		PROCEDURE=8, TIPO=9, READ=10, WRITE=11, BOOL_CONST=12, IF=13, THEN=14, 
		ELSE=15, WHILE=16, DO=17, NOT=18, ATRIBUICAO=19, MAIS=20, MENOS=21, MULT=22, 
		DIV=23, RELACAO=24, ABRE_PARENTESES=25, FECHA_PARENTESES=26, ABRE_COLCHETES=27, 
		FECHA_COLCHETES=28, VIRGULA=29, PONTO_VIRGULA=30, DOIS_PONTOS=31, PONTO=32, 
		AND=33, OR=34, ID=35, INT=36, FLOAT=37, ERRO=38;
	public static final int
		RULE_programa = 0, RULE_bloco = 1, RULE_declaracoesVariaveis = 2, RULE_declaracaoVariaveis = 3, 
		RULE_listaIdentificadores = 4, RULE_declaracoesSubrotinas = 5, RULE_declaracaoProcedimento = 6, 
		RULE_parametrosFormais = 7, RULE_secaoParametrosFormais = 8, RULE_comandoComposto = 9, 
		RULE_comando = 10, RULE_atribuicao = 11, RULE_chamadaProcedimento = 12, 
		RULE_comandoCondicional = 13, RULE_comandoRepetitivo = 14, RULE_expressao = 15, 
		RULE_expressaoSimples = 16, RULE_termo = 17, RULE_fator = 18, RULE_variavel = 19, 
		RULE_listaExpressoes = 20;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "bloco", "declaracoesVariaveis", "declaracaoVariaveis", "listaIdentificadores", 
			"declaracoesSubrotinas", "declaracaoProcedimento", "parametrosFormais", 
			"secaoParametrosFormais", "comandoComposto", "comando", "atribuicao", 
			"chamadaProcedimento", "comandoCondicional", "comandoRepetitivo", "expressao", 
			"expressaoSimples", "termo", "fator", "variavel", "listaExpressoes"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'program'", "'begin'", "'end'", "'var'", "'procedure'", 
			null, "'read'", "'write'", null, "'if'", "'then'", "'else'", "'while'", 
			"'do'", "'not'", "':='", "'+'", "'-'", "'*'", "'/'", null, "'('", "')'", 
			"'['", "']'", "','", "';'", "':'", "'.'", "'and'", "'or'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", 
			"VAR", "PROCEDURE", "TIPO", "READ", "WRITE", "BOOL_CONST", "IF", "THEN", 
			"ELSE", "WHILE", "DO", "NOT", "ATRIBUICAO", "MAIS", "MENOS", "MULT", 
			"DIV", "RELACAO", "ABRE_PARENTESES", "FECHA_PARENTESES", "ABRE_COLCHETES", 
			"FECHA_COLCHETES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", "PONTO", 
			"AND", "OR", "ID", "INT", "FLOAT", "ERRO"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LALGParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LALGParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode PROGRAM() { return getToken(LALGParser.PROGRAM, 0); }
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public BlocoContext bloco() {
			return getRuleContext(BlocoContext.class,0);
		}
		public TerminalNode PONTO() { return getToken(LALGParser.PONTO, 0); }
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			match(PROGRAM);
			setState(43);
			match(ID);
			setState(44);
			match(PONTO_VIRGULA);
			setState(45);
			bloco();
			setState(46);
			match(PONTO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlocoContext extends ParserRuleContext {
		public ComandoCompostoContext comandoComposto() {
			return getRuleContext(ComandoCompostoContext.class,0);
		}
		public DeclaracoesVariaveisContext declaracoesVariaveis() {
			return getRuleContext(DeclaracoesVariaveisContext.class,0);
		}
		public DeclaracoesSubrotinasContext declaracoesSubrotinas() {
			return getRuleContext(DeclaracoesSubrotinasContext.class,0);
		}
		public BlocoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bloco; }
	}

	public final BlocoContext bloco() throws RecognitionException {
		BlocoContext _localctx = new BlocoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_bloco);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TIPO) {
				{
				setState(48);
				declaracoesVariaveis();
				}
			}

			setState(52);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PROCEDURE) {
				{
				setState(51);
				declaracoesSubrotinas();
				}
			}

			setState(54);
			comandoComposto();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracoesVariaveisContext extends ParserRuleContext {
		public List<DeclaracaoVariaveisContext> declaracaoVariaveis() {
			return getRuleContexts(DeclaracaoVariaveisContext.class);
		}
		public DeclaracaoVariaveisContext declaracaoVariaveis(int i) {
			return getRuleContext(DeclaracaoVariaveisContext.class,i);
		}
		public List<TerminalNode> PONTO_VIRGULA() { return getTokens(LALGParser.PONTO_VIRGULA); }
		public TerminalNode PONTO_VIRGULA(int i) {
			return getToken(LALGParser.PONTO_VIRGULA, i);
		}
		public DeclaracoesVariaveisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracoesVariaveis; }
	}

	public final DeclaracoesVariaveisContext declaracoesVariaveis() throws RecognitionException {
		DeclaracoesVariaveisContext _localctx = new DeclaracoesVariaveisContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaracoesVariaveis);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			declaracaoVariaveis();
			setState(61);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(57);
					match(PONTO_VIRGULA);
					setState(58);
					declaracaoVariaveis();
					}
					} 
				}
				setState(63);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			setState(64);
			match(PONTO_VIRGULA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracaoVariaveisContext extends ParserRuleContext {
		public TerminalNode TIPO() { return getToken(LALGParser.TIPO, 0); }
		public ListaIdentificadoresContext listaIdentificadores() {
			return getRuleContext(ListaIdentificadoresContext.class,0);
		}
		public DeclaracaoVariaveisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracaoVariaveis; }
	}

	public final DeclaracaoVariaveisContext declaracaoVariaveis() throws RecognitionException {
		DeclaracaoVariaveisContext _localctx = new DeclaracaoVariaveisContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declaracaoVariaveis);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(TIPO);
			setState(67);
			listaIdentificadores();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListaIdentificadoresContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(LALGParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(LALGParser.ID, i);
		}
		public List<TerminalNode> VIRGULA() { return getTokens(LALGParser.VIRGULA); }
		public TerminalNode VIRGULA(int i) {
			return getToken(LALGParser.VIRGULA, i);
		}
		public ListaIdentificadoresContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaIdentificadores; }
	}

	public final ListaIdentificadoresContext listaIdentificadores() throws RecognitionException {
		ListaIdentificadoresContext _localctx = new ListaIdentificadoresContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_listaIdentificadores);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(ID);
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VIRGULA) {
				{
				{
				setState(70);
				match(VIRGULA);
				setState(71);
				match(ID);
				}
				}
				setState(76);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracoesSubrotinasContext extends ParserRuleContext {
		public List<DeclaracaoProcedimentoContext> declaracaoProcedimento() {
			return getRuleContexts(DeclaracaoProcedimentoContext.class);
		}
		public DeclaracaoProcedimentoContext declaracaoProcedimento(int i) {
			return getRuleContext(DeclaracaoProcedimentoContext.class,i);
		}
		public List<TerminalNode> PONTO_VIRGULA() { return getTokens(LALGParser.PONTO_VIRGULA); }
		public TerminalNode PONTO_VIRGULA(int i) {
			return getToken(LALGParser.PONTO_VIRGULA, i);
		}
		public DeclaracoesSubrotinasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracoesSubrotinas; }
	}

	public final DeclaracoesSubrotinasContext declaracoesSubrotinas() throws RecognitionException {
		DeclaracoesSubrotinasContext _localctx = new DeclaracoesSubrotinasContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_declaracoesSubrotinas);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			declaracaoProcedimento();
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PONTO_VIRGULA) {
				{
				{
				setState(78);
				match(PONTO_VIRGULA);
				setState(79);
				declaracaoProcedimento();
				}
				}
				setState(84);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracaoProcedimentoContext extends ParserRuleContext {
		public TerminalNode PROCEDURE() { return getToken(LALGParser.PROCEDURE, 0); }
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public ParametrosFormaisContext parametrosFormais() {
			return getRuleContext(ParametrosFormaisContext.class,0);
		}
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public BlocoContext bloco() {
			return getRuleContext(BlocoContext.class,0);
		}
		public DeclaracaoProcedimentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracaoProcedimento; }
	}

	public final DeclaracaoProcedimentoContext declaracaoProcedimento() throws RecognitionException {
		DeclaracaoProcedimentoContext _localctx = new DeclaracaoProcedimentoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_declaracaoProcedimento);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(PROCEDURE);
			setState(86);
			match(ID);
			setState(87);
			parametrosFormais();
			setState(88);
			match(PONTO_VIRGULA);
			setState(89);
			bloco();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametrosFormaisContext extends ParserRuleContext {
		public TerminalNode ABRE_PARENTESES() { return getToken(LALGParser.ABRE_PARENTESES, 0); }
		public List<SecaoParametrosFormaisContext> secaoParametrosFormais() {
			return getRuleContexts(SecaoParametrosFormaisContext.class);
		}
		public SecaoParametrosFormaisContext secaoParametrosFormais(int i) {
			return getRuleContext(SecaoParametrosFormaisContext.class,i);
		}
		public TerminalNode FECHA_PARENTESES() { return getToken(LALGParser.FECHA_PARENTESES, 0); }
		public List<TerminalNode> PONTO_VIRGULA() { return getTokens(LALGParser.PONTO_VIRGULA); }
		public TerminalNode PONTO_VIRGULA(int i) {
			return getToken(LALGParser.PONTO_VIRGULA, i);
		}
		public ParametrosFormaisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametrosFormais; }
	}

	public final ParametrosFormaisContext parametrosFormais() throws RecognitionException {
		ParametrosFormaisContext _localctx = new ParametrosFormaisContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_parametrosFormais);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(ABRE_PARENTESES);
			setState(92);
			secaoParametrosFormais();
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PONTO_VIRGULA) {
				{
				{
				setState(93);
				match(PONTO_VIRGULA);
				setState(94);
				secaoParametrosFormais();
				}
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(100);
			match(FECHA_PARENTESES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SecaoParametrosFormaisContext extends ParserRuleContext {
		public ListaIdentificadoresContext listaIdentificadores() {
			return getRuleContext(ListaIdentificadoresContext.class,0);
		}
		public TerminalNode DOIS_PONTOS() { return getToken(LALGParser.DOIS_PONTOS, 0); }
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public TerminalNode VAR() { return getToken(LALGParser.VAR, 0); }
		public SecaoParametrosFormaisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secaoParametrosFormais; }
	}

	public final SecaoParametrosFormaisContext secaoParametrosFormais() throws RecognitionException {
		SecaoParametrosFormaisContext _localctx = new SecaoParametrosFormaisContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_secaoParametrosFormais);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VAR) {
				{
				setState(102);
				match(VAR);
				}
			}

			setState(105);
			listaIdentificadores();
			setState(106);
			match(DOIS_PONTOS);
			setState(107);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComandoCompostoContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(LALGParser.BEGIN, 0); }
		public List<ComandoContext> comando() {
			return getRuleContexts(ComandoContext.class);
		}
		public ComandoContext comando(int i) {
			return getRuleContext(ComandoContext.class,i);
		}
		public TerminalNode END() { return getToken(LALGParser.END, 0); }
		public List<TerminalNode> PONTO_VIRGULA() { return getTokens(LALGParser.PONTO_VIRGULA); }
		public TerminalNode PONTO_VIRGULA(int i) {
			return getToken(LALGParser.PONTO_VIRGULA, i);
		}
		public ComandoCompostoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandoComposto; }
	}

	public final ComandoCompostoContext comandoComposto() throws RecognitionException {
		ComandoCompostoContext _localctx = new ComandoCompostoContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_comandoComposto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(BEGIN);
			setState(110);
			comando();
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PONTO_VIRGULA) {
				{
				{
				setState(111);
				match(PONTO_VIRGULA);
				setState(112);
				comando();
				}
				}
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComandoContext extends ParserRuleContext {
		public AtribuicaoContext atribuicao() {
			return getRuleContext(AtribuicaoContext.class,0);
		}
		public ChamadaProcedimentoContext chamadaProcedimento() {
			return getRuleContext(ChamadaProcedimentoContext.class,0);
		}
		public ComandoCompostoContext comandoComposto() {
			return getRuleContext(ComandoCompostoContext.class,0);
		}
		public ComandoCondicionalContext comandoCondicional() {
			return getRuleContext(ComandoCondicionalContext.class,0);
		}
		public ComandoRepetitivoContext comandoRepetitivo() {
			return getRuleContext(ComandoRepetitivoContext.class,0);
		}
		public ComandoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando; }
	}

	public final ComandoContext comando() throws RecognitionException {
		ComandoContext _localctx = new ComandoContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_comando);
		try {
			setState(125);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(120);
				atribuicao();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(121);
				chamadaProcedimento();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(122);
				comandoComposto();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(123);
				comandoCondicional();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(124);
				comandoRepetitivo();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AtribuicaoContext extends ParserRuleContext {
		public VariavelContext variavel() {
			return getRuleContext(VariavelContext.class,0);
		}
		public TerminalNode ATRIBUICAO() { return getToken(LALGParser.ATRIBUICAO, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public AtribuicaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atribuicao; }
	}

	public final AtribuicaoContext atribuicao() throws RecognitionException {
		AtribuicaoContext _localctx = new AtribuicaoContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_atribuicao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			variavel();
			setState(128);
			match(ATRIBUICAO);
			setState(129);
			expressao();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ChamadaProcedimentoContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public TerminalNode ABRE_PARENTESES() { return getToken(LALGParser.ABRE_PARENTESES, 0); }
		public TerminalNode FECHA_PARENTESES() { return getToken(LALGParser.FECHA_PARENTESES, 0); }
		public ListaExpressoesContext listaExpressoes() {
			return getRuleContext(ListaExpressoesContext.class,0);
		}
		public ChamadaProcedimentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chamadaProcedimento; }
	}

	public final ChamadaProcedimentoContext chamadaProcedimento() throws RecognitionException {
		ChamadaProcedimentoContext _localctx = new ChamadaProcedimentoContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_chamadaProcedimento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(ID);
			setState(132);
			match(ABRE_PARENTESES);
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34396701184L) != 0)) {
				{
				setState(133);
				listaExpressoes();
				}
			}

			setState(136);
			match(FECHA_PARENTESES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComandoCondicionalContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(LALGParser.IF, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode THEN() { return getToken(LALGParser.THEN, 0); }
		public List<ComandoContext> comando() {
			return getRuleContexts(ComandoContext.class);
		}
		public ComandoContext comando(int i) {
			return getRuleContext(ComandoContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(LALGParser.ELSE, 0); }
		public ComandoCondicionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandoCondicional; }
	}

	public final ComandoCondicionalContext comandoCondicional() throws RecognitionException {
		ComandoCondicionalContext _localctx = new ComandoCondicionalContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_comandoCondicional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(IF);
			setState(139);
			expressao();
			setState(140);
			match(THEN);
			setState(141);
			comando();
			setState(144);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(142);
				match(ELSE);
				setState(143);
				comando();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComandoRepetitivoContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(LALGParser.WHILE, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode DO() { return getToken(LALGParser.DO, 0); }
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public ComandoRepetitivoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandoRepetitivo; }
	}

	public final ComandoRepetitivoContext comandoRepetitivo() throws RecognitionException {
		ComandoRepetitivoContext _localctx = new ComandoRepetitivoContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_comandoRepetitivo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			match(WHILE);
			setState(147);
			expressao();
			setState(148);
			match(DO);
			setState(149);
			comando();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressaoContext extends ParserRuleContext {
		public List<ExpressaoSimplesContext> expressaoSimples() {
			return getRuleContexts(ExpressaoSimplesContext.class);
		}
		public ExpressaoSimplesContext expressaoSimples(int i) {
			return getRuleContext(ExpressaoSimplesContext.class,i);
		}
		public TerminalNode RELACAO() { return getToken(LALGParser.RELACAO, 0); }
		public ExpressaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressao; }
	}

	public final ExpressaoContext expressao() throws RecognitionException {
		ExpressaoContext _localctx = new ExpressaoContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_expressao);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			expressaoSimples();
			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RELACAO) {
				{
				setState(152);
				match(RELACAO);
				setState(153);
				expressaoSimples();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressaoSimplesContext extends ParserRuleContext {
		public List<TermoContext> termo() {
			return getRuleContexts(TermoContext.class);
		}
		public TermoContext termo(int i) {
			return getRuleContext(TermoContext.class,i);
		}
		public List<TerminalNode> MAIS() { return getTokens(LALGParser.MAIS); }
		public TerminalNode MAIS(int i) {
			return getToken(LALGParser.MAIS, i);
		}
		public List<TerminalNode> MENOS() { return getTokens(LALGParser.MENOS); }
		public TerminalNode MENOS(int i) {
			return getToken(LALGParser.MENOS, i);
		}
		public List<TerminalNode> OR() { return getTokens(LALGParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(LALGParser.OR, i);
		}
		public ExpressaoSimplesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressaoSimples; }
	}

	public final ExpressaoSimplesContext expressaoSimples() throws RecognitionException {
		ExpressaoSimplesContext _localctx = new ExpressaoSimplesContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_expressaoSimples);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAIS || _la==MENOS) {
				{
				setState(156);
				_la = _input.LA(1);
				if ( !(_la==MAIS || _la==MENOS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(159);
			termo();
			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17183014912L) != 0)) {
				{
				{
				setState(160);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 17183014912L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(161);
				termo();
				}
				}
				setState(166);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TermoContext extends ParserRuleContext {
		public List<FatorContext> fator() {
			return getRuleContexts(FatorContext.class);
		}
		public FatorContext fator(int i) {
			return getRuleContext(FatorContext.class,i);
		}
		public List<TerminalNode> MULT() { return getTokens(LALGParser.MULT); }
		public TerminalNode MULT(int i) {
			return getToken(LALGParser.MULT, i);
		}
		public List<TerminalNode> DIV() { return getTokens(LALGParser.DIV); }
		public TerminalNode DIV(int i) {
			return getToken(LALGParser.DIV, i);
		}
		public List<TerminalNode> AND() { return getTokens(LALGParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(LALGParser.AND, i);
		}
		public TermoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termo; }
	}

	public final TermoContext termo() throws RecognitionException {
		TermoContext _localctx = new TermoContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_termo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			fator();
			setState(172);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8602517504L) != 0)) {
				{
				{
				setState(168);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8602517504L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(169);
				fator();
				}
				}
				setState(174);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FatorContext extends ParserRuleContext {
		public VariavelContext variavel() {
			return getRuleContext(VariavelContext.class,0);
		}
		public TerminalNode TIPO() { return getToken(LALGParser.TIPO, 0); }
		public TerminalNode ABRE_PARENTESES() { return getToken(LALGParser.ABRE_PARENTESES, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode FECHA_PARENTESES() { return getToken(LALGParser.FECHA_PARENTESES, 0); }
		public TerminalNode NOT() { return getToken(LALGParser.NOT, 0); }
		public FatorContext fator() {
			return getRuleContext(FatorContext.class,0);
		}
		public FatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fator; }
	}

	public final FatorContext fator() throws RecognitionException {
		FatorContext _localctx = new FatorContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_fator);
		try {
			setState(183);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(175);
				variavel();
				}
				break;
			case TIPO:
				enterOuterAlt(_localctx, 2);
				{
				setState(176);
				match(TIPO);
				}
				break;
			case ABRE_PARENTESES:
				enterOuterAlt(_localctx, 3);
				{
				setState(177);
				match(ABRE_PARENTESES);
				setState(178);
				expressao();
				setState(179);
				match(FECHA_PARENTESES);
				}
				break;
			case NOT:
				enterOuterAlt(_localctx, 4);
				{
				setState(181);
				match(NOT);
				setState(182);
				fator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariavelContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public TerminalNode ABRE_COLCHETES() { return getToken(LALGParser.ABRE_COLCHETES, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode FECHA_COLCHETES() { return getToken(LALGParser.FECHA_COLCHETES, 0); }
		public VariavelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variavel; }
	}

	public final VariavelContext variavel() throws RecognitionException {
		VariavelContext _localctx = new VariavelContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_variavel);
		try {
			setState(191);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(185);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(186);
				match(ID);
				setState(187);
				match(ABRE_COLCHETES);
				setState(188);
				expressao();
				setState(189);
				match(FECHA_COLCHETES);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListaExpressoesContext extends ParserRuleContext {
		public List<ExpressaoContext> expressao() {
			return getRuleContexts(ExpressaoContext.class);
		}
		public ExpressaoContext expressao(int i) {
			return getRuleContext(ExpressaoContext.class,i);
		}
		public List<TerminalNode> VIRGULA() { return getTokens(LALGParser.VIRGULA); }
		public TerminalNode VIRGULA(int i) {
			return getToken(LALGParser.VIRGULA, i);
		}
		public ListaExpressoesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaExpressoes; }
	}

	public final ListaExpressoesContext listaExpressoes() throws RecognitionException {
		ListaExpressoesContext _localctx = new ListaExpressoesContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_listaExpressoes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			expressao();
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VIRGULA) {
				{
				{
				setState(194);
				match(VIRGULA);
				setState(195);
				expressao();
				}
				}
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001&\u00ca\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0003\u0001"+
		"2\b\u0001\u0001\u0001\u0003\u00015\b\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0005\u0002<\b\u0002\n\u0002\f\u0002?\t"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0005\u0004I\b\u0004\n\u0004\f\u0004L\t"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005Q\b\u0005\n\u0005"+
		"\f\u0005T\t\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005"+
		"\u0007`\b\u0007\n\u0007\f\u0007c\t\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0003\bh\b\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0005\tr\b\t\n\t\f\tu\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0003\n~\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\f\u0003\f\u0087\b\f\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u0091\b\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0003\u000f\u009b\b\u000f\u0001\u0010\u0003\u0010\u009e\b"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0005\u0010\u00a3\b\u0010\n"+
		"\u0010\f\u0010\u00a6\t\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0005"+
		"\u0011\u00ab\b\u0011\n\u0011\f\u0011\u00ae\t\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0003\u0012\u00b8\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0003\u0013\u00c0\b\u0013\u0001\u0014\u0001\u0014"+
		"\u0001\u0014\u0005\u0014\u00c5\b\u0014\n\u0014\f\u0014\u00c8\t\u0014\u0001"+
		"\u0014\u0000\u0000\u0015\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e \"$&(\u0000\u0003\u0001\u0000\u0014"+
		"\u0015\u0002\u0000\u0014\u0015\"\"\u0002\u0000\u0016\u0017!!\u00cb\u0000"+
		"*\u0001\u0000\u0000\u0000\u00021\u0001\u0000\u0000\u0000\u00048\u0001"+
		"\u0000\u0000\u0000\u0006B\u0001\u0000\u0000\u0000\bE\u0001\u0000\u0000"+
		"\u0000\nM\u0001\u0000\u0000\u0000\fU\u0001\u0000\u0000\u0000\u000e[\u0001"+
		"\u0000\u0000\u0000\u0010g\u0001\u0000\u0000\u0000\u0012m\u0001\u0000\u0000"+
		"\u0000\u0014}\u0001\u0000\u0000\u0000\u0016\u007f\u0001\u0000\u0000\u0000"+
		"\u0018\u0083\u0001\u0000\u0000\u0000\u001a\u008a\u0001\u0000\u0000\u0000"+
		"\u001c\u0092\u0001\u0000\u0000\u0000\u001e\u0097\u0001\u0000\u0000\u0000"+
		" \u009d\u0001\u0000\u0000\u0000\"\u00a7\u0001\u0000\u0000\u0000$\u00b7"+
		"\u0001\u0000\u0000\u0000&\u00bf\u0001\u0000\u0000\u0000(\u00c1\u0001\u0000"+
		"\u0000\u0000*+\u0005\u0004\u0000\u0000+,\u0005#\u0000\u0000,-\u0005\u001e"+
		"\u0000\u0000-.\u0003\u0002\u0001\u0000./\u0005 \u0000\u0000/\u0001\u0001"+
		"\u0000\u0000\u000002\u0003\u0004\u0002\u000010\u0001\u0000\u0000\u0000"+
		"12\u0001\u0000\u0000\u000024\u0001\u0000\u0000\u000035\u0003\n\u0005\u0000"+
		"43\u0001\u0000\u0000\u000045\u0001\u0000\u0000\u000056\u0001\u0000\u0000"+
		"\u000067\u0003\u0012\t\u00007\u0003\u0001\u0000\u0000\u00008=\u0003\u0006"+
		"\u0003\u00009:\u0005\u001e\u0000\u0000:<\u0003\u0006\u0003\u0000;9\u0001"+
		"\u0000\u0000\u0000<?\u0001\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000"+
		"=>\u0001\u0000\u0000\u0000>@\u0001\u0000\u0000\u0000?=\u0001\u0000\u0000"+
		"\u0000@A\u0005\u001e\u0000\u0000A\u0005\u0001\u0000\u0000\u0000BC\u0005"+
		"\t\u0000\u0000CD\u0003\b\u0004\u0000D\u0007\u0001\u0000\u0000\u0000EJ"+
		"\u0005#\u0000\u0000FG\u0005\u001d\u0000\u0000GI\u0005#\u0000\u0000HF\u0001"+
		"\u0000\u0000\u0000IL\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000"+
		"JK\u0001\u0000\u0000\u0000K\t\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000"+
		"\u0000MR\u0003\f\u0006\u0000NO\u0005\u001e\u0000\u0000OQ\u0003\f\u0006"+
		"\u0000PN\u0001\u0000\u0000\u0000QT\u0001\u0000\u0000\u0000RP\u0001\u0000"+
		"\u0000\u0000RS\u0001\u0000\u0000\u0000S\u000b\u0001\u0000\u0000\u0000"+
		"TR\u0001\u0000\u0000\u0000UV\u0005\b\u0000\u0000VW\u0005#\u0000\u0000"+
		"WX\u0003\u000e\u0007\u0000XY\u0005\u001e\u0000\u0000YZ\u0003\u0002\u0001"+
		"\u0000Z\r\u0001\u0000\u0000\u0000[\\\u0005\u0019\u0000\u0000\\a\u0003"+
		"\u0010\b\u0000]^\u0005\u001e\u0000\u0000^`\u0003\u0010\b\u0000_]\u0001"+
		"\u0000\u0000\u0000`c\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000"+
		"ab\u0001\u0000\u0000\u0000bd\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000"+
		"\u0000de\u0005\u001a\u0000\u0000e\u000f\u0001\u0000\u0000\u0000fh\u0005"+
		"\u0007\u0000\u0000gf\u0001\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000"+
		"hi\u0001\u0000\u0000\u0000ij\u0003\b\u0004\u0000jk\u0005\u001f\u0000\u0000"+
		"kl\u0005#\u0000\u0000l\u0011\u0001\u0000\u0000\u0000mn\u0005\u0005\u0000"+
		"\u0000ns\u0003\u0014\n\u0000op\u0005\u001e\u0000\u0000pr\u0003\u0014\n"+
		"\u0000qo\u0001\u0000\u0000\u0000ru\u0001\u0000\u0000\u0000sq\u0001\u0000"+
		"\u0000\u0000st\u0001\u0000\u0000\u0000tv\u0001\u0000\u0000\u0000us\u0001"+
		"\u0000\u0000\u0000vw\u0005\u0006\u0000\u0000w\u0013\u0001\u0000\u0000"+
		"\u0000x~\u0003\u0016\u000b\u0000y~\u0003\u0018\f\u0000z~\u0003\u0012\t"+
		"\u0000{~\u0003\u001a\r\u0000|~\u0003\u001c\u000e\u0000}x\u0001\u0000\u0000"+
		"\u0000}y\u0001\u0000\u0000\u0000}z\u0001\u0000\u0000\u0000}{\u0001\u0000"+
		"\u0000\u0000}|\u0001\u0000\u0000\u0000~\u0015\u0001\u0000\u0000\u0000"+
		"\u007f\u0080\u0003&\u0013\u0000\u0080\u0081\u0005\u0013\u0000\u0000\u0081"+
		"\u0082\u0003\u001e\u000f\u0000\u0082\u0017\u0001\u0000\u0000\u0000\u0083"+
		"\u0084\u0005#\u0000\u0000\u0084\u0086\u0005\u0019\u0000\u0000\u0085\u0087"+
		"\u0003(\u0014\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0086\u0087\u0001"+
		"\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u0089\u0005"+
		"\u001a\u0000\u0000\u0089\u0019\u0001\u0000\u0000\u0000\u008a\u008b\u0005"+
		"\r\u0000\u0000\u008b\u008c\u0003\u001e\u000f\u0000\u008c\u008d\u0005\u000e"+
		"\u0000\u0000\u008d\u0090\u0003\u0014\n\u0000\u008e\u008f\u0005\u000f\u0000"+
		"\u0000\u008f\u0091\u0003\u0014\n\u0000\u0090\u008e\u0001\u0000\u0000\u0000"+
		"\u0090\u0091\u0001\u0000\u0000\u0000\u0091\u001b\u0001\u0000\u0000\u0000"+
		"\u0092\u0093\u0005\u0010\u0000\u0000\u0093\u0094\u0003\u001e\u000f\u0000"+
		"\u0094\u0095\u0005\u0011\u0000\u0000\u0095\u0096\u0003\u0014\n\u0000\u0096"+
		"\u001d\u0001\u0000\u0000\u0000\u0097\u009a\u0003 \u0010\u0000\u0098\u0099"+
		"\u0005\u0018\u0000\u0000\u0099\u009b\u0003 \u0010\u0000\u009a\u0098\u0001"+
		"\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000\u0000\u009b\u001f\u0001"+
		"\u0000\u0000\u0000\u009c\u009e\u0007\u0000\u0000\u0000\u009d\u009c\u0001"+
		"\u0000\u0000\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u009f\u0001"+
		"\u0000\u0000\u0000\u009f\u00a4\u0003\"\u0011\u0000\u00a0\u00a1\u0007\u0001"+
		"\u0000\u0000\u00a1\u00a3\u0003\"\u0011\u0000\u00a2\u00a0\u0001\u0000\u0000"+
		"\u0000\u00a3\u00a6\u0001\u0000\u0000\u0000\u00a4\u00a2\u0001\u0000\u0000"+
		"\u0000\u00a4\u00a5\u0001\u0000\u0000\u0000\u00a5!\u0001\u0000\u0000\u0000"+
		"\u00a6\u00a4\u0001\u0000\u0000\u0000\u00a7\u00ac\u0003$\u0012\u0000\u00a8"+
		"\u00a9\u0007\u0002\u0000\u0000\u00a9\u00ab\u0003$\u0012\u0000\u00aa\u00a8"+
		"\u0001\u0000\u0000\u0000\u00ab\u00ae\u0001\u0000\u0000\u0000\u00ac\u00aa"+
		"\u0001\u0000\u0000\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad#\u0001"+
		"\u0000\u0000\u0000\u00ae\u00ac\u0001\u0000\u0000\u0000\u00af\u00b8\u0003"+
		"&\u0013\u0000\u00b0\u00b8\u0005\t\u0000\u0000\u00b1\u00b2\u0005\u0019"+
		"\u0000\u0000\u00b2\u00b3\u0003\u001e\u000f\u0000\u00b3\u00b4\u0005\u001a"+
		"\u0000\u0000\u00b4\u00b8\u0001\u0000\u0000\u0000\u00b5\u00b6\u0005\u0012"+
		"\u0000\u0000\u00b6\u00b8\u0003$\u0012\u0000\u00b7\u00af\u0001\u0000\u0000"+
		"\u0000\u00b7\u00b0\u0001\u0000\u0000\u0000\u00b7\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b8%\u0001\u0000\u0000\u0000"+
		"\u00b9\u00c0\u0005#\u0000\u0000\u00ba\u00bb\u0005#\u0000\u0000\u00bb\u00bc"+
		"\u0005\u001b\u0000\u0000\u00bc\u00bd\u0003\u001e\u000f\u0000\u00bd\u00be"+
		"\u0005\u001c\u0000\u0000\u00be\u00c0\u0001\u0000\u0000\u0000\u00bf\u00b9"+
		"\u0001\u0000\u0000\u0000\u00bf\u00ba\u0001\u0000\u0000\u0000\u00c0\'\u0001"+
		"\u0000\u0000\u0000\u00c1\u00c6\u0003\u001e\u000f\u0000\u00c2\u00c3\u0005"+
		"\u001d\u0000\u0000\u00c3\u00c5\u0003\u001e\u000f\u0000\u00c4\u00c2\u0001"+
		"\u0000\u0000\u0000\u00c5\u00c8\u0001\u0000\u0000\u0000\u00c6\u00c4\u0001"+
		"\u0000\u0000\u0000\u00c6\u00c7\u0001\u0000\u0000\u0000\u00c7)\u0001\u0000"+
		"\u0000\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u001214=JRags}\u0086"+
		"\u0090\u009a\u009d\u00a4\u00ac\u00b7\u00bf\u00c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}