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
		PROCEDURE=8, INT_TIPO=9, FLOAT_TIPO=10, BOOL_TIPO=11, READ=12, WRITE=13, 
		TRUE_CONST=14, FALSE_CONST=15, IF=16, THEN=17, ELSE=18, WHILE=19, DO=20, 
		NOT=21, ATRIBUICAO=22, MAIS=23, MENOS=24, MULT=25, DIV=26, RELACAO=27, 
		ABRE_PARENTESES=28, FECHA_PARENTESES=29, ABRE_COLCHETES=30, FECHA_COLCHETES=31, 
		VIRGULA=32, PONTO_VIRGULA=33, DOIS_PONTOS=34, PONTO=35, AND=36, OR=37, 
		ID=38, INT=39, FLOAT=40, INVALID_TOKEN=41, INVALID=42;
	public static final int
		RULE_numero = 0, RULE_termo = 1, RULE_termo_aux = 2, RULE_expressaoSimples = 3, 
		RULE_expressaoSimples_aux = 4, RULE_expressao = 5, RULE_expressao1 = 6, 
		RULE_fator = 7, RULE_variavel = 8, RULE_variavel1 = 9, RULE_declaracaoVariavel = 10, 
		RULE_listaID = 11, RULE_listaID_aux = 12, RULE_parteDeclaracaoVariavel = 13, 
		RULE_parteDeclaracaoVariavel_aux = 14, RULE_tipo = 15, RULE_programa = 16, 
		RULE_bloco = 17, RULE_parteDeclaracaoSubRotina = 18, RULE_parteDeclaracaoSubRotina_aux = 19, 
		RULE_declaracaoProcedimento = 20, RULE_declaracaoProcedimento_aux = 21, 
		RULE_parametros = 22, RULE_parametros_aux = 23, RULE_secaoParametros = 24, 
		RULE_secaoParametrosFormais_aux = 25, RULE_comandoComposto = 26, RULE_comandoComposto_aux = 27, 
		RULE_comando = 28, RULE_atribuicao = 29, RULE_chamadaProcedimento = 30, 
		RULE_chamadaProcedimento_aux = 31, RULE_comandoCondicional = 32, RULE_comandoCondicional_aux = 33, 
		RULE_comandoRepetitivo = 34, RULE_listaExpressao = 35, RULE_listaExpressao_aux = 36;
	private static String[] makeRuleNames() {
		return new String[] {
			"numero", "termo", "termo_aux", "expressaoSimples", "expressaoSimples_aux", 
			"expressao", "expressao1", "fator", "variavel", "variavel1", "declaracaoVariavel", 
			"listaID", "listaID_aux", "parteDeclaracaoVariavel", "parteDeclaracaoVariavel_aux", 
			"tipo", "programa", "bloco", "parteDeclaracaoSubRotina", "parteDeclaracaoSubRotina_aux", 
			"declaracaoProcedimento", "declaracaoProcedimento_aux", "parametros", 
			"parametros_aux", "secaoParametros", "secaoParametrosFormais_aux", "comandoComposto", 
			"comandoComposto_aux", "comando", "atribuicao", "chamadaProcedimento", 
			"chamadaProcedimento_aux", "comandoCondicional", "comandoCondicional_aux", 
			"comandoRepetitivo", "listaExpressao", "listaExpressao_aux"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'program'", "'begin'", "'end'", "'var'", "'procedure'", 
			"'int'", "'float'", "'boolean'", "'read'", "'write'", "'true'", "'false'", 
			"'if'", "'then'", "'else'", "'while'", "'do'", "'not'", "':='", "'+'", 
			"'-'", "'*'", "'/'", null, "'('", "')'", "'['", "']'", "','", "';'", 
			"':'", "'.'", "'and'", "'or'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", 
			"VAR", "PROCEDURE", "INT_TIPO", "FLOAT_TIPO", "BOOL_TIPO", "READ", "WRITE", 
			"TRUE_CONST", "FALSE_CONST", "IF", "THEN", "ELSE", "WHILE", "DO", "NOT", 
			"ATRIBUICAO", "MAIS", "MENOS", "MULT", "DIV", "RELACAO", "ABRE_PARENTESES", 
			"FECHA_PARENTESES", "ABRE_COLCHETES", "FECHA_COLCHETES", "VIRGULA", "PONTO_VIRGULA", 
			"DOIS_PONTOS", "PONTO", "AND", "OR", "ID", "INT", "FLOAT", "INVALID_TOKEN", 
			"INVALID"
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
	public static class NumeroContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(LALGParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(LALGParser.FLOAT, 0); }
		public NumeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numero; }
	}

	public final NumeroContext numero() throws RecognitionException {
		NumeroContext _localctx = new NumeroContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_numero);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
		public FatorContext fator() {
			return getRuleContext(FatorContext.class,0);
		}
		public Termo_auxContext termo_aux() {
			return getRuleContext(Termo_auxContext.class,0);
		}
		public TermoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termo; }
	}

	public final TermoContext termo() throws RecognitionException {
		TermoContext _localctx = new TermoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_termo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			fator();
			setState(77);
			termo_aux();
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
	public static class Termo_auxContext extends ParserRuleContext {
		public FatorContext fator() {
			return getRuleContext(FatorContext.class,0);
		}
		public Termo_auxContext termo_aux() {
			return getRuleContext(Termo_auxContext.class,0);
		}
		public TerminalNode MULT() { return getToken(LALGParser.MULT, 0); }
		public TerminalNode AND() { return getToken(LALGParser.AND, 0); }
		public Termo_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termo_aux; }
	}

	public final Termo_auxContext termo_aux() throws RecognitionException {
		Termo_auxContext _localctx = new Termo_auxContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_termo_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(79);
				_la = _input.LA(1);
				if ( !(_la==MULT || _la==AND) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(80);
				fator();
				setState(81);
				termo_aux();
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
	public static class ExpressaoSimplesContext extends ParserRuleContext {
		public TermoContext termo() {
			return getRuleContext(TermoContext.class,0);
		}
		public ExpressaoSimples_auxContext expressaoSimples_aux() {
			return getRuleContext(ExpressaoSimples_auxContext.class,0);
		}
		public TerminalNode MAIS() { return getToken(LALGParser.MAIS, 0); }
		public TerminalNode MENOS() { return getToken(LALGParser.MENOS, 0); }
		public ExpressaoSimplesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressaoSimples; }
	}

	public final ExpressaoSimplesContext expressaoSimples() throws RecognitionException {
		ExpressaoSimplesContext _localctx = new ExpressaoSimplesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_expressaoSimples);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAIS || _la==MENOS) {
				{
				setState(85);
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

			setState(88);
			termo();
			setState(89);
			expressaoSimples_aux();
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
	public static class ExpressaoSimples_auxContext extends ParserRuleContext {
		public TermoContext termo() {
			return getRuleContext(TermoContext.class,0);
		}
		public ExpressaoSimples_auxContext expressaoSimples_aux() {
			return getRuleContext(ExpressaoSimples_auxContext.class,0);
		}
		public TerminalNode MAIS() { return getToken(LALGParser.MAIS, 0); }
		public TerminalNode MENOS() { return getToken(LALGParser.MENOS, 0); }
		public TerminalNode OR() { return getToken(LALGParser.OR, 0); }
		public ExpressaoSimples_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressaoSimples_aux; }
	}

	public final ExpressaoSimples_auxContext expressaoSimples_aux() throws RecognitionException {
		ExpressaoSimples_auxContext _localctx = new ExpressaoSimples_auxContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_expressaoSimples_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				{
				setState(91);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 137464119296L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(92);
				termo();
				setState(93);
				expressaoSimples_aux();
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
	public static class ExpressaoContext extends ParserRuleContext {
		public ExpressaoSimplesContext expressaoSimples() {
			return getRuleContext(ExpressaoSimplesContext.class,0);
		}
		public Expressao1Context expressao1() {
			return getRuleContext(Expressao1Context.class,0);
		}
		public ExpressaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressao; }
	}

	public final ExpressaoContext expressao() throws RecognitionException {
		ExpressaoContext _localctx = new ExpressaoContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_expressao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			expressaoSimples();
			setState(98);
			expressao1();
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
	public static class Expressao1Context extends ParserRuleContext {
		public TerminalNode RELACAO() { return getToken(LALGParser.RELACAO, 0); }
		public ExpressaoSimplesContext expressaoSimples() {
			return getRuleContext(ExpressaoSimplesContext.class,0);
		}
		public Expressao1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressao1; }
	}

	public final Expressao1Context expressao1() throws RecognitionException {
		Expressao1Context _localctx = new Expressao1Context(_ctx, getState());
		enterRule(_localctx, 12, RULE_expressao1);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(100);
				match(RELACAO);
				setState(101);
				expressaoSimples();
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
	public static class FatorContext extends ParserRuleContext {
		public VariavelContext variavel() {
			return getRuleContext(VariavelContext.class,0);
		}
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public TerminalNode TRUE_CONST() { return getToken(LALGParser.TRUE_CONST, 0); }
		public TerminalNode FALSE_CONST() { return getToken(LALGParser.FALSE_CONST, 0); }
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
		enterRule(_localctx, 14, RULE_fator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(104);
				variavel();
				}
				break;
			case INT:
			case FLOAT:
				{
				setState(105);
				numero();
				}
				break;
			case ABRE_PARENTESES:
				{
				{
				setState(106);
				match(ABRE_PARENTESES);
				setState(107);
				expressao();
				setState(108);
				match(FECHA_PARENTESES);
				}
				}
				break;
			case NOT:
				{
				{
				setState(110);
				match(NOT);
				setState(111);
				fator();
				}
				}
				break;
			case TRUE_CONST:
				{
				setState(112);
				match(TRUE_CONST);
				}
				break;
			case FALSE_CONST:
				{
				setState(113);
				match(FALSE_CONST);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class VariavelContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public Variavel1Context variavel1() {
			return getRuleContext(Variavel1Context.class,0);
		}
		public VariavelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variavel; }
	}

	public final VariavelContext variavel() throws RecognitionException {
		VariavelContext _localctx = new VariavelContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_variavel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			match(ID);
			setState(117);
			variavel1();
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
	public static class Variavel1Context extends ParserRuleContext {
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public Variavel1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variavel1; }
	}

	public final Variavel1Context variavel1() throws RecognitionException {
		Variavel1Context _localctx = new Variavel1Context(_ctx, getState());
		enterRule(_localctx, 18, RULE_variavel1);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(119);
				expressao();
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
	public static class DeclaracaoVariavelContext extends ParserRuleContext {
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public ListaIDContext listaID() {
			return getRuleContext(ListaIDContext.class,0);
		}
		public DeclaracaoVariavelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracaoVariavel; }
	}

	public final DeclaracaoVariavelContext declaracaoVariavel() throws RecognitionException {
		DeclaracaoVariavelContext _localctx = new DeclaracaoVariavelContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_declaracaoVariavel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			tipo();
			setState(123);
			listaID();
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
	public static class ListaIDContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public ListaID_auxContext listaID_aux() {
			return getRuleContext(ListaID_auxContext.class,0);
		}
		public ListaIDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaID; }
	}

	public final ListaIDContext listaID() throws RecognitionException {
		ListaIDContext _localctx = new ListaIDContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_listaID);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(ID);
			setState(126);
			listaID_aux();
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
	public static class ListaID_auxContext extends ParserRuleContext {
		public TerminalNode VIRGULA() { return getToken(LALGParser.VIRGULA, 0); }
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public ListaID_auxContext listaID_aux() {
			return getRuleContext(ListaID_auxContext.class,0);
		}
		public ListaID_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaID_aux; }
	}

	public final ListaID_auxContext listaID_aux() throws RecognitionException {
		ListaID_auxContext _localctx = new ListaID_auxContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_listaID_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VIRGULA) {
				{
				setState(128);
				match(VIRGULA);
				setState(129);
				match(ID);
				setState(130);
				listaID_aux();
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
	public static class ParteDeclaracaoVariavelContext extends ParserRuleContext {
		public DeclaracaoVariavelContext declaracaoVariavel() {
			return getRuleContext(DeclaracaoVariavelContext.class,0);
		}
		public ParteDeclaracaoVariavel_auxContext parteDeclaracaoVariavel_aux() {
			return getRuleContext(ParteDeclaracaoVariavel_auxContext.class,0);
		}
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public ParteDeclaracaoVariavelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parteDeclaracaoVariavel; }
	}

	public final ParteDeclaracaoVariavelContext parteDeclaracaoVariavel() throws RecognitionException {
		ParteDeclaracaoVariavelContext _localctx = new ParteDeclaracaoVariavelContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_parteDeclaracaoVariavel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			declaracaoVariavel();
			setState(134);
			parteDeclaracaoVariavel_aux();
			setState(135);
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
	public static class ParteDeclaracaoVariavel_auxContext extends ParserRuleContext {
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public DeclaracaoVariavelContext declaracaoVariavel() {
			return getRuleContext(DeclaracaoVariavelContext.class,0);
		}
		public ParteDeclaracaoVariavel_auxContext parteDeclaracaoVariavel_aux() {
			return getRuleContext(ParteDeclaracaoVariavel_auxContext.class,0);
		}
		public ParteDeclaracaoVariavel_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parteDeclaracaoVariavel_aux; }
	}

	public final ParteDeclaracaoVariavel_auxContext parteDeclaracaoVariavel_aux() throws RecognitionException {
		ParteDeclaracaoVariavel_auxContext _localctx = new ParteDeclaracaoVariavel_auxContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_parteDeclaracaoVariavel_aux);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(137);
				match(PONTO_VIRGULA);
				setState(138);
				declaracaoVariavel();
				setState(139);
				parteDeclaracaoVariavel_aux();
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
	public static class TipoContext extends ParserRuleContext {
		public TerminalNode BOOL_TIPO() { return getToken(LALGParser.BOOL_TIPO, 0); }
		public TerminalNode INT_TIPO() { return getToken(LALGParser.INT_TIPO, 0); }
		public TerminalNode FLOAT_TIPO() { return getToken(LALGParser.FLOAT_TIPO, 0); }
		public TipoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo; }
	}

	public final TipoContext tipo() throws RecognitionException {
		TipoContext _localctx = new TipoContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_tipo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3584L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode PROGRAM() { return getToken(LALGParser.PROGRAM, 0); }
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public BlocoContext bloco() {
			return getRuleContext(BlocoContext.class,0);
		}
		public TerminalNode EOF() { return getToken(LALGParser.EOF, 0); }
		public List<TerminalNode> PONTO() { return getTokens(LALGParser.PONTO); }
		public TerminalNode PONTO(int i) {
			return getToken(LALGParser.PONTO, i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			match(PROGRAM);
			setState(146);
			match(ID);
			setState(147);
			match(PONTO_VIRGULA);
			setState(148);
			bloco();
			setState(150); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(149);
				match(PONTO);
				}
				}
				setState(152); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PONTO );
			setState(154);
			match(EOF);
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
		public ParteDeclaracaoVariavelContext parteDeclaracaoVariavel() {
			return getRuleContext(ParteDeclaracaoVariavelContext.class,0);
		}
		public ParteDeclaracaoSubRotinaContext parteDeclaracaoSubRotina() {
			return getRuleContext(ParteDeclaracaoSubRotinaContext.class,0);
		}
		public BlocoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bloco; }
	}

	public final BlocoContext bloco() throws RecognitionException {
		BlocoContext _localctx = new BlocoContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_bloco);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3584L) != 0)) {
				{
				setState(156);
				parteDeclaracaoVariavel();
				}
			}

			setState(160);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PROCEDURE) {
				{
				setState(159);
				parteDeclaracaoSubRotina();
				}
			}

			setState(162);
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
	public static class ParteDeclaracaoSubRotinaContext extends ParserRuleContext {
		public DeclaracaoProcedimentoContext declaracaoProcedimento() {
			return getRuleContext(DeclaracaoProcedimentoContext.class,0);
		}
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public ParteDeclaracaoSubRotina_auxContext parteDeclaracaoSubRotina_aux() {
			return getRuleContext(ParteDeclaracaoSubRotina_auxContext.class,0);
		}
		public ParteDeclaracaoSubRotinaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parteDeclaracaoSubRotina; }
	}

	public final ParteDeclaracaoSubRotinaContext parteDeclaracaoSubRotina() throws RecognitionException {
		ParteDeclaracaoSubRotinaContext _localctx = new ParteDeclaracaoSubRotinaContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_parteDeclaracaoSubRotina);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			declaracaoProcedimento();
			setState(165);
			match(PONTO_VIRGULA);
			setState(166);
			parteDeclaracaoSubRotina_aux();
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
	public static class ParteDeclaracaoSubRotina_auxContext extends ParserRuleContext {
		public DeclaracaoProcedimentoContext declaracaoProcedimento() {
			return getRuleContext(DeclaracaoProcedimentoContext.class,0);
		}
		public ParteDeclaracaoSubRotina_auxContext parteDeclaracaoSubRotina_aux() {
			return getRuleContext(ParteDeclaracaoSubRotina_auxContext.class,0);
		}
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public ParteDeclaracaoSubRotina_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parteDeclaracaoSubRotina_aux; }
	}

	public final ParteDeclaracaoSubRotina_auxContext parteDeclaracaoSubRotina_aux() throws RecognitionException {
		ParteDeclaracaoSubRotina_auxContext _localctx = new ParteDeclaracaoSubRotina_auxContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_parteDeclaracaoSubRotina_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PROCEDURE) {
				{
				setState(168);
				declaracaoProcedimento();
				setState(169);
				parteDeclaracaoSubRotina_aux();
				setState(170);
				match(PONTO_VIRGULA);
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
	public static class DeclaracaoProcedimentoContext extends ParserRuleContext {
		public TerminalNode PROCEDURE() { return getToken(LALGParser.PROCEDURE, 0); }
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public DeclaracaoProcedimento_auxContext declaracaoProcedimento_aux() {
			return getRuleContext(DeclaracaoProcedimento_auxContext.class,0);
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
		enterRule(_localctx, 40, RULE_declaracaoProcedimento);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			match(PROCEDURE);
			setState(175);
			match(ID);
			setState(176);
			declaracaoProcedimento_aux();
			setState(177);
			match(PONTO_VIRGULA);
			setState(178);
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
	public static class DeclaracaoProcedimento_auxContext extends ParserRuleContext {
		public ParametrosContext parametros() {
			return getRuleContext(ParametrosContext.class,0);
		}
		public DeclaracaoProcedimento_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracaoProcedimento_aux; }
	}

	public final DeclaracaoProcedimento_auxContext declaracaoProcedimento_aux() throws RecognitionException {
		DeclaracaoProcedimento_auxContext _localctx = new DeclaracaoProcedimento_auxContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_declaracaoProcedimento_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ABRE_PARENTESES) {
				{
				setState(180);
				parametros();
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
	public static class ParametrosContext extends ParserRuleContext {
		public TerminalNode ABRE_PARENTESES() { return getToken(LALGParser.ABRE_PARENTESES, 0); }
		public SecaoParametrosContext secaoParametros() {
			return getRuleContext(SecaoParametrosContext.class,0);
		}
		public Parametros_auxContext parametros_aux() {
			return getRuleContext(Parametros_auxContext.class,0);
		}
		public TerminalNode FECHA_PARENTESES() { return getToken(LALGParser.FECHA_PARENTESES, 0); }
		public ParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros; }
	}

	public final ParametrosContext parametros() throws RecognitionException {
		ParametrosContext _localctx = new ParametrosContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_parametros);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(ABRE_PARENTESES);
			setState(184);
			secaoParametros();
			setState(185);
			parametros_aux();
			setState(186);
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
	public static class Parametros_auxContext extends ParserRuleContext {
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public SecaoParametrosContext secaoParametros() {
			return getRuleContext(SecaoParametrosContext.class,0);
		}
		public Parametros_auxContext parametros_aux() {
			return getRuleContext(Parametros_auxContext.class,0);
		}
		public Parametros_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros_aux; }
	}

	public final Parametros_auxContext parametros_aux() throws RecognitionException {
		Parametros_auxContext _localctx = new Parametros_auxContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_parametros_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PONTO_VIRGULA) {
				{
				setState(188);
				match(PONTO_VIRGULA);
				setState(189);
				secaoParametros();
				setState(190);
				parametros_aux();
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
	public static class SecaoParametrosContext extends ParserRuleContext {
		public ListaIDContext listaID() {
			return getRuleContext(ListaIDContext.class,0);
		}
		public TerminalNode DOIS_PONTOS() { return getToken(LALGParser.DOIS_PONTOS, 0); }
		public SecaoParametrosFormais_auxContext secaoParametrosFormais_aux() {
			return getRuleContext(SecaoParametrosFormais_auxContext.class,0);
		}
		public TerminalNode VAR() { return getToken(LALGParser.VAR, 0); }
		public SecaoParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secaoParametros; }
	}

	public final SecaoParametrosContext secaoParametros() throws RecognitionException {
		SecaoParametrosContext _localctx = new SecaoParametrosContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_secaoParametros);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VAR) {
				{
				setState(194);
				match(VAR);
				}
			}

			setState(197);
			listaID();
			setState(198);
			match(DOIS_PONTOS);
			setState(199);
			secaoParametrosFormais_aux();
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
	public static class SecaoParametrosFormais_auxContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public SecaoParametrosFormais_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secaoParametrosFormais_aux; }
	}

	public final SecaoParametrosFormais_auxContext secaoParametrosFormais_aux() throws RecognitionException {
		SecaoParametrosFormais_auxContext _localctx = new SecaoParametrosFormais_auxContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_secaoParametrosFormais_aux);
		try {
			setState(203);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(201);
				match(ID);
				}
				break;
			case INT_TIPO:
			case FLOAT_TIPO:
			case BOOL_TIPO:
				enterOuterAlt(_localctx, 2);
				{
				setState(202);
				tipo();
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
	public static class ComandoCompostoContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(LALGParser.BEGIN, 0); }
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public ComandoComposto_auxContext comandoComposto_aux() {
			return getRuleContext(ComandoComposto_auxContext.class,0);
		}
		public TerminalNode END() { return getToken(LALGParser.END, 0); }
		public ComandoCompostoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandoComposto; }
	}

	public final ComandoCompostoContext comandoComposto() throws RecognitionException {
		ComandoCompostoContext _localctx = new ComandoCompostoContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_comandoComposto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			match(BEGIN);
			setState(206);
			comando();
			setState(207);
			comandoComposto_aux();
			setState(208);
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
	public static class ComandoComposto_auxContext extends ParserRuleContext {
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGParser.PONTO_VIRGULA, 0); }
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public ComandoComposto_auxContext comandoComposto_aux() {
			return getRuleContext(ComandoComposto_auxContext.class,0);
		}
		public ComandoComposto_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandoComposto_aux; }
	}

	public final ComandoComposto_auxContext comandoComposto_aux() throws RecognitionException {
		ComandoComposto_auxContext _localctx = new ComandoComposto_auxContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_comandoComposto_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PONTO_VIRGULA) {
				{
				setState(210);
				match(PONTO_VIRGULA);
				setState(211);
				comando();
				setState(212);
				comandoComposto_aux();
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
		enterRule(_localctx, 56, RULE_comando);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(216);
				atribuicao();
				}
				break;
			case 2:
				{
				setState(217);
				chamadaProcedimento();
				}
				break;
			case 3:
				{
				setState(218);
				comandoComposto();
				}
				break;
			case 4:
				{
				setState(219);
				comandoCondicional();
				}
				break;
			case 5:
				{
				setState(220);
				comandoRepetitivo();
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
		enterRule(_localctx, 58, RULE_atribuicao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			variavel();
			setState(224);
			match(ATRIBUICAO);
			setState(225);
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
		public ChamadaProcedimento_auxContext chamadaProcedimento_aux() {
			return getRuleContext(ChamadaProcedimento_auxContext.class,0);
		}
		public TerminalNode ID() { return getToken(LALGParser.ID, 0); }
		public TerminalNode READ() { return getToken(LALGParser.READ, 0); }
		public TerminalNode WRITE() { return getToken(LALGParser.WRITE, 0); }
		public ChamadaProcedimentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chamadaProcedimento; }
	}

	public final ChamadaProcedimentoContext chamadaProcedimento() throws RecognitionException {
		ChamadaProcedimentoContext _localctx = new ChamadaProcedimentoContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_chamadaProcedimento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877919232L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(228);
			chamadaProcedimento_aux();
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
	public static class ChamadaProcedimento_auxContext extends ParserRuleContext {
		public TerminalNode ABRE_PARENTESES() { return getToken(LALGParser.ABRE_PARENTESES, 0); }
		public ListaExpressaoContext listaExpressao() {
			return getRuleContext(ListaExpressaoContext.class,0);
		}
		public TerminalNode FECHA_PARENTESES() { return getToken(LALGParser.FECHA_PARENTESES, 0); }
		public ChamadaProcedimento_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chamadaProcedimento_aux; }
	}

	public final ChamadaProcedimento_auxContext chamadaProcedimento_aux() throws RecognitionException {
		ChamadaProcedimento_auxContext _localctx = new ChamadaProcedimento_auxContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_chamadaProcedimento_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ABRE_PARENTESES) {
				{
				setState(230);
				match(ABRE_PARENTESES);
				setState(231);
				listaExpressao();
				setState(232);
				match(FECHA_PARENTESES);
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
	public static class ComandoCondicionalContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(LALGParser.IF, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode THEN() { return getToken(LALGParser.THEN, 0); }
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public ComandoCondicional_auxContext comandoCondicional_aux() {
			return getRuleContext(ComandoCondicional_auxContext.class,0);
		}
		public ComandoCondicionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandoCondicional; }
	}

	public final ComandoCondicionalContext comandoCondicional() throws RecognitionException {
		ComandoCondicionalContext _localctx = new ComandoCondicionalContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_comandoCondicional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			match(IF);
			setState(237);
			expressao();
			setState(238);
			match(THEN);
			setState(239);
			comando();
			setState(240);
			comandoCondicional_aux();
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
	public static class ComandoCondicional_auxContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(LALGParser.ELSE, 0); }
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public ComandoCondicional_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandoCondicional_aux; }
	}

	public final ComandoCondicional_auxContext comandoCondicional_aux() throws RecognitionException {
		ComandoCondicional_auxContext _localctx = new ComandoCondicional_auxContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_comandoCondicional_aux);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(242);
				match(ELSE);
				setState(243);
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
		enterRule(_localctx, 68, RULE_comandoRepetitivo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			match(WHILE);
			setState(247);
			expressao();
			setState(248);
			match(DO);
			setState(249);
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
	public static class ListaExpressaoContext extends ParserRuleContext {
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public ListaExpressao_auxContext listaExpressao_aux() {
			return getRuleContext(ListaExpressao_auxContext.class,0);
		}
		public ListaExpressaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaExpressao; }
	}

	public final ListaExpressaoContext listaExpressao() throws RecognitionException {
		ListaExpressaoContext _localctx = new ListaExpressaoContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_listaExpressao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			expressao();
			setState(252);
			listaExpressao_aux();
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
	public static class ListaExpressao_auxContext extends ParserRuleContext {
		public TerminalNode VIRGULA() { return getToken(LALGParser.VIRGULA, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public ListaExpressao_auxContext listaExpressao_aux() {
			return getRuleContext(ListaExpressao_auxContext.class,0);
		}
		public ListaExpressao_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaExpressao_aux; }
	}

	public final ListaExpressao_auxContext listaExpressao_aux() throws RecognitionException {
		ListaExpressao_auxContext _localctx = new ListaExpressao_auxContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_listaExpressao_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VIRGULA) {
				{
				setState(254);
				match(VIRGULA);
				setState(255);
				expressao();
				setState(256);
				listaExpressao_aux();
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

	public static final String _serializedATN =
		"\u0004\u0001*\u0105\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"T\b\u0002\u0001\u0003\u0003\u0003W\b\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004`\b"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0003"+
		"\u0006g\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003"+
		"\u0007s\b\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0003\ty\b\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f"+
		"\u0003\f\u0084\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0003\u000e\u008e\b\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0004\u0010"+
		"\u0097\b\u0010\u000b\u0010\f\u0010\u0098\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0003\u0011\u009e\b\u0011\u0001\u0011\u0003\u0011\u00a1\b\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u00ad\b\u0013"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0015\u0003\u0015\u00b6\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0003\u0017\u00c1\b\u0017\u0001\u0018\u0003\u0018\u00c4\b\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0003"+
		"\u0019\u00cc\b\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u00d7"+
		"\b\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003"+
		"\u001c\u00de\b\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0003\u001f\u00eb\b\u001f\u0001 \u0001 \u0001 \u0001 \u0001 \u0001"+
		" \u0001!\u0001!\u0003!\u00f5\b!\u0001\"\u0001\"\u0001\"\u0001\"\u0001"+
		"\"\u0001#\u0001#\u0001#\u0001$\u0001$\u0001$\u0001$\u0003$\u0103\b$\u0001"+
		"$\u0000\u0000%\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFH\u0000\u0006\u0001\u0000"+
		"\'(\u0002\u0000\u0019\u0019$$\u0001\u0000\u0017\u0018\u0002\u0000\u0017"+
		"\u0018%%\u0001\u0000\t\u000b\u0002\u0000\f\r&&\u00fb\u0000J\u0001\u0000"+
		"\u0000\u0000\u0002L\u0001\u0000\u0000\u0000\u0004S\u0001\u0000\u0000\u0000"+
		"\u0006V\u0001\u0000\u0000\u0000\b_\u0001\u0000\u0000\u0000\na\u0001\u0000"+
		"\u0000\u0000\ff\u0001\u0000\u0000\u0000\u000er\u0001\u0000\u0000\u0000"+
		"\u0010t\u0001\u0000\u0000\u0000\u0012x\u0001\u0000\u0000\u0000\u0014z"+
		"\u0001\u0000\u0000\u0000\u0016}\u0001\u0000\u0000\u0000\u0018\u0083\u0001"+
		"\u0000\u0000\u0000\u001a\u0085\u0001\u0000\u0000\u0000\u001c\u008d\u0001"+
		"\u0000\u0000\u0000\u001e\u008f\u0001\u0000\u0000\u0000 \u0091\u0001\u0000"+
		"\u0000\u0000\"\u009d\u0001\u0000\u0000\u0000$\u00a4\u0001\u0000\u0000"+
		"\u0000&\u00ac\u0001\u0000\u0000\u0000(\u00ae\u0001\u0000\u0000\u0000*"+
		"\u00b5\u0001\u0000\u0000\u0000,\u00b7\u0001\u0000\u0000\u0000.\u00c0\u0001"+
		"\u0000\u0000\u00000\u00c3\u0001\u0000\u0000\u00002\u00cb\u0001\u0000\u0000"+
		"\u00004\u00cd\u0001\u0000\u0000\u00006\u00d6\u0001\u0000\u0000\u00008"+
		"\u00dd\u0001\u0000\u0000\u0000:\u00df\u0001\u0000\u0000\u0000<\u00e3\u0001"+
		"\u0000\u0000\u0000>\u00ea\u0001\u0000\u0000\u0000@\u00ec\u0001\u0000\u0000"+
		"\u0000B\u00f4\u0001\u0000\u0000\u0000D\u00f6\u0001\u0000\u0000\u0000F"+
		"\u00fb\u0001\u0000\u0000\u0000H\u0102\u0001\u0000\u0000\u0000JK\u0007"+
		"\u0000\u0000\u0000K\u0001\u0001\u0000\u0000\u0000LM\u0003\u000e\u0007"+
		"\u0000MN\u0003\u0004\u0002\u0000N\u0003\u0001\u0000\u0000\u0000OP\u0007"+
		"\u0001\u0000\u0000PQ\u0003\u000e\u0007\u0000QR\u0003\u0004\u0002\u0000"+
		"RT\u0001\u0000\u0000\u0000SO\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000"+
		"\u0000T\u0005\u0001\u0000\u0000\u0000UW\u0007\u0002\u0000\u0000VU\u0001"+
		"\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000"+
		"XY\u0003\u0002\u0001\u0000YZ\u0003\b\u0004\u0000Z\u0007\u0001\u0000\u0000"+
		"\u0000[\\\u0007\u0003\u0000\u0000\\]\u0003\u0002\u0001\u0000]^\u0003\b"+
		"\u0004\u0000^`\u0001\u0000\u0000\u0000_[\u0001\u0000\u0000\u0000_`\u0001"+
		"\u0000\u0000\u0000`\t\u0001\u0000\u0000\u0000ab\u0003\u0006\u0003\u0000"+
		"bc\u0003\f\u0006\u0000c\u000b\u0001\u0000\u0000\u0000de\u0005\u001b\u0000"+
		"\u0000eg\u0003\u0006\u0003\u0000fd\u0001\u0000\u0000\u0000fg\u0001\u0000"+
		"\u0000\u0000g\r\u0001\u0000\u0000\u0000hs\u0003\u0010\b\u0000is\u0003"+
		"\u0000\u0000\u0000jk\u0005\u001c\u0000\u0000kl\u0003\n\u0005\u0000lm\u0005"+
		"\u001d\u0000\u0000ms\u0001\u0000\u0000\u0000no\u0005\u0015\u0000\u0000"+
		"os\u0003\u000e\u0007\u0000ps\u0005\u000e\u0000\u0000qs\u0005\u000f\u0000"+
		"\u0000rh\u0001\u0000\u0000\u0000ri\u0001\u0000\u0000\u0000rj\u0001\u0000"+
		"\u0000\u0000rn\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000rq\u0001"+
		"\u0000\u0000\u0000s\u000f\u0001\u0000\u0000\u0000tu\u0005&\u0000\u0000"+
		"uv\u0003\u0012\t\u0000v\u0011\u0001\u0000\u0000\u0000wy\u0003\n\u0005"+
		"\u0000xw\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000y\u0013\u0001"+
		"\u0000\u0000\u0000z{\u0003\u001e\u000f\u0000{|\u0003\u0016\u000b\u0000"+
		"|\u0015\u0001\u0000\u0000\u0000}~\u0005&\u0000\u0000~\u007f\u0003\u0018"+
		"\f\u0000\u007f\u0017\u0001\u0000\u0000\u0000\u0080\u0081\u0005 \u0000"+
		"\u0000\u0081\u0082\u0005&\u0000\u0000\u0082\u0084\u0003\u0018\f\u0000"+
		"\u0083\u0080\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000"+
		"\u0084\u0019\u0001\u0000\u0000\u0000\u0085\u0086\u0003\u0014\n\u0000\u0086"+
		"\u0087\u0003\u001c\u000e\u0000\u0087\u0088\u0005!\u0000\u0000\u0088\u001b"+
		"\u0001\u0000\u0000\u0000\u0089\u008a\u0005!\u0000\u0000\u008a\u008b\u0003"+
		"\u0014\n\u0000\u008b\u008c\u0003\u001c\u000e\u0000\u008c\u008e\u0001\u0000"+
		"\u0000\u0000\u008d\u0089\u0001\u0000\u0000\u0000\u008d\u008e\u0001\u0000"+
		"\u0000\u0000\u008e\u001d\u0001\u0000\u0000\u0000\u008f\u0090\u0007\u0004"+
		"\u0000\u0000\u0090\u001f\u0001\u0000\u0000\u0000\u0091\u0092\u0005\u0004"+
		"\u0000\u0000\u0092\u0093\u0005&\u0000\u0000\u0093\u0094\u0005!\u0000\u0000"+
		"\u0094\u0096\u0003\"\u0011\u0000\u0095\u0097\u0005#\u0000\u0000\u0096"+
		"\u0095\u0001\u0000\u0000\u0000\u0097\u0098\u0001\u0000\u0000\u0000\u0098"+
		"\u0096\u0001\u0000\u0000\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099"+
		"\u009a\u0001\u0000\u0000\u0000\u009a\u009b\u0005\u0000\u0000\u0001\u009b"+
		"!\u0001\u0000\u0000\u0000\u009c\u009e\u0003\u001a\r\u0000\u009d\u009c"+
		"\u0001\u0000\u0000\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u00a0"+
		"\u0001\u0000\u0000\u0000\u009f\u00a1\u0003$\u0012\u0000\u00a0\u009f\u0001"+
		"\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000\u00a1\u00a2\u0001"+
		"\u0000\u0000\u0000\u00a2\u00a3\u00034\u001a\u0000\u00a3#\u0001\u0000\u0000"+
		"\u0000\u00a4\u00a5\u0003(\u0014\u0000\u00a5\u00a6\u0005!\u0000\u0000\u00a6"+
		"\u00a7\u0003&\u0013\u0000\u00a7%\u0001\u0000\u0000\u0000\u00a8\u00a9\u0003"+
		"(\u0014\u0000\u00a9\u00aa\u0003&\u0013\u0000\u00aa\u00ab\u0005!\u0000"+
		"\u0000\u00ab\u00ad\u0001\u0000\u0000\u0000\u00ac\u00a8\u0001\u0000\u0000"+
		"\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad\'\u0001\u0000\u0000\u0000"+
		"\u00ae\u00af\u0005\b\u0000\u0000\u00af\u00b0\u0005&\u0000\u0000\u00b0"+
		"\u00b1\u0003*\u0015\u0000\u00b1\u00b2\u0005!\u0000\u0000\u00b2\u00b3\u0003"+
		"\"\u0011\u0000\u00b3)\u0001\u0000\u0000\u0000\u00b4\u00b6\u0003,\u0016"+
		"\u0000\u00b5\u00b4\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000"+
		"\u0000\u00b6+\u0001\u0000\u0000\u0000\u00b7\u00b8\u0005\u001c\u0000\u0000"+
		"\u00b8\u00b9\u00030\u0018\u0000\u00b9\u00ba\u0003.\u0017\u0000\u00ba\u00bb"+
		"\u0005\u001d\u0000\u0000\u00bb-\u0001\u0000\u0000\u0000\u00bc\u00bd\u0005"+
		"!\u0000\u0000\u00bd\u00be\u00030\u0018\u0000\u00be\u00bf\u0003.\u0017"+
		"\u0000\u00bf\u00c1\u0001\u0000\u0000\u0000\u00c0\u00bc\u0001\u0000\u0000"+
		"\u0000\u00c0\u00c1\u0001\u0000\u0000\u0000\u00c1/\u0001\u0000\u0000\u0000"+
		"\u00c2\u00c4\u0005\u0007\u0000\u0000\u00c3\u00c2\u0001\u0000\u0000\u0000"+
		"\u00c3\u00c4\u0001\u0000\u0000\u0000\u00c4\u00c5\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c6\u0003\u0016\u000b\u0000\u00c6\u00c7\u0005\"\u0000\u0000\u00c7"+
		"\u00c8\u00032\u0019\u0000\u00c81\u0001\u0000\u0000\u0000\u00c9\u00cc\u0005"+
		"&\u0000\u0000\u00ca\u00cc\u0003\u001e\u000f\u0000\u00cb\u00c9\u0001\u0000"+
		"\u0000\u0000\u00cb\u00ca\u0001\u0000\u0000\u0000\u00cc3\u0001\u0000\u0000"+
		"\u0000\u00cd\u00ce\u0005\u0005\u0000\u0000\u00ce\u00cf\u00038\u001c\u0000"+
		"\u00cf\u00d0\u00036\u001b\u0000\u00d0\u00d1\u0005\u0006\u0000\u0000\u00d1"+
		"5\u0001\u0000\u0000\u0000\u00d2\u00d3\u0005!\u0000\u0000\u00d3\u00d4\u0003"+
		"8\u001c\u0000\u00d4\u00d5\u00036\u001b\u0000\u00d5\u00d7\u0001\u0000\u0000"+
		"\u0000\u00d6\u00d2\u0001\u0000\u0000\u0000\u00d6\u00d7\u0001\u0000\u0000"+
		"\u0000\u00d77\u0001\u0000\u0000\u0000\u00d8\u00de\u0003:\u001d\u0000\u00d9"+
		"\u00de\u0003<\u001e\u0000\u00da\u00de\u00034\u001a\u0000\u00db\u00de\u0003"+
		"@ \u0000\u00dc\u00de\u0003D\"\u0000\u00dd\u00d8\u0001\u0000\u0000\u0000"+
		"\u00dd\u00d9\u0001\u0000\u0000\u0000\u00dd\u00da\u0001\u0000\u0000\u0000"+
		"\u00dd\u00db\u0001\u0000\u0000\u0000\u00dd\u00dc\u0001\u0000\u0000\u0000"+
		"\u00de9\u0001\u0000\u0000\u0000\u00df\u00e0\u0003\u0010\b\u0000\u00e0"+
		"\u00e1\u0005\u0016\u0000\u0000\u00e1\u00e2\u0003\n\u0005\u0000\u00e2;"+
		"\u0001\u0000\u0000\u0000\u00e3\u00e4\u0007\u0005\u0000\u0000\u00e4\u00e5"+
		"\u0003>\u001f\u0000\u00e5=\u0001\u0000\u0000\u0000\u00e6\u00e7\u0005\u001c"+
		"\u0000\u0000\u00e7\u00e8\u0003F#\u0000\u00e8\u00e9\u0005\u001d\u0000\u0000"+
		"\u00e9\u00eb\u0001\u0000\u0000\u0000\u00ea\u00e6\u0001\u0000\u0000\u0000"+
		"\u00ea\u00eb\u0001\u0000\u0000\u0000\u00eb?\u0001\u0000\u0000\u0000\u00ec"+
		"\u00ed\u0005\u0010\u0000\u0000\u00ed\u00ee\u0003\n\u0005\u0000\u00ee\u00ef"+
		"\u0005\u0011\u0000\u0000\u00ef\u00f0\u00038\u001c\u0000\u00f0\u00f1\u0003"+
		"B!\u0000\u00f1A\u0001\u0000\u0000\u0000\u00f2\u00f3\u0005\u0012\u0000"+
		"\u0000\u00f3\u00f5\u00038\u001c\u0000\u00f4\u00f2\u0001\u0000\u0000\u0000"+
		"\u00f4\u00f5\u0001\u0000\u0000\u0000\u00f5C\u0001\u0000\u0000\u0000\u00f6"+
		"\u00f7\u0005\u0013\u0000\u0000\u00f7\u00f8\u0003\n\u0005\u0000\u00f8\u00f9"+
		"\u0005\u0014\u0000\u0000\u00f9\u00fa\u00038\u001c\u0000\u00faE\u0001\u0000"+
		"\u0000\u0000\u00fb\u00fc\u0003\n\u0005\u0000\u00fc\u00fd\u0003H$\u0000"+
		"\u00fdG\u0001\u0000\u0000\u0000\u00fe\u00ff\u0005 \u0000\u0000\u00ff\u0100"+
		"\u0003\n\u0005\u0000\u0100\u0101\u0003H$\u0000\u0101\u0103\u0001\u0000"+
		"\u0000\u0000\u0102\u00fe\u0001\u0000\u0000\u0000\u0102\u0103\u0001\u0000"+
		"\u0000\u0000\u0103I\u0001\u0000\u0000\u0000\u0015SV_frx\u0083\u008d\u0098"+
		"\u009d\u00a0\u00ac\u00b5\u00c0\u00c3\u00cb\u00d6\u00dd\u00ea\u00f4\u0102";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}