// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALGParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LALGParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			declaracaoVariaveis();
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PONTO_VIRGULA) {
				{
				{
				setState(57);
				match(PONTO_VIRGULA);
				setState(58);
				declaracaoVariaveis();
				}
				}
				setState(63);
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
			setState(64);
			match(TIPO);
			setState(65);
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
			setState(67);
			match(ID);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VIRGULA) {
				{
				{
				setState(68);
				match(VIRGULA);
				setState(69);
				match(ID);
				}
				}
				setState(74);
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
			setState(75);
			declaracaoProcedimento();
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PONTO_VIRGULA) {
				{
				{
				setState(76);
				match(PONTO_VIRGULA);
				setState(77);
				declaracaoProcedimento();
				}
				}
				setState(82);
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
			setState(83);
			match(PROCEDURE);
			setState(84);
			match(ID);
			setState(85);
			parametrosFormais();
			setState(86);
			match(PONTO_VIRGULA);
			setState(87);
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
			setState(89);
			match(ABRE_PARENTESES);
			setState(90);
			secaoParametrosFormais();
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PONTO_VIRGULA) {
				{
				{
				setState(91);
				match(PONTO_VIRGULA);
				setState(92);
				secaoParametrosFormais();
				}
				}
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(98);
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
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VAR) {
				{
				setState(100);
				match(VAR);
				}
			}

			setState(103);
			listaIdentificadores();
			setState(104);
			match(DOIS_PONTOS);
			setState(105);
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
			setState(107);
			match(BEGIN);
			setState(108);
			comando();
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PONTO_VIRGULA) {
				{
				{
				setState(109);
				match(PONTO_VIRGULA);
				setState(110);
				comando();
				}
				}
				setState(115);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(116);
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
			setState(123);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(118);
				atribuicao();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(119);
				chamadaProcedimento();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(120);
				comandoComposto();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(121);
				comandoCondicional();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(122);
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
			setState(125);
			variavel();
			setState(126);
			match(ATRIBUICAO);
			setState(127);
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
			setState(129);
			match(ID);
			setState(130);
			match(ABRE_PARENTESES);
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TIPO) | (1L << NOT) | (1L << MAIS) | (1L << MENOS) | (1L << ABRE_PARENTESES) | (1L << ID))) != 0)) {
				{
				setState(131);
				listaExpressoes();
				}
			}

			setState(134);
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
			setState(136);
			match(IF);
			setState(137);
			expressao();
			setState(138);
			match(THEN);
			setState(139);
			comando();
			setState(142);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(140);
				match(ELSE);
				setState(141);
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
			setState(144);
			match(WHILE);
			setState(145);
			expressao();
			setState(146);
			match(DO);
			setState(147);
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
			setState(149);
			expressaoSimples();
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RELACAO) {
				{
				setState(150);
				match(RELACAO);
				setState(151);
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
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAIS || _la==MENOS) {
				{
				setState(154);
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

			setState(157);
			termo();
			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MAIS) | (1L << MENOS) | (1L << OR))) != 0)) {
				{
				{
				setState(158);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MAIS) | (1L << MENOS) | (1L << OR))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(159);
				termo();
				}
				}
				setState(164);
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
			setState(165);
			fator();
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MULT) | (1L << DIV) | (1L << AND))) != 0)) {
				{
				{
				setState(166);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MULT) | (1L << DIV) | (1L << AND))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(167);
				fator();
				}
				}
				setState(172);
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
			setState(181);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(173);
				variavel();
				}
				break;
			case TIPO:
				enterOuterAlt(_localctx, 2);
				{
				setState(174);
				match(TIPO);
				}
				break;
			case ABRE_PARENTESES:
				enterOuterAlt(_localctx, 3);
				{
				setState(175);
				match(ABRE_PARENTESES);
				setState(176);
				expressao();
				setState(177);
				match(FECHA_PARENTESES);
				}
				break;
			case NOT:
				enterOuterAlt(_localctx, 4);
				{
				setState(179);
				match(NOT);
				setState(180);
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
			setState(189);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(183);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(184);
				match(ID);
				setState(185);
				match(ABRE_COLCHETES);
				setState(186);
				expressao();
				setState(187);
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
			setState(191);
			expressao();
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VIRGULA) {
				{
				{
				setState(192);
				match(VIRGULA);
				setState(193);
				expressao();
				}
				}
				setState(198);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3(\u00ca\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\3\2\3\2\3\2\3\2\3\2\3\3\5"+
		"\3\64\n\3\3\3\5\3\67\n\3\3\3\3\3\3\4\3\4\3\4\7\4>\n\4\f\4\16\4A\13\4\3"+
		"\5\3\5\3\5\3\6\3\6\3\6\7\6I\n\6\f\6\16\6L\13\6\3\7\3\7\3\7\7\7Q\n\7\f"+
		"\7\16\7T\13\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\7\t`\n\t\f\t\16"+
		"\tc\13\t\3\t\3\t\3\n\5\nh\n\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\7\13"+
		"r\n\13\f\13\16\13u\13\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\5\f~\n\f\3\r\3"+
		"\r\3\r\3\r\3\16\3\16\3\16\5\16\u0087\n\16\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\5\17\u0091\n\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\5\21"+
		"\u009b\n\21\3\22\5\22\u009e\n\22\3\22\3\22\3\22\7\22\u00a3\n\22\f\22\16"+
		"\22\u00a6\13\22\3\23\3\23\3\23\7\23\u00ab\n\23\f\23\16\23\u00ae\13\23"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\5\24\u00b8\n\24\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\5\25\u00c0\n\25\3\26\3\26\3\26\7\26\u00c5\n\26\f\26\16"+
		"\26\u00c8\13\26\3\26\2\2\27\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \""+
		"$&(*\2\5\3\2\26\27\4\2\26\27$$\4\2\30\31##\2\u00cb\2,\3\2\2\2\4\63\3\2"+
		"\2\2\6:\3\2\2\2\bB\3\2\2\2\nE\3\2\2\2\fM\3\2\2\2\16U\3\2\2\2\20[\3\2\2"+
		"\2\22g\3\2\2\2\24m\3\2\2\2\26}\3\2\2\2\30\177\3\2\2\2\32\u0083\3\2\2\2"+
		"\34\u008a\3\2\2\2\36\u0092\3\2\2\2 \u0097\3\2\2\2\"\u009d\3\2\2\2$\u00a7"+
		"\3\2\2\2&\u00b7\3\2\2\2(\u00bf\3\2\2\2*\u00c1\3\2\2\2,-\7\6\2\2-.\7%\2"+
		"\2./\7 \2\2/\60\5\4\3\2\60\61\7\"\2\2\61\3\3\2\2\2\62\64\5\6\4\2\63\62"+
		"\3\2\2\2\63\64\3\2\2\2\64\66\3\2\2\2\65\67\5\f\7\2\66\65\3\2\2\2\66\67"+
		"\3\2\2\2\678\3\2\2\289\5\24\13\29\5\3\2\2\2:?\5\b\5\2;<\7 \2\2<>\5\b\5"+
		"\2=;\3\2\2\2>A\3\2\2\2?=\3\2\2\2?@\3\2\2\2@\7\3\2\2\2A?\3\2\2\2BC\7\13"+
		"\2\2CD\5\n\6\2D\t\3\2\2\2EJ\7%\2\2FG\7\37\2\2GI\7%\2\2HF\3\2\2\2IL\3\2"+
		"\2\2JH\3\2\2\2JK\3\2\2\2K\13\3\2\2\2LJ\3\2\2\2MR\5\16\b\2NO\7 \2\2OQ\5"+
		"\16\b\2PN\3\2\2\2QT\3\2\2\2RP\3\2\2\2RS\3\2\2\2S\r\3\2\2\2TR\3\2\2\2U"+
		"V\7\n\2\2VW\7%\2\2WX\5\20\t\2XY\7 \2\2YZ\5\4\3\2Z\17\3\2\2\2[\\\7\33\2"+
		"\2\\a\5\22\n\2]^\7 \2\2^`\5\22\n\2_]\3\2\2\2`c\3\2\2\2a_\3\2\2\2ab\3\2"+
		"\2\2bd\3\2\2\2ca\3\2\2\2de\7\34\2\2e\21\3\2\2\2fh\7\t\2\2gf\3\2\2\2gh"+
		"\3\2\2\2hi\3\2\2\2ij\5\n\6\2jk\7!\2\2kl\7%\2\2l\23\3\2\2\2mn\7\7\2\2n"+
		"s\5\26\f\2op\7 \2\2pr\5\26\f\2qo\3\2\2\2ru\3\2\2\2sq\3\2\2\2st\3\2\2\2"+
		"tv\3\2\2\2us\3\2\2\2vw\7\b\2\2w\25\3\2\2\2x~\5\30\r\2y~\5\32\16\2z~\5"+
		"\24\13\2{~\5\34\17\2|~\5\36\20\2}x\3\2\2\2}y\3\2\2\2}z\3\2\2\2}{\3\2\2"+
		"\2}|\3\2\2\2~\27\3\2\2\2\177\u0080\5(\25\2\u0080\u0081\7\25\2\2\u0081"+
		"\u0082\5 \21\2\u0082\31\3\2\2\2\u0083\u0084\7%\2\2\u0084\u0086\7\33\2"+
		"\2\u0085\u0087\5*\26\2\u0086\u0085\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0088"+
		"\3\2\2\2\u0088\u0089\7\34\2\2\u0089\33\3\2\2\2\u008a\u008b\7\17\2\2\u008b"+
		"\u008c\5 \21\2\u008c\u008d\7\20\2\2\u008d\u0090\5\26\f\2\u008e\u008f\7"+
		"\21\2\2\u008f\u0091\5\26\f\2\u0090\u008e\3\2\2\2\u0090\u0091\3\2\2\2\u0091"+
		"\35\3\2\2\2\u0092\u0093\7\22\2\2\u0093\u0094\5 \21\2\u0094\u0095\7\23"+
		"\2\2\u0095\u0096\5\26\f\2\u0096\37\3\2\2\2\u0097\u009a\5\"\22\2\u0098"+
		"\u0099\7\32\2\2\u0099\u009b\5\"\22\2\u009a\u0098\3\2\2\2\u009a\u009b\3"+
		"\2\2\2\u009b!\3\2\2\2\u009c\u009e\t\2\2\2\u009d\u009c\3\2\2\2\u009d\u009e"+
		"\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a4\5$\23\2\u00a0\u00a1\t\3\2\2\u00a1"+
		"\u00a3\5$\23\2\u00a2\u00a0\3\2\2\2\u00a3\u00a6\3\2\2\2\u00a4\u00a2\3\2"+
		"\2\2\u00a4\u00a5\3\2\2\2\u00a5#\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a7\u00ac"+
		"\5&\24\2\u00a8\u00a9\t\4\2\2\u00a9\u00ab\5&\24\2\u00aa\u00a8\3\2\2\2\u00ab"+
		"\u00ae\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad%\3\2\2\2"+
		"\u00ae\u00ac\3\2\2\2\u00af\u00b8\5(\25\2\u00b0\u00b8\7\13\2\2\u00b1\u00b2"+
		"\7\33\2\2\u00b2\u00b3\5 \21\2\u00b3\u00b4\7\34\2\2\u00b4\u00b8\3\2\2\2"+
		"\u00b5\u00b6\7\24\2\2\u00b6\u00b8\5&\24\2\u00b7\u00af\3\2\2\2\u00b7\u00b0"+
		"\3\2\2\2\u00b7\u00b1\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b8\'\3\2\2\2\u00b9"+
		"\u00c0\7%\2\2\u00ba\u00bb\7%\2\2\u00bb\u00bc\7\35\2\2\u00bc\u00bd\5 \21"+
		"\2\u00bd\u00be\7\36\2\2\u00be\u00c0\3\2\2\2\u00bf\u00b9\3\2\2\2\u00bf"+
		"\u00ba\3\2\2\2\u00c0)\3\2\2\2\u00c1\u00c6\5 \21\2\u00c2\u00c3\7\37\2\2"+
		"\u00c3\u00c5\5 \21\2\u00c4\u00c2\3\2\2\2\u00c5\u00c8\3\2\2\2\u00c6\u00c4"+
		"\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7+\3\2\2\2\u00c8\u00c6\3\2\2\2\24\63"+
		"\66?JRags}\u0086\u0090\u009a\u009d\u00a4\u00ac\u00b7\u00bf\u00c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}