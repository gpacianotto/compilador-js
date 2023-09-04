// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALG.g4 by ANTLR 4.9.2
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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, DIGITO=34, LETRA=35, WS=36;
	public static final int
		RULE_programa = 0, RULE_bloco = 1, RULE_declaracao_variaveis = 2, RULE_tipo = 3, 
		RULE_lista_identificadores = 4, RULE_declaracao_subrotinas = 5, RULE_declaracao_procedimento = 6, 
		RULE_parametros_formais = 7, RULE_secao_parametros_formais = 8, RULE_comando_composto = 9, 
		RULE_comando = 10, RULE_atribuicao = 11, RULE_chamada_procedimento = 12, 
		RULE_comando_condicional = 13, RULE_comando_repetitivo = 14, RULE_expressao = 15, 
		RULE_relacao = 16, RULE_expressao_simples = 17, RULE_termo = 18, RULE_fator = 19, 
		RULE_variavel = 20, RULE_lista_expressoes = 21, RULE_identificador = 22, 
		RULE_numero = 23;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "bloco", "declaracao_variaveis", "tipo", "lista_identificadores", 
			"declaracao_subrotinas", "declaracao_procedimento", "parametros_formais", 
			"secao_parametros_formais", "comando_composto", "comando", "atribuicao", 
			"chamada_procedimento", "comando_condicional", "comando_repetitivo", 
			"expressao", "relacao", "expressao_simples", "termo", "fator", "variavel", 
			"lista_expressoes", "identificador", "numero"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'program'", "';'", "'.'", "'int'", "'boolean'", "','", "'procedure'", 
			"'('", "')'", "':'", "'begin'", "'end'", "':='", "'if'", "'then'", "'else'", 
			"'while'", "'do'", "'='", "'<>'", "'<'", "'<='", "'>='", "'>'", "'+'", 
			"'-'", "'or'", "'*'", "'div'", "'and'", "'not'", "'['", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, "DIGITO", 
			"LETRA", "WS"
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
	public String getGrammarFileName() { return "LALG.g4"; }

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
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public BlocoContext bloco() {
			return getRuleContext(BlocoContext.class,0);
		}
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
			setState(48);
			match(T__0);
			setState(49);
			identificador();
			setState(50);
			match(T__1);
			setState(51);
			bloco();
			setState(52);
			match(T__2);
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
		public Comando_compostoContext comando_composto() {
			return getRuleContext(Comando_compostoContext.class,0);
		}
		public List<Declaracao_variaveisContext> declaracao_variaveis() {
			return getRuleContexts(Declaracao_variaveisContext.class);
		}
		public Declaracao_variaveisContext declaracao_variaveis(int i) {
			return getRuleContext(Declaracao_variaveisContext.class,i);
		}
		public Declaracao_subrotinasContext declaracao_subrotinas() {
			return getRuleContext(Declaracao_subrotinasContext.class,0);
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
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3 || _la==T__4) {
				{
				{
				setState(54);
				declaracao_variaveis();
				setState(55);
				match(T__1);
				}
				}
				setState(61);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__1 || _la==T__6) {
				{
				setState(62);
				declaracao_subrotinas();
				setState(63);
				match(T__1);
				}
			}

			setState(67);
			comando_composto();
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

	public static class Declaracao_variaveisContext extends ParserRuleContext {
		public TipoContext tipo() {
			return getRuleContext(TipoContext.class,0);
		}
		public Lista_identificadoresContext lista_identificadores() {
			return getRuleContext(Lista_identificadoresContext.class,0);
		}
		public Declaracao_variaveisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracao_variaveis; }
	}

	public final Declaracao_variaveisContext declaracao_variaveis() throws RecognitionException {
		Declaracao_variaveisContext _localctx = new Declaracao_variaveisContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaracao_variaveis);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			tipo();
			setState(70);
			lista_identificadores();
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

	public static class TipoContext extends ParserRuleContext {
		public TipoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tipo; }
	}

	public final TipoContext tipo() throws RecognitionException {
		TipoContext _localctx = new TipoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_tipo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			_la = _input.LA(1);
			if ( !(_la==T__3 || _la==T__4) ) {
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

	public static class Lista_identificadoresContext extends ParserRuleContext {
		public List<IdentificadorContext> identificador() {
			return getRuleContexts(IdentificadorContext.class);
		}
		public IdentificadorContext identificador(int i) {
			return getRuleContext(IdentificadorContext.class,i);
		}
		public Lista_identificadoresContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_identificadores; }
	}

	public final Lista_identificadoresContext lista_identificadores() throws RecognitionException {
		Lista_identificadoresContext _localctx = new Lista_identificadoresContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_lista_identificadores);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			identificador();
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(75);
				match(T__5);
				setState(76);
				identificador();
				}
				}
				setState(81);
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

	public static class Declaracao_subrotinasContext extends ParserRuleContext {
		public List<Declaracao_procedimentoContext> declaracao_procedimento() {
			return getRuleContexts(Declaracao_procedimentoContext.class);
		}
		public Declaracao_procedimentoContext declaracao_procedimento(int i) {
			return getRuleContext(Declaracao_procedimentoContext.class,i);
		}
		public Declaracao_subrotinasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracao_subrotinas; }
	}

	public final Declaracao_subrotinasContext declaracao_subrotinas() throws RecognitionException {
		Declaracao_subrotinasContext _localctx = new Declaracao_subrotinasContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_declaracao_subrotinas);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__6) {
				{
				{
				setState(82);
				declaracao_procedimento();
				}
				}
				setState(87);
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

	public static class Declaracao_procedimentoContext extends ParserRuleContext {
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public Parametros_formaisContext parametros_formais() {
			return getRuleContext(Parametros_formaisContext.class,0);
		}
		public BlocoContext bloco() {
			return getRuleContext(BlocoContext.class,0);
		}
		public Declaracao_procedimentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracao_procedimento; }
	}

	public final Declaracao_procedimentoContext declaracao_procedimento() throws RecognitionException {
		Declaracao_procedimentoContext _localctx = new Declaracao_procedimentoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_declaracao_procedimento);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			match(T__6);
			setState(89);
			identificador();
			setState(90);
			parametros_formais();
			setState(91);
			match(T__1);
			setState(92);
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

	public static class Parametros_formaisContext extends ParserRuleContext {
		public List<Secao_parametros_formaisContext> secao_parametros_formais() {
			return getRuleContexts(Secao_parametros_formaisContext.class);
		}
		public Secao_parametros_formaisContext secao_parametros_formais(int i) {
			return getRuleContext(Secao_parametros_formaisContext.class,i);
		}
		public Parametros_formaisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros_formais; }
	}

	public final Parametros_formaisContext parametros_formais() throws RecognitionException {
		Parametros_formaisContext _localctx = new Parametros_formaisContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_parametros_formais);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			match(T__7);
			setState(95);
			secao_parametros_formais();
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(96);
				match(T__1);
				setState(97);
				secao_parametros_formais();
				}
				}
				setState(102);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(103);
			match(T__8);
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

	public static class Secao_parametros_formaisContext extends ParserRuleContext {
		public Lista_identificadoresContext lista_identificadores() {
			return getRuleContext(Lista_identificadoresContext.class,0);
		}
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public Secao_parametros_formaisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secao_parametros_formais; }
	}

	public final Secao_parametros_formaisContext secao_parametros_formais() throws RecognitionException {
		Secao_parametros_formaisContext _localctx = new Secao_parametros_formaisContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_secao_parametros_formais);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			lista_identificadores();
			setState(106);
			match(T__9);
			setState(107);
			identificador();
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

	public static class Comando_compostoContext extends ParserRuleContext {
		public List<ComandoContext> comando() {
			return getRuleContexts(ComandoContext.class);
		}
		public ComandoContext comando(int i) {
			return getRuleContext(ComandoContext.class,i);
		}
		public Comando_compostoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando_composto; }
	}

	public final Comando_compostoContext comando_composto() throws RecognitionException {
		Comando_compostoContext _localctx = new Comando_compostoContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_comando_composto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(T__10);
			setState(110);
			comando();
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(111);
				match(T__1);
				setState(112);
				comando();
				}
				}
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
			match(T__11);
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
		public Chamada_procedimentoContext chamada_procedimento() {
			return getRuleContext(Chamada_procedimentoContext.class,0);
		}
		public Comando_compostoContext comando_composto() {
			return getRuleContext(Comando_compostoContext.class,0);
		}
		public Comando_condicionalContext comando_condicional() {
			return getRuleContext(Comando_condicionalContext.class,0);
		}
		public Comando_repetitivoContext comando_repetitivo() {
			return getRuleContext(Comando_repetitivoContext.class,0);
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
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
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
				chamada_procedimento();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(122);
				comando_composto();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(123);
				comando_condicional();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(124);
				comando_repetitivo();
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
			match(T__12);
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

	public static class Chamada_procedimentoContext extends ParserRuleContext {
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public Lista_expressoesContext lista_expressoes() {
			return getRuleContext(Lista_expressoesContext.class,0);
		}
		public Chamada_procedimentoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chamada_procedimento; }
	}

	public final Chamada_procedimentoContext chamada_procedimento() throws RecognitionException {
		Chamada_procedimentoContext _localctx = new Chamada_procedimentoContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_chamada_procedimento);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			identificador();
			setState(132);
			match(T__7);
			setState(133);
			lista_expressoes();
			setState(134);
			match(T__8);
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

	public static class Comando_condicionalContext extends ParserRuleContext {
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public List<ComandoContext> comando() {
			return getRuleContexts(ComandoContext.class);
		}
		public ComandoContext comando(int i) {
			return getRuleContext(ComandoContext.class,i);
		}
		public Comando_condicionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando_condicional; }
	}

	public final Comando_condicionalContext comando_condicional() throws RecognitionException {
		Comando_condicionalContext _localctx = new Comando_condicionalContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_comando_condicional);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(T__13);
			setState(137);
			expressao();
			setState(138);
			match(T__14);
			setState(139);
			comando();
			setState(142);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(140);
				match(T__15);
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

	public static class Comando_repetitivoContext extends ParserRuleContext {
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public Comando_repetitivoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando_repetitivo; }
	}

	public final Comando_repetitivoContext comando_repetitivo() throws RecognitionException {
		Comando_repetitivoContext _localctx = new Comando_repetitivoContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_comando_repetitivo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(T__16);
			setState(145);
			expressao();
			setState(146);
			match(T__17);
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
		public List<Expressao_simplesContext> expressao_simples() {
			return getRuleContexts(Expressao_simplesContext.class);
		}
		public Expressao_simplesContext expressao_simples(int i) {
			return getRuleContext(Expressao_simplesContext.class,i);
		}
		public RelacaoContext relacao() {
			return getRuleContext(RelacaoContext.class,0);
		}
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
			expressao_simples();
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23))) != 0)) {
				{
				setState(150);
				relacao();
				setState(151);
				expressao_simples();
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

	public static class RelacaoContext extends ParserRuleContext {
		public RelacaoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relacao; }
	}

	public final RelacaoContext relacao() throws RecognitionException {
		RelacaoContext _localctx = new RelacaoContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_relacao);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23))) != 0)) ) {
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

	public static class Expressao_simplesContext extends ParserRuleContext {
		public List<TermoContext> termo() {
			return getRuleContexts(TermoContext.class);
		}
		public TermoContext termo(int i) {
			return getRuleContext(TermoContext.class,i);
		}
		public Expressao_simplesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressao_simples; }
	}

	public final Expressao_simplesContext expressao_simples() throws RecognitionException {
		Expressao_simplesContext _localctx = new Expressao_simplesContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_expressao_simples);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__24 || _la==T__25) {
				{
				setState(157);
				_la = _input.LA(1);
				if ( !(_la==T__24 || _la==T__25) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(160);
			termo();
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__24) | (1L << T__25) | (1L << T__26))) != 0)) {
				{
				{
				setState(161);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__24) | (1L << T__25) | (1L << T__26))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(162);
				termo();
				}
				}
				setState(167);
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
		public TermoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_termo; }
	}

	public final TermoContext termo() throws RecognitionException {
		TermoContext _localctx = new TermoContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_termo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			fator();
			setState(173);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__27) | (1L << T__28) | (1L << T__29))) != 0)) {
				{
				{
				setState(169);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__27) | (1L << T__28) | (1L << T__29))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(170);
				fator();
				}
				}
				setState(175);
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
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
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
		enterRule(_localctx, 38, RULE_fator);
		try {
			setState(184);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LETRA:
				enterOuterAlt(_localctx, 1);
				{
				setState(176);
				variavel();
				}
				break;
			case DIGITO:
				enterOuterAlt(_localctx, 2);
				{
				setState(177);
				numero();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 3);
				{
				setState(178);
				match(T__7);
				setState(179);
				expressao();
				setState(180);
				match(T__8);
				}
				break;
			case T__30:
				enterOuterAlt(_localctx, 4);
				{
				setState(182);
				match(T__30);
				setState(183);
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
		public IdentificadorContext identificador() {
			return getRuleContext(IdentificadorContext.class,0);
		}
		public ExpressaoContext expressao() {
			return getRuleContext(ExpressaoContext.class,0);
		}
		public VariavelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variavel; }
	}

	public final VariavelContext variavel() throws RecognitionException {
		VariavelContext _localctx = new VariavelContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_variavel);
		try {
			setState(192);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(186);
				identificador();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(187);
				identificador();
				setState(188);
				match(T__31);
				setState(189);
				expressao();
				setState(190);
				match(T__32);
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

	public static class Lista_expressoesContext extends ParserRuleContext {
		public List<ExpressaoContext> expressao() {
			return getRuleContexts(ExpressaoContext.class);
		}
		public ExpressaoContext expressao(int i) {
			return getRuleContext(ExpressaoContext.class,i);
		}
		public Lista_expressoesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista_expressoes; }
	}

	public final Lista_expressoesContext lista_expressoes() throws RecognitionException {
		Lista_expressoesContext _localctx = new Lista_expressoesContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_lista_expressoes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			expressao();
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(195);
				match(T__5);
				setState(196);
				expressao();
				}
				}
				setState(201);
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

	public static class IdentificadorContext extends ParserRuleContext {
		public List<TerminalNode> LETRA() { return getTokens(LALGParser.LETRA); }
		public TerminalNode LETRA(int i) {
			return getToken(LALGParser.LETRA, i);
		}
		public List<TerminalNode> DIGITO() { return getTokens(LALGParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(LALGParser.DIGITO, i);
		}
		public IdentificadorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identificador; }
	}

	public final IdentificadorContext identificador() throws RecognitionException {
		IdentificadorContext _localctx = new IdentificadorContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_identificador);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			match(LETRA);
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DIGITO || _la==LETRA) {
				{
				{
				setState(203);
				_la = _input.LA(1);
				if ( !(_la==DIGITO || _la==LETRA) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(208);
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

	public static class NumeroContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(LALGParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(LALGParser.DIGITO, i);
		}
		public NumeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numero; }
	}

	public final NumeroContext numero() throws RecognitionException {
		NumeroContext _localctx = new NumeroContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_numero);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(209);
				match(DIGITO);
				}
				}
				setState(212); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIGITO );
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3&\u00d9\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\7\3<\n\3\f\3\16\3?\13\3\3\3\3\3\3"+
		"\3\5\3D\n\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\6\7\6P\n\6\f\6\16\6"+
		"S\13\6\3\7\7\7V\n\7\f\7\16\7Y\13\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t"+
		"\3\t\7\te\n\t\f\t\16\th\13\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3"+
		"\13\7\13t\n\13\f\13\16\13w\13\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\5\f\u0080"+
		"\n\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\5\17\u0091\n\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\5\21"+
		"\u009c\n\21\3\22\3\22\3\23\5\23\u00a1\n\23\3\23\3\23\3\23\7\23\u00a6\n"+
		"\23\f\23\16\23\u00a9\13\23\3\24\3\24\3\24\7\24\u00ae\n\24\f\24\16\24\u00b1"+
		"\13\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\5\25\u00bb\n\25\3\26\3"+
		"\26\3\26\3\26\3\26\3\26\5\26\u00c3\n\26\3\27\3\27\3\27\7\27\u00c8\n\27"+
		"\f\27\16\27\u00cb\13\27\3\30\3\30\7\30\u00cf\n\30\f\30\16\30\u00d2\13"+
		"\30\3\31\6\31\u00d5\n\31\r\31\16\31\u00d6\3\31\2\2\32\2\4\6\b\n\f\16\20"+
		"\22\24\26\30\32\34\36 \"$&(*,.\60\2\b\3\2\6\7\3\2\25\32\3\2\33\34\3\2"+
		"\33\35\3\2\36 \3\2$%\2\u00d6\2\62\3\2\2\2\4=\3\2\2\2\6G\3\2\2\2\bJ\3\2"+
		"\2\2\nL\3\2\2\2\fW\3\2\2\2\16Z\3\2\2\2\20`\3\2\2\2\22k\3\2\2\2\24o\3\2"+
		"\2\2\26\177\3\2\2\2\30\u0081\3\2\2\2\32\u0085\3\2\2\2\34\u008a\3\2\2\2"+
		"\36\u0092\3\2\2\2 \u0097\3\2\2\2\"\u009d\3\2\2\2$\u00a0\3\2\2\2&\u00aa"+
		"\3\2\2\2(\u00ba\3\2\2\2*\u00c2\3\2\2\2,\u00c4\3\2\2\2.\u00cc\3\2\2\2\60"+
		"\u00d4\3\2\2\2\62\63\7\3\2\2\63\64\5.\30\2\64\65\7\4\2\2\65\66\5\4\3\2"+
		"\66\67\7\5\2\2\67\3\3\2\2\289\5\6\4\29:\7\4\2\2:<\3\2\2\2;8\3\2\2\2<?"+
		"\3\2\2\2=;\3\2\2\2=>\3\2\2\2>C\3\2\2\2?=\3\2\2\2@A\5\f\7\2AB\7\4\2\2B"+
		"D\3\2\2\2C@\3\2\2\2CD\3\2\2\2DE\3\2\2\2EF\5\24\13\2F\5\3\2\2\2GH\5\b\5"+
		"\2HI\5\n\6\2I\7\3\2\2\2JK\t\2\2\2K\t\3\2\2\2LQ\5.\30\2MN\7\b\2\2NP\5."+
		"\30\2OM\3\2\2\2PS\3\2\2\2QO\3\2\2\2QR\3\2\2\2R\13\3\2\2\2SQ\3\2\2\2TV"+
		"\5\16\b\2UT\3\2\2\2VY\3\2\2\2WU\3\2\2\2WX\3\2\2\2X\r\3\2\2\2YW\3\2\2\2"+
		"Z[\7\t\2\2[\\\5.\30\2\\]\5\20\t\2]^\7\4\2\2^_\5\4\3\2_\17\3\2\2\2`a\7"+
		"\n\2\2af\5\22\n\2bc\7\4\2\2ce\5\22\n\2db\3\2\2\2eh\3\2\2\2fd\3\2\2\2f"+
		"g\3\2\2\2gi\3\2\2\2hf\3\2\2\2ij\7\13\2\2j\21\3\2\2\2kl\5\n\6\2lm\7\f\2"+
		"\2mn\5.\30\2n\23\3\2\2\2op\7\r\2\2pu\5\26\f\2qr\7\4\2\2rt\5\26\f\2sq\3"+
		"\2\2\2tw\3\2\2\2us\3\2\2\2uv\3\2\2\2vx\3\2\2\2wu\3\2\2\2xy\7\16\2\2y\25"+
		"\3\2\2\2z\u0080\5\30\r\2{\u0080\5\32\16\2|\u0080\5\24\13\2}\u0080\5\34"+
		"\17\2~\u0080\5\36\20\2\177z\3\2\2\2\177{\3\2\2\2\177|\3\2\2\2\177}\3\2"+
		"\2\2\177~\3\2\2\2\u0080\27\3\2\2\2\u0081\u0082\5*\26\2\u0082\u0083\7\17"+
		"\2\2\u0083\u0084\5 \21\2\u0084\31\3\2\2\2\u0085\u0086\5.\30\2\u0086\u0087"+
		"\7\n\2\2\u0087\u0088\5,\27\2\u0088\u0089\7\13\2\2\u0089\33\3\2\2\2\u008a"+
		"\u008b\7\20\2\2\u008b\u008c\5 \21\2\u008c\u008d\7\21\2\2\u008d\u0090\5"+
		"\26\f\2\u008e\u008f\7\22\2\2\u008f\u0091\5\26\f\2\u0090\u008e\3\2\2\2"+
		"\u0090\u0091\3\2\2\2\u0091\35\3\2\2\2\u0092\u0093\7\23\2\2\u0093\u0094"+
		"\5 \21\2\u0094\u0095\7\24\2\2\u0095\u0096\5\26\f\2\u0096\37\3\2\2\2\u0097"+
		"\u009b\5$\23\2\u0098\u0099\5\"\22\2\u0099\u009a\5$\23\2\u009a\u009c\3"+
		"\2\2\2\u009b\u0098\3\2\2\2\u009b\u009c\3\2\2\2\u009c!\3\2\2\2\u009d\u009e"+
		"\t\3\2\2\u009e#\3\2\2\2\u009f\u00a1\t\4\2\2\u00a0\u009f\3\2\2\2\u00a0"+
		"\u00a1\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\u00a7\5&\24\2\u00a3\u00a4\t\5"+
		"\2\2\u00a4\u00a6\5&\24\2\u00a5\u00a3\3\2\2\2\u00a6\u00a9\3\2\2\2\u00a7"+
		"\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8%\3\2\2\2\u00a9\u00a7\3\2\2\2"+
		"\u00aa\u00af\5(\25\2\u00ab\u00ac\t\6\2\2\u00ac\u00ae\5(\25\2\u00ad\u00ab"+
		"\3\2\2\2\u00ae\u00b1\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0"+
		"\'\3\2\2\2\u00b1\u00af\3\2\2\2\u00b2\u00bb\5*\26\2\u00b3\u00bb\5\60\31"+
		"\2\u00b4\u00b5\7\n\2\2\u00b5\u00b6\5 \21\2\u00b6\u00b7\7\13\2\2\u00b7"+
		"\u00bb\3\2\2\2\u00b8\u00b9\7!\2\2\u00b9\u00bb\5(\25\2\u00ba\u00b2\3\2"+
		"\2\2\u00ba\u00b3\3\2\2\2\u00ba\u00b4\3\2\2\2\u00ba\u00b8\3\2\2\2\u00bb"+
		")\3\2\2\2\u00bc\u00c3\5.\30\2\u00bd\u00be\5.\30\2\u00be\u00bf\7\"\2\2"+
		"\u00bf\u00c0\5 \21\2\u00c0\u00c1\7#\2\2\u00c1\u00c3\3\2\2\2\u00c2\u00bc"+
		"\3\2\2\2\u00c2\u00bd\3\2\2\2\u00c3+\3\2\2\2\u00c4\u00c9\5 \21\2\u00c5"+
		"\u00c6\7\b\2\2\u00c6\u00c8\5 \21\2\u00c7\u00c5\3\2\2\2\u00c8\u00cb\3\2"+
		"\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca-\3\2\2\2\u00cb\u00c9"+
		"\3\2\2\2\u00cc\u00d0\7%\2\2\u00cd\u00cf\t\7\2\2\u00ce\u00cd\3\2\2\2\u00cf"+
		"\u00d2\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1/\3\2\2\2"+
		"\u00d2\u00d0\3\2\2\2\u00d3\u00d5\7$\2\2\u00d4\u00d3\3\2\2\2\u00d5\u00d6"+
		"\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7\61\3\2\2\2\23="+
		"CQWfu\177\u0090\u009b\u00a0\u00a7\u00af\u00ba\u00c2\u00c9\u00d0\u00d6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}