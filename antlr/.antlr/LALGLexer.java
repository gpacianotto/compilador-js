// Generated from /home/guilherme/LocalOneDrive/Faculdade/2023/Compiladores/compilador-js/antlr/LALG.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LALGLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PROGRAM=1, BEGIN=2, END=3, VAR=4, PROCEDURE=5, INT_CONST=6, FLOAT_CONST=7, 
		BOOL_CONST=8, READ=9, WRITE=10, TRUE=11, FALSE=12, IF=13, THEN=14, ELSE=15, 
		WHILE=16, DO=17, NOT=18, ATRIBUICAO=19, MAIS=20, MENOS=21, MULT=22, DIV=23, 
		RELACAO=24, ABRE_PARENTESES=25, FECHA_PARENTESES=26, VIRGULA=27, PONTO_VIRGULA=28, 
		DOIS_PONTOS=29, ID=30, INT=31, FLOAT=32, COMENTARIO=33, COMENTARIO_MULTI=34, 
		WS=35;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PROGRAM", "BEGIN", "END", "VAR", "PROCEDURE", "INT_CONST", "FLOAT_CONST", 
			"BOOL_CONST", "READ", "WRITE", "TRUE", "FALSE", "IF", "THEN", "ELSE", 
			"WHILE", "DO", "NOT", "ATRIBUICAO", "MAIS", "MENOS", "MULT", "DIV", "RELACAO", 
			"ABRE_PARENTESES", "FECHA_PARENTESES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", 
			"LETRA", "DIGITO", "ID", "INT", "FLOAT", "COMENTARIO", "COMENTARIO_MULTI", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'program'", "'begin'", "'end'", "'var'", "'procedure'", "'int'", 
			"'float'", "'boolean'", "'read'", "'write'", "'true'", "'false'", "'if'", 
			"'then'", "'else'", "'while'", "'do'", "'not'", "':='", "'+'", "'-'", 
			"'*'", "'/'", null, "'('", "')'", "','", "';'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PROGRAM", "BEGIN", "END", "VAR", "PROCEDURE", "INT_CONST", "FLOAT_CONST", 
			"BOOL_CONST", "READ", "WRITE", "TRUE", "FALSE", "IF", "THEN", "ELSE", 
			"WHILE", "DO", "NOT", "ATRIBUICAO", "MAIS", "MENOS", "MULT", "DIV", "RELACAO", 
			"ABRE_PARENTESES", "FECHA_PARENTESES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", 
			"ID", "INT", "FLOAT", "COMENTARIO", "COMENTARIO_MULTI", "WS"
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


	public LALGLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LALG.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2%\u0107\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\17"+
		"\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\26"+
		"\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\5\31"+
		"\u00c3\n\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37"+
		"\3 \3 \3!\3!\3!\7!\u00d6\n!\f!\16!\u00d9\13!\3\"\6\"\u00dc\n\"\r\"\16"+
		"\"\u00dd\3#\6#\u00e1\n#\r#\16#\u00e2\3#\3#\6#\u00e7\n#\r#\16#\u00e8\3"+
		"$\3$\3$\3$\7$\u00ef\n$\f$\16$\u00f2\13$\3$\3$\3%\3%\7%\u00f8\n%\f%\16"+
		"%\u00fb\13%\3%\3%\3%\3%\3&\6&\u0102\n&\r&\16&\u0103\3&\3&\3\u00f9\2\'"+
		"\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20"+
		"\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37"+
		"=\2?\2A C!E\"G#I$K%\3\2\7\4\2>>@@\5\2C\\aac|\3\2\62;\4\2\f\f\17\17\5\2"+
		"\13\f\17\17\"\"\2\u0110\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2"+
		"\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25"+
		"\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2"+
		"\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2"+
		"\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3"+
		"\2\2\2\29\3\2\2\2\2;\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2"+
		"\2\2I\3\2\2\2\2K\3\2\2\2\3M\3\2\2\2\5U\3\2\2\2\7[\3\2\2\2\t_\3\2\2\2\13"+
		"c\3\2\2\2\rm\3\2\2\2\17q\3\2\2\2\21w\3\2\2\2\23\177\3\2\2\2\25\u0084\3"+
		"\2\2\2\27\u008a\3\2\2\2\31\u008f\3\2\2\2\33\u0095\3\2\2\2\35\u0098\3\2"+
		"\2\2\37\u009d\3\2\2\2!\u00a2\3\2\2\2#\u00a8\3\2\2\2%\u00ab\3\2\2\2\'\u00af"+
		"\3\2\2\2)\u00b2\3\2\2\2+\u00b4\3\2\2\2-\u00b6\3\2\2\2/\u00b8\3\2\2\2\61"+
		"\u00c2\3\2\2\2\63\u00c4\3\2\2\2\65\u00c6\3\2\2\2\67\u00c8\3\2\2\29\u00ca"+
		"\3\2\2\2;\u00cc\3\2\2\2=\u00ce\3\2\2\2?\u00d0\3\2\2\2A\u00d2\3\2\2\2C"+
		"\u00db\3\2\2\2E\u00e0\3\2\2\2G\u00ea\3\2\2\2I\u00f5\3\2\2\2K\u0101\3\2"+
		"\2\2MN\7r\2\2NO\7t\2\2OP\7q\2\2PQ\7i\2\2QR\7t\2\2RS\7c\2\2ST\7o\2\2T\4"+
		"\3\2\2\2UV\7d\2\2VW\7g\2\2WX\7i\2\2XY\7k\2\2YZ\7p\2\2Z\6\3\2\2\2[\\\7"+
		"g\2\2\\]\7p\2\2]^\7f\2\2^\b\3\2\2\2_`\7x\2\2`a\7c\2\2ab\7t\2\2b\n\3\2"+
		"\2\2cd\7r\2\2de\7t\2\2ef\7q\2\2fg\7e\2\2gh\7g\2\2hi\7f\2\2ij\7w\2\2jk"+
		"\7t\2\2kl\7g\2\2l\f\3\2\2\2mn\7k\2\2no\7p\2\2op\7v\2\2p\16\3\2\2\2qr\7"+
		"h\2\2rs\7n\2\2st\7q\2\2tu\7c\2\2uv\7v\2\2v\20\3\2\2\2wx\7d\2\2xy\7q\2"+
		"\2yz\7q\2\2z{\7n\2\2{|\7g\2\2|}\7c\2\2}~\7p\2\2~\22\3\2\2\2\177\u0080"+
		"\7t\2\2\u0080\u0081\7g\2\2\u0081\u0082\7c\2\2\u0082\u0083\7f\2\2\u0083"+
		"\24\3\2\2\2\u0084\u0085\7y\2\2\u0085\u0086\7t\2\2\u0086\u0087\7k\2\2\u0087"+
		"\u0088\7v\2\2\u0088\u0089\7g\2\2\u0089\26\3\2\2\2\u008a\u008b\7v\2\2\u008b"+
		"\u008c\7t\2\2\u008c\u008d\7w\2\2\u008d\u008e\7g\2\2\u008e\30\3\2\2\2\u008f"+
		"\u0090\7h\2\2\u0090\u0091\7c\2\2\u0091\u0092\7n\2\2\u0092\u0093\7u\2\2"+
		"\u0093\u0094\7g\2\2\u0094\32\3\2\2\2\u0095\u0096\7k\2\2\u0096\u0097\7"+
		"h\2\2\u0097\34\3\2\2\2\u0098\u0099\7v\2\2\u0099\u009a\7j\2\2\u009a\u009b"+
		"\7g\2\2\u009b\u009c\7p\2\2\u009c\36\3\2\2\2\u009d\u009e\7g\2\2\u009e\u009f"+
		"\7n\2\2\u009f\u00a0\7u\2\2\u00a0\u00a1\7g\2\2\u00a1 \3\2\2\2\u00a2\u00a3"+
		"\7y\2\2\u00a3\u00a4\7j\2\2\u00a4\u00a5\7k\2\2\u00a5\u00a6\7n\2\2\u00a6"+
		"\u00a7\7g\2\2\u00a7\"\3\2\2\2\u00a8\u00a9\7f\2\2\u00a9\u00aa\7q\2\2\u00aa"+
		"$\3\2\2\2\u00ab\u00ac\7p\2\2\u00ac\u00ad\7q\2\2\u00ad\u00ae\7v\2\2\u00ae"+
		"&\3\2\2\2\u00af\u00b0\7<\2\2\u00b0\u00b1\7?\2\2\u00b1(\3\2\2\2\u00b2\u00b3"+
		"\7-\2\2\u00b3*\3\2\2\2\u00b4\u00b5\7/\2\2\u00b5,\3\2\2\2\u00b6\u00b7\7"+
		",\2\2\u00b7.\3\2\2\2\u00b8\u00b9\7\61\2\2\u00b9\60\3\2\2\2\u00ba\u00c3"+
		"\t\2\2\2\u00bb\u00bc\7>\2\2\u00bc\u00c3\7?\2\2\u00bd\u00be\7@\2\2\u00be"+
		"\u00c3\7?\2\2\u00bf\u00c3\7?\2\2\u00c0\u00c1\7>\2\2\u00c1\u00c3\7@\2\2"+
		"\u00c2\u00ba\3\2\2\2\u00c2\u00bb\3\2\2\2\u00c2\u00bd\3\2\2\2\u00c2\u00bf"+
		"\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c3\62\3\2\2\2\u00c4\u00c5\7*\2\2\u00c5"+
		"\64\3\2\2\2\u00c6\u00c7\7+\2\2\u00c7\66\3\2\2\2\u00c8\u00c9\7.\2\2\u00c9"+
		"8\3\2\2\2\u00ca\u00cb\7=\2\2\u00cb:\3\2\2\2\u00cc\u00cd\7<\2\2\u00cd<"+
		"\3\2\2\2\u00ce\u00cf\t\3\2\2\u00cf>\3\2\2\2\u00d0\u00d1\t\4\2\2\u00d1"+
		"@\3\2\2\2\u00d2\u00d7\5=\37\2\u00d3\u00d6\5=\37\2\u00d4\u00d6\5? \2\u00d5"+
		"\u00d3\3\2\2\2\u00d5\u00d4\3\2\2\2\u00d6\u00d9\3\2\2\2\u00d7\u00d5\3\2"+
		"\2\2\u00d7\u00d8\3\2\2\2\u00d8B\3\2\2\2\u00d9\u00d7\3\2\2\2\u00da\u00dc"+
		"\5? \2\u00db\u00da\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00db\3\2\2\2\u00dd"+
		"\u00de\3\2\2\2\u00deD\3\2\2\2\u00df\u00e1\5? \2\u00e0\u00df\3\2\2\2\u00e1"+
		"\u00e2\3\2\2\2\u00e2\u00e0\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\3\2"+
		"\2\2\u00e4\u00e6\7\60\2\2\u00e5\u00e7\5? \2\u00e6\u00e5\3\2\2\2\u00e7"+
		"\u00e8\3\2\2\2\u00e8\u00e6\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9F\3\2\2\2"+
		"\u00ea\u00eb\7\61\2\2\u00eb\u00ec\7\61\2\2\u00ec\u00f0\3\2\2\2\u00ed\u00ef"+
		"\n\5\2\2\u00ee\u00ed\3\2\2\2\u00ef\u00f2\3\2\2\2\u00f0\u00ee\3\2\2\2\u00f0"+
		"\u00f1\3\2\2\2\u00f1\u00f3\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f3\u00f4\b$"+
		"\2\2\u00f4H\3\2\2\2\u00f5\u00f9\7}\2\2\u00f6\u00f8\13\2\2\2\u00f7\u00f6"+
		"\3\2\2\2\u00f8\u00fb\3\2\2\2\u00f9\u00fa\3\2\2\2\u00f9\u00f7\3\2\2\2\u00fa"+
		"\u00fc\3\2\2\2\u00fb\u00f9\3\2\2\2\u00fc\u00fd\7\177\2\2\u00fd\u00fe\3"+
		"\2\2\2\u00fe\u00ff\b%\2\2\u00ffJ\3\2\2\2\u0100\u0102\t\6\2\2\u0101\u0100"+
		"\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0101\3\2\2\2\u0103\u0104\3\2\2\2\u0104"+
		"\u0105\3\2\2\2\u0105\u0106\b&\2\2\u0106L\3\2\2\2\f\2\u00c2\u00d5\u00d7"+
		"\u00dd\u00e2\u00e8\u00f0\u00f9\u0103\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}