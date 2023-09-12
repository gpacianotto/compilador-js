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
public class LALG extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMENTARIO=1, COMENTARIO_MULTI=2, WS=3, PROGRAM=4, BEGIN=5, END=6, VAR=7, 
		PROCEDURE=8, INT_LITERAL=9, FLOAT_LITERAL=10, BOOL_CONST=11, READ=12, 
		WRITE=13, BOOLEAN_LITERAL=14, IF=15, THEN=16, ELSE=17, WHILE=18, DO=19, 
		NOT=20, ATRIBUICAO=21, MAIS=22, MENOS=23, MULT=24, DIV=25, RELACAO=26, 
		ABRE_PARENTESES=27, FECHA_PARENTESES=28, VIRGULA=29, PONTO_VIRGULA=30, 
		DOIS_PONTOS=31, ID=32, INT=33, FLOAT=34;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", "VAR", 
			"PROCEDURE", "INT_LITERAL", "FLOAT_LITERAL", "BOOL_CONST", "READ", "WRITE", 
			"BOOLEAN_LITERAL", "IF", "THEN", "ELSE", "WHILE", "DO", "NOT", "ATRIBUICAO", 
			"MAIS", "MENOS", "MULT", "DIV", "RELACAO", "ABRE_PARENTESES", "FECHA_PARENTESES", 
			"VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", "LETRA", "DIGITO", "ID", "INT", 
			"FLOAT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'program'", "'begin'", "'end'", "'var'", "'procedure'", 
			"'int'", "'float'", "'boolean'", "'read'", "'write'", null, "'if'", "'then'", 
			"'else'", "'while'", "'do'", "'not'", "':='", "'+'", "'-'", "'*'", "'/'", 
			null, "'('", "')'", "','", "';'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", 
			"VAR", "PROCEDURE", "INT_LITERAL", "FLOAT_LITERAL", "BOOL_CONST", "READ", 
			"WRITE", "BOOLEAN_LITERAL", "IF", "THEN", "ELSE", "WHILE", "DO", "NOT", 
			"ATRIBUICAO", "MAIS", "MENOS", "MULT", "DIV", "RELACAO", "ABRE_PARENTESES", 
			"FECHA_PARENTESES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", "ID", 
			"INT", "FLOAT"
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


	public LALG(CharStream input) {
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2$\u0105\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\3\2\3\2\3\2\3\2\7\2P\n\2\f\2\16\2S\13\2"+
		"\3\2\3\2\3\3\3\3\7\3Y\n\3\f\3\16\3\\\13\3\3\3\3\3\3\3\3\3\3\4\6\4c\n\4"+
		"\r\4\16\4d\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00af\n\17\3\20\3\20\3\20"+
		"\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27"+
		"\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\5\33\u00de\n\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3"+
		"\"\3\"\3#\3#\3#\7#\u00f1\n#\f#\16#\u00f4\13#\3$\6$\u00f7\n$\r$\16$\u00f8"+
		"\3%\6%\u00fc\n%\r%\16%\u00fd\3%\3%\6%\u0102\n%\r%\16%\u0103\3Z\2&\3\3"+
		"\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21"+
		"!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!"+
		"A\2C\2E\"G#I$\3\2\7\4\2\f\f\17\17\5\2\13\f\17\17\"\"\4\2>>@@\5\2C\\aa"+
		"c|\3\2\62;\2\u010f\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2"+
		"!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3"+
		"\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2"+
		"\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I"+
		"\3\2\2\2\3K\3\2\2\2\5V\3\2\2\2\7b\3\2\2\2\th\3\2\2\2\13p\3\2\2\2\rv\3"+
		"\2\2\2\17z\3\2\2\2\21~\3\2\2\2\23\u0088\3\2\2\2\25\u008c\3\2\2\2\27\u0092"+
		"\3\2\2\2\31\u009a\3\2\2\2\33\u009f\3\2\2\2\35\u00ae\3\2\2\2\37\u00b0\3"+
		"\2\2\2!\u00b3\3\2\2\2#\u00b8\3\2\2\2%\u00bd\3\2\2\2\'\u00c3\3\2\2\2)\u00c6"+
		"\3\2\2\2+\u00ca\3\2\2\2-\u00cd\3\2\2\2/\u00cf\3\2\2\2\61\u00d1\3\2\2\2"+
		"\63\u00d3\3\2\2\2\65\u00dd\3\2\2\2\67\u00df\3\2\2\29\u00e1\3\2\2\2;\u00e3"+
		"\3\2\2\2=\u00e5\3\2\2\2?\u00e7\3\2\2\2A\u00e9\3\2\2\2C\u00eb\3\2\2\2E"+
		"\u00ed\3\2\2\2G\u00f6\3\2\2\2I\u00fb\3\2\2\2KL\7\61\2\2LM\7\61\2\2MQ\3"+
		"\2\2\2NP\n\2\2\2ON\3\2\2\2PS\3\2\2\2QO\3\2\2\2QR\3\2\2\2RT\3\2\2\2SQ\3"+
		"\2\2\2TU\b\2\2\2U\4\3\2\2\2VZ\7}\2\2WY\13\2\2\2XW\3\2\2\2Y\\\3\2\2\2Z"+
		"[\3\2\2\2ZX\3\2\2\2[]\3\2\2\2\\Z\3\2\2\2]^\7\177\2\2^_\3\2\2\2_`\b\3\2"+
		"\2`\6\3\2\2\2ac\t\3\2\2ba\3\2\2\2cd\3\2\2\2db\3\2\2\2de\3\2\2\2ef\3\2"+
		"\2\2fg\b\4\2\2g\b\3\2\2\2hi\7r\2\2ij\7t\2\2jk\7q\2\2kl\7i\2\2lm\7t\2\2"+
		"mn\7c\2\2no\7o\2\2o\n\3\2\2\2pq\7d\2\2qr\7g\2\2rs\7i\2\2st\7k\2\2tu\7"+
		"p\2\2u\f\3\2\2\2vw\7g\2\2wx\7p\2\2xy\7f\2\2y\16\3\2\2\2z{\7x\2\2{|\7c"+
		"\2\2|}\7t\2\2}\20\3\2\2\2~\177\7r\2\2\177\u0080\7t\2\2\u0080\u0081\7q"+
		"\2\2\u0081\u0082\7e\2\2\u0082\u0083\7g\2\2\u0083\u0084\7f\2\2\u0084\u0085"+
		"\7w\2\2\u0085\u0086\7t\2\2\u0086\u0087\7g\2\2\u0087\22\3\2\2\2\u0088\u0089"+
		"\7k\2\2\u0089\u008a\7p\2\2\u008a\u008b\7v\2\2\u008b\24\3\2\2\2\u008c\u008d"+
		"\7h\2\2\u008d\u008e\7n\2\2\u008e\u008f\7q\2\2\u008f\u0090\7c\2\2\u0090"+
		"\u0091\7v\2\2\u0091\26\3\2\2\2\u0092\u0093\7d\2\2\u0093\u0094\7q\2\2\u0094"+
		"\u0095\7q\2\2\u0095\u0096\7n\2\2\u0096\u0097\7g\2\2\u0097\u0098\7c\2\2"+
		"\u0098\u0099\7p\2\2\u0099\30\3\2\2\2\u009a\u009b\7t\2\2\u009b\u009c\7"+
		"g\2\2\u009c\u009d\7c\2\2\u009d\u009e\7f\2\2\u009e\32\3\2\2\2\u009f\u00a0"+
		"\7y\2\2\u00a0\u00a1\7t\2\2\u00a1\u00a2\7k\2\2\u00a2\u00a3\7v\2\2\u00a3"+
		"\u00a4\7g\2\2\u00a4\34\3\2\2\2\u00a5\u00a6\7v\2\2\u00a6\u00a7\7t\2\2\u00a7"+
		"\u00a8\7w\2\2\u00a8\u00af\7g\2\2\u00a9\u00aa\7h\2\2\u00aa\u00ab\7c\2\2"+
		"\u00ab\u00ac\7n\2\2\u00ac\u00ad\7u\2\2\u00ad\u00af\7g\2\2\u00ae\u00a5"+
		"\3\2\2\2\u00ae\u00a9\3\2\2\2\u00af\36\3\2\2\2\u00b0\u00b1\7k\2\2\u00b1"+
		"\u00b2\7h\2\2\u00b2 \3\2\2\2\u00b3\u00b4\7v\2\2\u00b4\u00b5\7j\2\2\u00b5"+
		"\u00b6\7g\2\2\u00b6\u00b7\7p\2\2\u00b7\"\3\2\2\2\u00b8\u00b9\7g\2\2\u00b9"+
		"\u00ba\7n\2\2\u00ba\u00bb\7u\2\2\u00bb\u00bc\7g\2\2\u00bc$\3\2\2\2\u00bd"+
		"\u00be\7y\2\2\u00be\u00bf\7j\2\2\u00bf\u00c0\7k\2\2\u00c0\u00c1\7n\2\2"+
		"\u00c1\u00c2\7g\2\2\u00c2&\3\2\2\2\u00c3\u00c4\7f\2\2\u00c4\u00c5\7q\2"+
		"\2\u00c5(\3\2\2\2\u00c6\u00c7\7p\2\2\u00c7\u00c8\7q\2\2\u00c8\u00c9\7"+
		"v\2\2\u00c9*\3\2\2\2\u00ca\u00cb\7<\2\2\u00cb\u00cc\7?\2\2\u00cc,\3\2"+
		"\2\2\u00cd\u00ce\7-\2\2\u00ce.\3\2\2\2\u00cf\u00d0\7/\2\2\u00d0\60\3\2"+
		"\2\2\u00d1\u00d2\7,\2\2\u00d2\62\3\2\2\2\u00d3\u00d4\7\61\2\2\u00d4\64"+
		"\3\2\2\2\u00d5\u00de\t\4\2\2\u00d6\u00d7\7>\2\2\u00d7\u00de\7?\2\2\u00d8"+
		"\u00d9\7@\2\2\u00d9\u00de\7?\2\2\u00da\u00de\7?\2\2\u00db\u00dc\7>\2\2"+
		"\u00dc\u00de\7@\2\2\u00dd\u00d5\3\2\2\2\u00dd\u00d6\3\2\2\2\u00dd\u00d8"+
		"\3\2\2\2\u00dd\u00da\3\2\2\2\u00dd\u00db\3\2\2\2\u00de\66\3\2\2\2\u00df"+
		"\u00e0\7*\2\2\u00e08\3\2\2\2\u00e1\u00e2\7+\2\2\u00e2:\3\2\2\2\u00e3\u00e4"+
		"\7.\2\2\u00e4<\3\2\2\2\u00e5\u00e6\7=\2\2\u00e6>\3\2\2\2\u00e7\u00e8\7"+
		"<\2\2\u00e8@\3\2\2\2\u00e9\u00ea\t\5\2\2\u00eaB\3\2\2\2\u00eb\u00ec\t"+
		"\6\2\2\u00ecD\3\2\2\2\u00ed\u00f2\5A!\2\u00ee\u00f1\5A!\2\u00ef\u00f1"+
		"\5C\"\2\u00f0\u00ee\3\2\2\2\u00f0\u00ef\3\2\2\2\u00f1\u00f4\3\2\2\2\u00f2"+
		"\u00f0\3\2\2\2\u00f2\u00f3\3\2\2\2\u00f3F\3\2\2\2\u00f4\u00f2\3\2\2\2"+
		"\u00f5\u00f7\5C\"\2\u00f6\u00f5\3\2\2\2\u00f7\u00f8\3\2\2\2\u00f8\u00f6"+
		"\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9H\3\2\2\2\u00fa\u00fc\5C\"\2\u00fb\u00fa"+
		"\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd\u00fe\3\2\2\2\u00fe"+
		"\u00ff\3\2\2\2\u00ff\u0101\7\60\2\2\u0100\u0102\5C\"\2\u0101\u0100\3\2"+
		"\2\2\u0102\u0103\3\2\2\2\u0103\u0101\3\2\2\2\u0103\u0104\3\2\2\2\u0104"+
		"J\3\2\2\2\r\2QZd\u00ae\u00dd\u00f0\u00f2\u00f8\u00fd\u0103\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}