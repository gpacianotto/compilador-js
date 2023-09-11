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
		PROGRAM=1, BEGIN=2, END=3, PROCEDURE=4, IF=5, THEN=6, ELSE=7, WHILE=8, 
		DO=9, TRUE=10, FALSE=11, INT=12, BOOLEAN=13, READ=14, WRITE=15, NOT=16, 
		VAR=17, ASSIGN=18, SEMICOLON=19, COMMA=20, DOT=21, COLON=22, LPAREN=23, 
		RPAREN=24, LBRACKET=25, RBRACKET=26, LETRA=27, PLUS=28, MINUS=29, TIMES=30, 
		DIV=31, EQUAL=32, DIFF=33, LESS_THEN=34, GREATER_THEN=35, LESS_TTHEN_EQUAL=36, 
		GREATER_THEN_EQUAL=37, COMMENT=38, MULTILINE_COMMENT=39;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PROGRAM", "BEGIN", "END", "PROCEDURE", "IF", "THEN", "ELSE", "WHILE", 
			"DO", "TRUE", "FALSE", "INT", "BOOLEAN", "READ", "WRITE", "NOT", "VAR", 
			"ASSIGN", "SEMICOLON", "COMMA", "DOT", "COLON", "LPAREN", "RPAREN", "LBRACKET", 
			"RBRACKET", "LETRA", "PLUS", "MINUS", "TIMES", "DIV", "EQUAL", "DIFF", 
			"LESS_THEN", "GREATER_THEN", "LESS_TTHEN_EQUAL", "GREATER_THEN_EQUAL", 
			"COMMENT", "MULTILINE_COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'program'", "'begin'", "'end'", "'procedure'", "'if'", "'then'", 
			"'else'", "'while'", "'do'", "'true'", "'false'", "'int'", "'boolean'", 
			"'read'", "'write'", "'not'", "'var'", "':='", "';'", "','", "'.'", "':'", 
			"'('", "')'", "'['", "']'", null, "'+'", "'-'", "'*'", "'/'", "'='", 
			"'<>'", "'<'", "'>'", "'<='", "'>='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PROGRAM", "BEGIN", "END", "PROCEDURE", "IF", "THEN", "ELSE", "WHILE", 
			"DO", "TRUE", "FALSE", "INT", "BOOLEAN", "READ", "WRITE", "NOT", "VAR", 
			"ASSIGN", "SEMICOLON", "COMMA", "DOT", "COLON", "LPAREN", "RPAREN", "LBRACKET", 
			"RBRACKET", "LETRA", "PLUS", "MINUS", "TIMES", "DIV", "EQUAL", "DIFF", 
			"LESS_THEN", "GREATER_THEN", "LESS_TTHEN_EQUAL", "GREATER_THEN_EQUAL", 
			"COMMENT", "MULTILINE_COMMENT"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2)\u00ef\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b"+
		"\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21"+
		"\3\21\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\25\3\25\3\26"+
		"\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35"+
		"\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3\"\3#\3#\3$\3$\3%\3%\3"+
		"%\3&\3&\3&\3\'\3\'\3\'\3\'\7\'\u00de\n\'\f\'\16\'\u00e1\13\'\3\'\3\'\3"+
		"(\3(\7(\u00e7\n(\f(\16(\u00ea\13(\3(\3(\3(\3(\3\u00e8\2)\3\3\5\4\7\5\t"+
		"\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23"+
		"%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G"+
		"%I&K\'M(O)\3\2\4\5\2C\\aac|\4\2\f\f\17\17\2\u00f0\2\3\3\2\2\2\2\5\3\2"+
		"\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\3Q\3\2\2\2\5Y\3\2\2\2\7_\3\2\2\2\tc\3\2\2\2\13"+
		"m\3\2\2\2\rp\3\2\2\2\17u\3\2\2\2\21z\3\2\2\2\23\u0080\3\2\2\2\25\u0083"+
		"\3\2\2\2\27\u0088\3\2\2\2\31\u008e\3\2\2\2\33\u0092\3\2\2\2\35\u009a\3"+
		"\2\2\2\37\u009f\3\2\2\2!\u00a5\3\2\2\2#\u00a9\3\2\2\2%\u00ad\3\2\2\2\'"+
		"\u00b0\3\2\2\2)\u00b2\3\2\2\2+\u00b4\3\2\2\2-\u00b6\3\2\2\2/\u00b8\3\2"+
		"\2\2\61\u00ba\3\2\2\2\63\u00bc\3\2\2\2\65\u00be\3\2\2\2\67\u00c0\3\2\2"+
		"\29\u00c2\3\2\2\2;\u00c4\3\2\2\2=\u00c6\3\2\2\2?\u00c8\3\2\2\2A\u00ca"+
		"\3\2\2\2C\u00cc\3\2\2\2E\u00cf\3\2\2\2G\u00d1\3\2\2\2I\u00d3\3\2\2\2K"+
		"\u00d6\3\2\2\2M\u00d9\3\2\2\2O\u00e4\3\2\2\2QR\7r\2\2RS\7t\2\2ST\7q\2"+
		"\2TU\7i\2\2UV\7t\2\2VW\7c\2\2WX\7o\2\2X\4\3\2\2\2YZ\7d\2\2Z[\7g\2\2[\\"+
		"\7i\2\2\\]\7k\2\2]^\7p\2\2^\6\3\2\2\2_`\7g\2\2`a\7p\2\2ab\7f\2\2b\b\3"+
		"\2\2\2cd\7r\2\2de\7t\2\2ef\7q\2\2fg\7e\2\2gh\7g\2\2hi\7f\2\2ij\7w\2\2"+
		"jk\7t\2\2kl\7g\2\2l\n\3\2\2\2mn\7k\2\2no\7h\2\2o\f\3\2\2\2pq\7v\2\2qr"+
		"\7j\2\2rs\7g\2\2st\7p\2\2t\16\3\2\2\2uv\7g\2\2vw\7n\2\2wx\7u\2\2xy\7g"+
		"\2\2y\20\3\2\2\2z{\7y\2\2{|\7j\2\2|}\7k\2\2}~\7n\2\2~\177\7g\2\2\177\22"+
		"\3\2\2\2\u0080\u0081\7f\2\2\u0081\u0082\7q\2\2\u0082\24\3\2\2\2\u0083"+
		"\u0084\7v\2\2\u0084\u0085\7t\2\2\u0085\u0086\7w\2\2\u0086\u0087\7g\2\2"+
		"\u0087\26\3\2\2\2\u0088\u0089\7h\2\2\u0089\u008a\7c\2\2\u008a\u008b\7"+
		"n\2\2\u008b\u008c\7u\2\2\u008c\u008d\7g\2\2\u008d\30\3\2\2\2\u008e\u008f"+
		"\7k\2\2\u008f\u0090\7p\2\2\u0090\u0091\7v\2\2\u0091\32\3\2\2\2\u0092\u0093"+
		"\7d\2\2\u0093\u0094\7q\2\2\u0094\u0095\7q\2\2\u0095\u0096\7n\2\2\u0096"+
		"\u0097\7g\2\2\u0097\u0098\7c\2\2\u0098\u0099\7p\2\2\u0099\34\3\2\2\2\u009a"+
		"\u009b\7t\2\2\u009b\u009c\7g\2\2\u009c\u009d\7c\2\2\u009d\u009e\7f\2\2"+
		"\u009e\36\3\2\2\2\u009f\u00a0\7y\2\2\u00a0\u00a1\7t\2\2\u00a1\u00a2\7"+
		"k\2\2\u00a2\u00a3\7v\2\2\u00a3\u00a4\7g\2\2\u00a4 \3\2\2\2\u00a5\u00a6"+
		"\7p\2\2\u00a6\u00a7\7q\2\2\u00a7\u00a8\7v\2\2\u00a8\"\3\2\2\2\u00a9\u00aa"+
		"\7x\2\2\u00aa\u00ab\7c\2\2\u00ab\u00ac\7t\2\2\u00ac$\3\2\2\2\u00ad\u00ae"+
		"\7<\2\2\u00ae\u00af\7?\2\2\u00af&\3\2\2\2\u00b0\u00b1\7=\2\2\u00b1(\3"+
		"\2\2\2\u00b2\u00b3\7.\2\2\u00b3*\3\2\2\2\u00b4\u00b5\7\60\2\2\u00b5,\3"+
		"\2\2\2\u00b6\u00b7\7<\2\2\u00b7.\3\2\2\2\u00b8\u00b9\7*\2\2\u00b9\60\3"+
		"\2\2\2\u00ba\u00bb\7+\2\2\u00bb\62\3\2\2\2\u00bc\u00bd\7]\2\2\u00bd\64"+
		"\3\2\2\2\u00be\u00bf\7_\2\2\u00bf\66\3\2\2\2\u00c0\u00c1\t\2\2\2\u00c1"+
		"8\3\2\2\2\u00c2\u00c3\7-\2\2\u00c3:\3\2\2\2\u00c4\u00c5\7/\2\2\u00c5<"+
		"\3\2\2\2\u00c6\u00c7\7,\2\2\u00c7>\3\2\2\2\u00c8\u00c9\7\61\2\2\u00c9"+
		"@\3\2\2\2\u00ca\u00cb\7?\2\2\u00cbB\3\2\2\2\u00cc\u00cd\7>\2\2\u00cd\u00ce"+
		"\7@\2\2\u00ceD\3\2\2\2\u00cf\u00d0\7>\2\2\u00d0F\3\2\2\2\u00d1\u00d2\7"+
		"@\2\2\u00d2H\3\2\2\2\u00d3\u00d4\7>\2\2\u00d4\u00d5\7?\2\2\u00d5J\3\2"+
		"\2\2\u00d6\u00d7\7@\2\2\u00d7\u00d8\7?\2\2\u00d8L\3\2\2\2\u00d9\u00da"+
		"\7\61\2\2\u00da\u00db\7\61\2\2\u00db\u00df\3\2\2\2\u00dc\u00de\n\3\2\2"+
		"\u00dd\u00dc\3\2\2\2\u00de\u00e1\3\2\2\2\u00df\u00dd\3\2\2\2\u00df\u00e0"+
		"\3\2\2\2\u00e0\u00e2\3\2\2\2\u00e1\u00df\3\2\2\2\u00e2\u00e3\b\'\2\2\u00e3"+
		"N\3\2\2\2\u00e4\u00e8\7}\2\2\u00e5\u00e7\13\2\2\2\u00e6\u00e5\3\2\2\2"+
		"\u00e7\u00ea\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e8\u00e6\3\2\2\2\u00e9\u00eb"+
		"\3\2\2\2\u00ea\u00e8\3\2\2\2\u00eb\u00ec\7\177\2\2\u00ec\u00ed\3\2\2\2"+
		"\u00ed\u00ee\b(\2\2\u00eeP\3\2\2\2\5\2\u00df\u00e8\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}