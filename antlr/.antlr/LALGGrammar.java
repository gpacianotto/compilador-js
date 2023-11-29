// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALGGrammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class LALGGrammar extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMENTARIO=1, COMENTARIO_MULTI=2, WS=3, PROGRAM=4, BEGIN=5, END=6, VAR=7, 
		PROCEDURE=8, INT_TIPO=9, FLOAT_TIPO=10, BOOL_TIPO=11, READ=12, WRITE=13, 
		TRUE_CONST=14, FALSE_CONST=15, IF=16, THEN=17, ELSE=18, WHILE=19, DO=20, 
		NOT=21, ATRIBUICAO=22, MAIS=23, MENOS=24, MULT=25, DIV=26, DIV_INT=27, 
		IGUAL=28, DIFERENTE=29, MAIOR_IGUAL=30, MENOR_IGUAL=31, MAIOR=32, MENOR=33, 
		ABRE_PARENTESES=34, FECHA_PARENTESES=35, ABRE_COLCHETES=36, FECHA_COLCHETES=37, 
		VIRGULA=38, PONTO_VIRGULA=39, DOIS_PONTOS=40, PONTO=41, AND=42, OR=43, 
		ID=44, INT=45, FLOAT=46, INVALID_TOKEN=47, INVALID=48;
	public static final int
		RULE_numero = 0, RULE_termo = 1, RULE_termo_aux = 2, RULE_expressaoSimples = 3, 
		RULE_expressaoSimples_aux = 4, RULE_expressao = 5, RULE_expressao_aux = 6, 
		RULE_relacao = 7, RULE_fator = 8, RULE_variavel = 9, RULE_variavel_aux = 10, 
		RULE_declaracaoVariavel = 11, RULE_listaID = 12, RULE_listaID_aux = 13, 
		RULE_parteDeclaracaoVariavel = 14, RULE_parteDeclaracaoVariavel_aux = 15, 
		RULE_tipo = 16, RULE_programa = 17, RULE_bloco = 18, RULE_parteDeclaracaoSubRotina = 19, 
		RULE_parteDeclaracaoSubRotina_aux = 20, RULE_declaracaoProcedimento = 21, 
		RULE_declaracaoProcedimento_aux = 22, RULE_parametros = 23, RULE_parametros_aux = 24, 
		RULE_secaoParametros = 25, RULE_secaoParametros_aux = 26, RULE_comandoComposto = 27, 
		RULE_comandoComposto_aux = 28, RULE_comando = 29, RULE_atribuicao = 30, 
		RULE_chamadaProcedimento = 31, RULE_chamadaProcedimento_aux = 32, RULE_comandoCondicional = 33, 
		RULE_comandoCondicional_aux = 34, RULE_comandoRepetitivo = 35, RULE_listaExpressao = 36, 
		RULE_listaExpressao_aux = 37;
	private static String[] makeRuleNames() {
		return new String[] {
			"numero", "termo", "termo_aux", "expressaoSimples", "expressaoSimples_aux", 
			"expressao", "expressao_aux", "relacao", "fator", "variavel", "variavel_aux", 
			"declaracaoVariavel", "listaID", "listaID_aux", "parteDeclaracaoVariavel", 
			"parteDeclaracaoVariavel_aux", "tipo", "programa", "bloco", "parteDeclaracaoSubRotina", 
			"parteDeclaracaoSubRotina_aux", "declaracaoProcedimento", "declaracaoProcedimento_aux", 
			"parametros", "parametros_aux", "secaoParametros", "secaoParametros_aux", 
			"comandoComposto", "comandoComposto_aux", "comando", "atribuicao", "chamadaProcedimento", 
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
			"'-'", "'*'", "'/'", "'div'", "'='", "'<>'", "'>='", "'<='", "'>'", "'<'", 
			"'('", "')'", "'['", "']'", "','", "';'", "':'", "'.'", "'and'", "'or'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", 
			"VAR", "PROCEDURE", "INT_TIPO", "FLOAT_TIPO", "BOOL_TIPO", "READ", "WRITE", 
			"TRUE_CONST", "FALSE_CONST", "IF", "THEN", "ELSE", "WHILE", "DO", "NOT", 
			"ATRIBUICAO", "MAIS", "MENOS", "MULT", "DIV", "DIV_INT", "IGUAL", "DIFERENTE", 
			"MAIOR_IGUAL", "MENOR_IGUAL", "MAIOR", "MENOR", "ABRE_PARENTESES", "FECHA_PARENTESES", 
			"ABRE_COLCHETES", "FECHA_COLCHETES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", 
			"PONTO", "AND", "OR", "ID", "INT", "FLOAT", "INVALID_TOKEN", "INVALID"
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
	public String getGrammarFileName() { return "LALGGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LALGGrammar(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(LALGGrammar.INT, 0); }
		public TerminalNode FLOAT() { return getToken(LALGGrammar.FLOAT, 0); }
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
			setState(76);
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
			setState(78);
			fator();
			setState(79);
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
		public TerminalNode MULT() { return getToken(LALGGrammar.MULT, 0); }
		public TerminalNode AND() { return getToken(LALGGrammar.AND, 0); }
		public TerminalNode DIV_INT() { return getToken(LALGGrammar.DIV_INT, 0); }
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
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4398214283264L) != 0)) {
				{
				setState(81);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4398214283264L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(82);
				fator();
				setState(83);
				termo_aux();
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
		public TermoContext termo() {
			return getRuleContext(TermoContext.class,0);
		}
		public ExpressaoSimples_auxContext expressaoSimples_aux() {
			return getRuleContext(ExpressaoSimples_auxContext.class,0);
		}
		public TerminalNode MAIS() { return getToken(LALGGrammar.MAIS, 0); }
		public TerminalNode MENOS() { return getToken(LALGGrammar.MENOS, 0); }
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
			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MAIS || _la==MENOS) {
				{
				setState(87);
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

			setState(90);
			termo();
			setState(91);
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
		public TerminalNode MAIS() { return getToken(LALGGrammar.MAIS, 0); }
		public TerminalNode MENOS() { return getToken(LALGGrammar.MENOS, 0); }
		public TerminalNode OR() { return getToken(LALGGrammar.OR, 0); }
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
			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8796118188032L) != 0)) {
				{
				setState(93);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8796118188032L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(94);
				termo();
				setState(95);
				expressaoSimples_aux();
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
	public static class ExpressaoContext extends ParserRuleContext {
		public ExpressaoSimplesContext expressaoSimples() {
			return getRuleContext(ExpressaoSimplesContext.class,0);
		}
		public Expressao_auxContext expressao_aux() {
			return getRuleContext(Expressao_auxContext.class,0);
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
			setState(99);
			expressaoSimples();
			setState(100);
			expressao_aux();
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
	public static class Expressao_auxContext extends ParserRuleContext {
		public RelacaoContext relacao() {
			return getRuleContext(RelacaoContext.class,0);
		}
		public ExpressaoSimplesContext expressaoSimples() {
			return getRuleContext(ExpressaoSimplesContext.class,0);
		}
		public Expressao_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressao_aux; }
	}

	public final Expressao_auxContext expressao_aux() throws RecognitionException {
		Expressao_auxContext _localctx = new Expressao_auxContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_expressao_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16911433728L) != 0)) {
				{
				setState(102);
				relacao();
				setState(103);
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
	public static class RelacaoContext extends ParserRuleContext {
		public TerminalNode IGUAL() { return getToken(LALGGrammar.IGUAL, 0); }
		public TerminalNode MENOR() { return getToken(LALGGrammar.MENOR, 0); }
		public TerminalNode MAIOR() { return getToken(LALGGrammar.MAIOR, 0); }
		public TerminalNode MENOR_IGUAL() { return getToken(LALGGrammar.MENOR_IGUAL, 0); }
		public TerminalNode MAIOR_IGUAL() { return getToken(LALGGrammar.MAIOR_IGUAL, 0); }
		public TerminalNode DIFERENTE() { return getToken(LALGGrammar.DIFERENTE, 0); }
		public RelacaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relacao; }
	}

	public final RelacaoContext relacao() throws RecognitionException {
		RelacaoContext _localctx = new RelacaoContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_relacao);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 16911433728L) != 0)) ) {
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
	public static class FatorContext extends ParserRuleContext {
		public VariavelContext variavel() {
			return getRuleContext(VariavelContext.class,0);
		}
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public TerminalNode TRUE_CONST() { return getToken(LALGGrammar.TRUE_CONST, 0); }
		public TerminalNode FALSE_CONST() { return getToken(LALGGrammar.FALSE_CONST, 0); }
		public TerminalNode ABRE_PARENTESES() { return getToken(LALGGrammar.ABRE_PARENTESES, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode FECHA_PARENTESES() { return getToken(LALGGrammar.FECHA_PARENTESES, 0); }
		public TerminalNode NOT() { return getToken(LALGGrammar.NOT, 0); }
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
		enterRule(_localctx, 16, RULE_fator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(109);
				variavel();
				}
				break;
			case INT:
			case FLOAT:
				{
				setState(110);
				numero();
				}
				break;
			case ABRE_PARENTESES:
				{
				{
				setState(111);
				match(ABRE_PARENTESES);
				setState(112);
				expressao();
				setState(113);
				match(FECHA_PARENTESES);
				}
				}
				break;
			case NOT:
				{
				{
				setState(115);
				match(NOT);
				setState(116);
				fator();
				}
				}
				break;
			case TRUE_CONST:
				{
				setState(117);
				match(TRUE_CONST);
				}
				break;
			case FALSE_CONST:
				{
				setState(118);
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
		public TerminalNode ID() { return getToken(LALGGrammar.ID, 0); }
		public VariavelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variavel; }
	}

	public final VariavelContext variavel() throws RecognitionException {
		VariavelContext _localctx = new VariavelContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_variavel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
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
	public static class Variavel_auxContext extends ParserRuleContext {
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public Variavel_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variavel_aux; }
	}

	public final Variavel_auxContext variavel_aux() throws RecognitionException {
		Variavel_auxContext _localctx = new Variavel_auxContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_variavel_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 123162509492224L) != 0)) {
				{
				setState(123);
				expressao();
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
		enterRule(_localctx, 22, RULE_declaracaoVariavel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			tipo();
			setState(127);
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
		public TerminalNode ID() { return getToken(LALGGrammar.ID, 0); }
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
		enterRule(_localctx, 24, RULE_listaID);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			match(ID);
			setState(130);
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
		public TerminalNode VIRGULA() { return getToken(LALGGrammar.VIRGULA, 0); }
		public TerminalNode ID() { return getToken(LALGGrammar.ID, 0); }
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
		enterRule(_localctx, 26, RULE_listaID_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VIRGULA) {
				{
				setState(132);
				match(VIRGULA);
				setState(133);
				match(ID);
				setState(134);
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
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGGrammar.PONTO_VIRGULA, 0); }
		public ParteDeclaracaoVariavelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parteDeclaracaoVariavel; }
	}

	public final ParteDeclaracaoVariavelContext parteDeclaracaoVariavel() throws RecognitionException {
		ParteDeclaracaoVariavelContext _localctx = new ParteDeclaracaoVariavelContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_parteDeclaracaoVariavel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			declaracaoVariavel();
			setState(138);
			parteDeclaracaoVariavel_aux();
			setState(139);
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
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGGrammar.PONTO_VIRGULA, 0); }
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
		enterRule(_localctx, 30, RULE_parteDeclaracaoVariavel_aux);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(141);
				match(PONTO_VIRGULA);
				setState(142);
				declaracaoVariavel();
				setState(143);
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
		public TerminalNode BOOL_TIPO() { return getToken(LALGGrammar.BOOL_TIPO, 0); }
		public TerminalNode INT_TIPO() { return getToken(LALGGrammar.INT_TIPO, 0); }
		public TipoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo; }
	}

	public final TipoContext tipo() throws RecognitionException {
		TipoContext _localctx = new TipoContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_tipo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			_la = _input.LA(1);
			if ( !(_la==INT_TIPO || _la==BOOL_TIPO) ) {
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
		public TerminalNode PROGRAM() { return getToken(LALGGrammar.PROGRAM, 0); }
		public TerminalNode ID() { return getToken(LALGGrammar.ID, 0); }
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGGrammar.PONTO_VIRGULA, 0); }
		public BlocoContext bloco() {
			return getRuleContext(BlocoContext.class,0);
		}
		public TerminalNode EOF() { return getToken(LALGGrammar.EOF, 0); }
		public List<TerminalNode> PONTO() { return getTokens(LALGGrammar.PONTO); }
		public TerminalNode PONTO(int i) {
			return getToken(LALGGrammar.PONTO, i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(PROGRAM);
			setState(150);
			match(ID);
			setState(151);
			match(PONTO_VIRGULA);
			setState(152);
			bloco();
			setState(154); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(153);
				match(PONTO);
				}
				}
				setState(156); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==PONTO );
			setState(158);
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
		enterRule(_localctx, 36, RULE_bloco);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INT_TIPO || _la==BOOL_TIPO) {
				{
				setState(160);
				parteDeclaracaoVariavel();
				}
			}

			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PROCEDURE) {
				{
				setState(163);
				parteDeclaracaoSubRotina();
				}
			}

			setState(166);
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
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGGrammar.PONTO_VIRGULA, 0); }
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
		enterRule(_localctx, 38, RULE_parteDeclaracaoSubRotina);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			declaracaoProcedimento();
			setState(169);
			match(PONTO_VIRGULA);
			setState(170);
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
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGGrammar.PONTO_VIRGULA, 0); }
		public ParteDeclaracaoSubRotina_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parteDeclaracaoSubRotina_aux; }
	}

	public final ParteDeclaracaoSubRotina_auxContext parteDeclaracaoSubRotina_aux() throws RecognitionException {
		ParteDeclaracaoSubRotina_auxContext _localctx = new ParteDeclaracaoSubRotina_auxContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_parteDeclaracaoSubRotina_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PROCEDURE) {
				{
				setState(172);
				declaracaoProcedimento();
				setState(173);
				parteDeclaracaoSubRotina_aux();
				setState(174);
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
		public TerminalNode PROCEDURE() { return getToken(LALGGrammar.PROCEDURE, 0); }
		public TerminalNode ID() { return getToken(LALGGrammar.ID, 0); }
		public DeclaracaoProcedimento_auxContext declaracaoProcedimento_aux() {
			return getRuleContext(DeclaracaoProcedimento_auxContext.class,0);
		}
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGGrammar.PONTO_VIRGULA, 0); }
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
		enterRule(_localctx, 42, RULE_declaracaoProcedimento);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(PROCEDURE);
			setState(179);
			match(ID);
			setState(180);
			declaracaoProcedimento_aux();
			setState(181);
			match(PONTO_VIRGULA);
			setState(182);
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
		enterRule(_localctx, 44, RULE_declaracaoProcedimento_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ABRE_PARENTESES) {
				{
				setState(184);
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
		public TerminalNode ABRE_PARENTESES() { return getToken(LALGGrammar.ABRE_PARENTESES, 0); }
		public SecaoParametrosContext secaoParametros() {
			return getRuleContext(SecaoParametrosContext.class,0);
		}
		public Parametros_auxContext parametros_aux() {
			return getRuleContext(Parametros_auxContext.class,0);
		}
		public TerminalNode FECHA_PARENTESES() { return getToken(LALGGrammar.FECHA_PARENTESES, 0); }
		public ParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros; }
	}

	public final ParametrosContext parametros() throws RecognitionException {
		ParametrosContext _localctx = new ParametrosContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_parametros);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			match(ABRE_PARENTESES);
			setState(188);
			secaoParametros();
			setState(189);
			parametros_aux();
			setState(190);
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
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGGrammar.PONTO_VIRGULA, 0); }
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
		enterRule(_localctx, 48, RULE_parametros_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PONTO_VIRGULA) {
				{
				setState(192);
				match(PONTO_VIRGULA);
				setState(193);
				secaoParametros();
				setState(194);
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
		public TerminalNode DOIS_PONTOS() { return getToken(LALGGrammar.DOIS_PONTOS, 0); }
		public SecaoParametros_auxContext secaoParametros_aux() {
			return getRuleContext(SecaoParametros_auxContext.class,0);
		}
		public TerminalNode VAR() { return getToken(LALGGrammar.VAR, 0); }
		public SecaoParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secaoParametros; }
	}

	public final SecaoParametrosContext secaoParametros() throws RecognitionException {
		SecaoParametrosContext _localctx = new SecaoParametrosContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_secaoParametros);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VAR) {
				{
				setState(198);
				match(VAR);
				}
			}

			setState(201);
			listaID();
			setState(202);
			match(DOIS_PONTOS);
			setState(203);
			secaoParametros_aux();
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
	public static class SecaoParametros_auxContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(LALGGrammar.ID, 0); }
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public SecaoParametros_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secaoParametros_aux; }
	}

	public final SecaoParametros_auxContext secaoParametros_aux() throws RecognitionException {
		SecaoParametros_auxContext _localctx = new SecaoParametros_auxContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_secaoParametros_aux);
		try {
			setState(207);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(205);
				match(ID);
				}
				break;
			case INT_TIPO:
			case BOOL_TIPO:
				enterOuterAlt(_localctx, 2);
				{
				setState(206);
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
		public TerminalNode BEGIN() { return getToken(LALGGrammar.BEGIN, 0); }
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public ComandoComposto_auxContext comandoComposto_aux() {
			return getRuleContext(ComandoComposto_auxContext.class,0);
		}
		public TerminalNode END() { return getToken(LALGGrammar.END, 0); }
		public ComandoCompostoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comandoComposto; }
	}

	public final ComandoCompostoContext comandoComposto() throws RecognitionException {
		ComandoCompostoContext _localctx = new ComandoCompostoContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_comandoComposto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(BEGIN);
			setState(210);
			comando();
			setState(211);
			comandoComposto_aux();
			setState(212);
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
		public TerminalNode PONTO_VIRGULA() { return getToken(LALGGrammar.PONTO_VIRGULA, 0); }
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
		enterRule(_localctx, 56, RULE_comandoComposto_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PONTO_VIRGULA) {
				{
				setState(214);
				match(PONTO_VIRGULA);
				setState(215);
				comando();
				setState(216);
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
		enterRule(_localctx, 58, RULE_comando);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(220);
				atribuicao();
				}
				break;
			case 2:
				{
				setState(221);
				chamadaProcedimento();
				}
				break;
			case 3:
				{
				setState(222);
				comandoComposto();
				}
				break;
			case 4:
				{
				setState(223);
				comandoCondicional();
				}
				break;
			case 5:
				{
				setState(224);
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
		public TerminalNode ATRIBUICAO() { return getToken(LALGGrammar.ATRIBUICAO, 0); }
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
		enterRule(_localctx, 60, RULE_atribuicao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			variavel();
			setState(228);
			match(ATRIBUICAO);
			setState(229);
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
		public TerminalNode ID() { return getToken(LALGGrammar.ID, 0); }
		public TerminalNode READ() { return getToken(LALGGrammar.READ, 0); }
		public TerminalNode WRITE() { return getToken(LALGGrammar.WRITE, 0); }
		public ChamadaProcedimentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chamadaProcedimento; }
	}

	public final ChamadaProcedimentoContext chamadaProcedimento() throws RecognitionException {
		ChamadaProcedimentoContext _localctx = new ChamadaProcedimentoContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_chamadaProcedimento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(231);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 17592186056704L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(232);
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
		public TerminalNode ABRE_PARENTESES() { return getToken(LALGGrammar.ABRE_PARENTESES, 0); }
		public ListaExpressaoContext listaExpressao() {
			return getRuleContext(ListaExpressaoContext.class,0);
		}
		public TerminalNode FECHA_PARENTESES() { return getToken(LALGGrammar.FECHA_PARENTESES, 0); }
		public ChamadaProcedimento_auxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chamadaProcedimento_aux; }
	}

	public final ChamadaProcedimento_auxContext chamadaProcedimento_aux() throws RecognitionException {
		ChamadaProcedimento_auxContext _localctx = new ChamadaProcedimento_auxContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_chamadaProcedimento_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ABRE_PARENTESES) {
				{
				setState(234);
				match(ABRE_PARENTESES);
				setState(235);
				listaExpressao();
				setState(236);
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
		public TerminalNode IF() { return getToken(LALGGrammar.IF, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode THEN() { return getToken(LALGGrammar.THEN, 0); }
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
		enterRule(_localctx, 66, RULE_comandoCondicional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(IF);
			setState(241);
			expressao();
			setState(242);
			match(THEN);
			setState(243);
			comando();
			setState(244);
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
		public TerminalNode ELSE() { return getToken(LALGGrammar.ELSE, 0); }
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
		enterRule(_localctx, 68, RULE_comandoCondicional_aux);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(246);
				match(ELSE);
				setState(247);
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
		public TerminalNode WHILE() { return getToken(LALGGrammar.WHILE, 0); }
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public TerminalNode DO() { return getToken(LALGGrammar.DO, 0); }
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
		enterRule(_localctx, 70, RULE_comandoRepetitivo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			match(WHILE);
			setState(251);
			expressao();
			setState(252);
			match(DO);
			setState(253);
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
		enterRule(_localctx, 72, RULE_listaExpressao);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			expressao();
			setState(256);
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
		public TerminalNode VIRGULA() { return getToken(LALGGrammar.VIRGULA, 0); }
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
		enterRule(_localctx, 74, RULE_listaExpressao_aux);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VIRGULA) {
				{
				setState(258);
				match(VIRGULA);
				setState(259);
				expressao();
				setState(260);
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
		"\u0004\u00010\u0109\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u0002V\b\u0002\u0001\u0003\u0003\u0003Y\b\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003"+
		"\u0004b\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0003\u0006j\b\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0003\bx\b\b\u0001\t\u0001\t\u0001\n\u0003\n}\b\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0003"+
		"\r\u0088\b\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u0092\b\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0004\u0011\u009b\b\u0011\u000b\u0011\f\u0011\u009c\u0001\u0011\u0001"+
		"\u0011\u0001\u0012\u0003\u0012\u00a2\b\u0012\u0001\u0012\u0003\u0012\u00a5"+
		"\b\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0003\u0014\u00b1"+
		"\b\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0016\u0003\u0016\u00ba\b\u0016\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0003\u0018\u00c5\b\u0018\u0001\u0019\u0003\u0019\u00c8\b\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a"+
		"\u0003\u001a\u00d0\b\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c"+
		"\u00db\b\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0003\u001d\u00e2\b\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001f\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001 \u0001 \u0003"+
		" \u00ef\b \u0001!\u0001!\u0001!\u0001!\u0001!\u0001!\u0001\"\u0001\"\u0003"+
		"\"\u00f9\b\"\u0001#\u0001#\u0001#\u0001#\u0001#\u0001$\u0001$\u0001$\u0001"+
		"%\u0001%\u0001%\u0001%\u0003%\u0107\b%\u0001%\u0000\u0000&\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e"+
		" \"$&(*,.02468:<>@BDFHJ\u0000\u0007\u0001\u0000-.\u0003\u0000\u0019\u0019"+
		"\u001b\u001b**\u0001\u0000\u0017\u0018\u0002\u0000\u0017\u0018++\u0001"+
		"\u0000\u001c!\u0002\u0000\t\t\u000b\u000b\u0002\u0000\f\r,,\u00fe\u0000"+
		"L\u0001\u0000\u0000\u0000\u0002N\u0001\u0000\u0000\u0000\u0004U\u0001"+
		"\u0000\u0000\u0000\u0006X\u0001\u0000\u0000\u0000\ba\u0001\u0000\u0000"+
		"\u0000\nc\u0001\u0000\u0000\u0000\fi\u0001\u0000\u0000\u0000\u000ek\u0001"+
		"\u0000\u0000\u0000\u0010w\u0001\u0000\u0000\u0000\u0012y\u0001\u0000\u0000"+
		"\u0000\u0014|\u0001\u0000\u0000\u0000\u0016~\u0001\u0000\u0000\u0000\u0018"+
		"\u0081\u0001\u0000\u0000\u0000\u001a\u0087\u0001\u0000\u0000\u0000\u001c"+
		"\u0089\u0001\u0000\u0000\u0000\u001e\u0091\u0001\u0000\u0000\u0000 \u0093"+
		"\u0001\u0000\u0000\u0000\"\u0095\u0001\u0000\u0000\u0000$\u00a1\u0001"+
		"\u0000\u0000\u0000&\u00a8\u0001\u0000\u0000\u0000(\u00b0\u0001\u0000\u0000"+
		"\u0000*\u00b2\u0001\u0000\u0000\u0000,\u00b9\u0001\u0000\u0000\u0000."+
		"\u00bb\u0001\u0000\u0000\u00000\u00c4\u0001\u0000\u0000\u00002\u00c7\u0001"+
		"\u0000\u0000\u00004\u00cf\u0001\u0000\u0000\u00006\u00d1\u0001\u0000\u0000"+
		"\u00008\u00da\u0001\u0000\u0000\u0000:\u00e1\u0001\u0000\u0000\u0000<"+
		"\u00e3\u0001\u0000\u0000\u0000>\u00e7\u0001\u0000\u0000\u0000@\u00ee\u0001"+
		"\u0000\u0000\u0000B\u00f0\u0001\u0000\u0000\u0000D\u00f8\u0001\u0000\u0000"+
		"\u0000F\u00fa\u0001\u0000\u0000\u0000H\u00ff\u0001\u0000\u0000\u0000J"+
		"\u0106\u0001\u0000\u0000\u0000LM\u0007\u0000\u0000\u0000M\u0001\u0001"+
		"\u0000\u0000\u0000NO\u0003\u0010\b\u0000OP\u0003\u0004\u0002\u0000P\u0003"+
		"\u0001\u0000\u0000\u0000QR\u0007\u0001\u0000\u0000RS\u0003\u0010\b\u0000"+
		"ST\u0003\u0004\u0002\u0000TV\u0001\u0000\u0000\u0000UQ\u0001\u0000\u0000"+
		"\u0000UV\u0001\u0000\u0000\u0000V\u0005\u0001\u0000\u0000\u0000WY\u0007"+
		"\u0002\u0000\u0000XW\u0001\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000"+
		"YZ\u0001\u0000\u0000\u0000Z[\u0003\u0002\u0001\u0000[\\\u0003\b\u0004"+
		"\u0000\\\u0007\u0001\u0000\u0000\u0000]^\u0007\u0003\u0000\u0000^_\u0003"+
		"\u0002\u0001\u0000_`\u0003\b\u0004\u0000`b\u0001\u0000\u0000\u0000a]\u0001"+
		"\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000b\t\u0001\u0000\u0000\u0000"+
		"cd\u0003\u0006\u0003\u0000de\u0003\f\u0006\u0000e\u000b\u0001\u0000\u0000"+
		"\u0000fg\u0003\u000e\u0007\u0000gh\u0003\u0006\u0003\u0000hj\u0001\u0000"+
		"\u0000\u0000if\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000j\r\u0001"+
		"\u0000\u0000\u0000kl\u0007\u0004\u0000\u0000l\u000f\u0001\u0000\u0000"+
		"\u0000mx\u0003\u0012\t\u0000nx\u0003\u0000\u0000\u0000op\u0005\"\u0000"+
		"\u0000pq\u0003\n\u0005\u0000qr\u0005#\u0000\u0000rx\u0001\u0000\u0000"+
		"\u0000st\u0005\u0015\u0000\u0000tx\u0003\u0010\b\u0000ux\u0005\u000e\u0000"+
		"\u0000vx\u0005\u000f\u0000\u0000wm\u0001\u0000\u0000\u0000wn\u0001\u0000"+
		"\u0000\u0000wo\u0001\u0000\u0000\u0000ws\u0001\u0000\u0000\u0000wu\u0001"+
		"\u0000\u0000\u0000wv\u0001\u0000\u0000\u0000x\u0011\u0001\u0000\u0000"+
		"\u0000yz\u0005,\u0000\u0000z\u0013\u0001\u0000\u0000\u0000{}\u0003\n\u0005"+
		"\u0000|{\u0001\u0000\u0000\u0000|}\u0001\u0000\u0000\u0000}\u0015\u0001"+
		"\u0000\u0000\u0000~\u007f\u0003 \u0010\u0000\u007f\u0080\u0003\u0018\f"+
		"\u0000\u0080\u0017\u0001\u0000\u0000\u0000\u0081\u0082\u0005,\u0000\u0000"+
		"\u0082\u0083\u0003\u001a\r\u0000\u0083\u0019\u0001\u0000\u0000\u0000\u0084"+
		"\u0085\u0005&\u0000\u0000\u0085\u0086\u0005,\u0000\u0000\u0086\u0088\u0003"+
		"\u001a\r\u0000\u0087\u0084\u0001\u0000\u0000\u0000\u0087\u0088\u0001\u0000"+
		"\u0000\u0000\u0088\u001b\u0001\u0000\u0000\u0000\u0089\u008a\u0003\u0016"+
		"\u000b\u0000\u008a\u008b\u0003\u001e\u000f\u0000\u008b\u008c\u0005\'\u0000"+
		"\u0000\u008c\u001d\u0001\u0000\u0000\u0000\u008d\u008e\u0005\'\u0000\u0000"+
		"\u008e\u008f\u0003\u0016\u000b\u0000\u008f\u0090\u0003\u001e\u000f\u0000"+
		"\u0090\u0092\u0001\u0000\u0000\u0000\u0091\u008d\u0001\u0000\u0000\u0000"+
		"\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u001f\u0001\u0000\u0000\u0000"+
		"\u0093\u0094\u0007\u0005\u0000\u0000\u0094!\u0001\u0000\u0000\u0000\u0095"+
		"\u0096\u0005\u0004\u0000\u0000\u0096\u0097\u0005,\u0000\u0000\u0097\u0098"+
		"\u0005\'\u0000\u0000\u0098\u009a\u0003$\u0012\u0000\u0099\u009b\u0005"+
		")\u0000\u0000\u009a\u0099\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000"+
		"\u0000\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000"+
		"\u0000\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u009f\u0005\u0000"+
		"\u0000\u0001\u009f#\u0001\u0000\u0000\u0000\u00a0\u00a2\u0003\u001c\u000e"+
		"\u0000\u00a1\u00a0\u0001\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000"+
		"\u0000\u00a2\u00a4\u0001\u0000\u0000\u0000\u00a3\u00a5\u0003&\u0013\u0000"+
		"\u00a4\u00a3\u0001\u0000\u0000\u0000\u00a4\u00a5\u0001\u0000\u0000\u0000"+
		"\u00a5\u00a6\u0001\u0000\u0000\u0000\u00a6\u00a7\u00036\u001b\u0000\u00a7"+
		"%\u0001\u0000\u0000\u0000\u00a8\u00a9\u0003*\u0015\u0000\u00a9\u00aa\u0005"+
		"\'\u0000\u0000\u00aa\u00ab\u0003(\u0014\u0000\u00ab\'\u0001\u0000\u0000"+
		"\u0000\u00ac\u00ad\u0003*\u0015\u0000\u00ad\u00ae\u0003(\u0014\u0000\u00ae"+
		"\u00af\u0005\'\u0000\u0000\u00af\u00b1\u0001\u0000\u0000\u0000\u00b0\u00ac"+
		"\u0001\u0000\u0000\u0000\u00b0\u00b1\u0001\u0000\u0000\u0000\u00b1)\u0001"+
		"\u0000\u0000\u0000\u00b2\u00b3\u0005\b\u0000\u0000\u00b3\u00b4\u0005,"+
		"\u0000\u0000\u00b4\u00b5\u0003,\u0016\u0000\u00b5\u00b6\u0005\'\u0000"+
		"\u0000\u00b6\u00b7\u0003$\u0012\u0000\u00b7+\u0001\u0000\u0000\u0000\u00b8"+
		"\u00ba\u0003.\u0017\u0000\u00b9\u00b8\u0001\u0000\u0000\u0000\u00b9\u00ba"+
		"\u0001\u0000\u0000\u0000\u00ba-\u0001\u0000\u0000\u0000\u00bb\u00bc\u0005"+
		"\"\u0000\u0000\u00bc\u00bd\u00032\u0019\u0000\u00bd\u00be\u00030\u0018"+
		"\u0000\u00be\u00bf\u0005#\u0000\u0000\u00bf/\u0001\u0000\u0000\u0000\u00c0"+
		"\u00c1\u0005\'\u0000\u0000\u00c1\u00c2\u00032\u0019\u0000\u00c2\u00c3"+
		"\u00030\u0018\u0000\u00c3\u00c5\u0001\u0000\u0000\u0000\u00c4\u00c0\u0001"+
		"\u0000\u0000\u0000\u00c4\u00c5\u0001\u0000\u0000\u0000\u00c51\u0001\u0000"+
		"\u0000\u0000\u00c6\u00c8\u0005\u0007\u0000\u0000\u00c7\u00c6\u0001\u0000"+
		"\u0000\u0000\u00c7\u00c8\u0001\u0000\u0000\u0000\u00c8\u00c9\u0001\u0000"+
		"\u0000\u0000\u00c9\u00ca\u0003\u0018\f\u0000\u00ca\u00cb\u0005(\u0000"+
		"\u0000\u00cb\u00cc\u00034\u001a\u0000\u00cc3\u0001\u0000\u0000\u0000\u00cd"+
		"\u00d0\u0005,\u0000\u0000\u00ce\u00d0\u0003 \u0010\u0000\u00cf\u00cd\u0001"+
		"\u0000\u0000\u0000\u00cf\u00ce\u0001\u0000\u0000\u0000\u00d05\u0001\u0000"+
		"\u0000\u0000\u00d1\u00d2\u0005\u0005\u0000\u0000\u00d2\u00d3\u0003:\u001d"+
		"\u0000\u00d3\u00d4\u00038\u001c\u0000\u00d4\u00d5\u0005\u0006\u0000\u0000"+
		"\u00d57\u0001\u0000\u0000\u0000\u00d6\u00d7\u0005\'\u0000\u0000\u00d7"+
		"\u00d8\u0003:\u001d\u0000\u00d8\u00d9\u00038\u001c\u0000\u00d9\u00db\u0001"+
		"\u0000\u0000\u0000\u00da\u00d6\u0001\u0000\u0000\u0000\u00da\u00db\u0001"+
		"\u0000\u0000\u0000\u00db9\u0001\u0000\u0000\u0000\u00dc\u00e2\u0003<\u001e"+
		"\u0000\u00dd\u00e2\u0003>\u001f\u0000\u00de\u00e2\u00036\u001b\u0000\u00df"+
		"\u00e2\u0003B!\u0000\u00e0\u00e2\u0003F#\u0000\u00e1\u00dc\u0001\u0000"+
		"\u0000\u0000\u00e1\u00dd\u0001\u0000\u0000\u0000\u00e1\u00de\u0001\u0000"+
		"\u0000\u0000\u00e1\u00df\u0001\u0000\u0000\u0000\u00e1\u00e0\u0001\u0000"+
		"\u0000\u0000\u00e2;\u0001\u0000\u0000\u0000\u00e3\u00e4\u0003\u0012\t"+
		"\u0000\u00e4\u00e5\u0005\u0016\u0000\u0000\u00e5\u00e6\u0003\n\u0005\u0000"+
		"\u00e6=\u0001\u0000\u0000\u0000\u00e7\u00e8\u0007\u0006\u0000\u0000\u00e8"+
		"\u00e9\u0003@ \u0000\u00e9?\u0001\u0000\u0000\u0000\u00ea\u00eb\u0005"+
		"\"\u0000\u0000\u00eb\u00ec\u0003H$\u0000\u00ec\u00ed\u0005#\u0000\u0000"+
		"\u00ed\u00ef\u0001\u0000\u0000\u0000\u00ee\u00ea\u0001\u0000\u0000\u0000"+
		"\u00ee\u00ef\u0001\u0000\u0000\u0000\u00efA\u0001\u0000\u0000\u0000\u00f0"+
		"\u00f1\u0005\u0010\u0000\u0000\u00f1\u00f2\u0003\n\u0005\u0000\u00f2\u00f3"+
		"\u0005\u0011\u0000\u0000\u00f3\u00f4\u0003:\u001d\u0000\u00f4\u00f5\u0003"+
		"D\"\u0000\u00f5C\u0001\u0000\u0000\u0000\u00f6\u00f7\u0005\u0012\u0000"+
		"\u0000\u00f7\u00f9\u0003:\u001d\u0000\u00f8\u00f6\u0001\u0000\u0000\u0000"+
		"\u00f8\u00f9\u0001\u0000\u0000\u0000\u00f9E\u0001\u0000\u0000\u0000\u00fa"+
		"\u00fb\u0005\u0013\u0000\u0000\u00fb\u00fc\u0003\n\u0005\u0000\u00fc\u00fd"+
		"\u0005\u0014\u0000\u0000\u00fd\u00fe\u0003:\u001d\u0000\u00feG\u0001\u0000"+
		"\u0000\u0000\u00ff\u0100\u0003\n\u0005\u0000\u0100\u0101\u0003J%\u0000"+
		"\u0101I\u0001\u0000\u0000\u0000\u0102\u0103\u0005&\u0000\u0000\u0103\u0104"+
		"\u0003\n\u0005\u0000\u0104\u0105\u0003J%\u0000\u0105\u0107\u0001\u0000"+
		"\u0000\u0000\u0106\u0102\u0001\u0000\u0000\u0000\u0106\u0107\u0001\u0000"+
		"\u0000\u0000\u0107K\u0001\u0000\u0000\u0000\u0015UXaiw|\u0087\u0091\u009c"+
		"\u00a1\u00a4\u00b0\u00b9\u00c4\u00c7\u00cf\u00da\u00e1\u00ee\u00f8\u0106";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}