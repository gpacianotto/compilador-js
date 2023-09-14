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
		DOIS_PONTOS=31, PONTO=32, ID=33, INT=34, FLOAT=35, ERRO=36;
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
			"VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", "PONTO", "LETRA", "DIGITO", 
			"ID", "INT", "FLOAT", "ERRO"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'program'", "'begin'", "'end'", "'var'", "'procedure'", 
			"'int'", "'float'", "'boolean'", "'read'", "'write'", null, "'if'", "'then'", 
			"'else'", "'while'", "'do'", "'not'", "':='", "'+'", "'-'", "'*'", "'/'", 
			null, "'('", "')'", "','", "';'", "':'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", 
			"VAR", "PROCEDURE", "INT_LITERAL", "FLOAT_LITERAL", "BOOL_CONST", "READ", 
			"WRITE", "BOOLEAN_LITERAL", "IF", "THEN", "ELSE", "WHILE", "DO", "NOT", 
			"ATRIBUICAO", "MAIS", "MENOS", "MULT", "DIV", "RELACAO", "ABRE_PARENTESES", 
			"FECHA_PARENTESES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", "PONTO", 
			"ID", "INT", "FLOAT", "ERRO"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2&\u010d\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\3\2\3\2\3\2\3\2\7\2T\n\2\f"+
		"\2\16\2W\13\2\3\2\3\2\3\3\3\3\7\3]\n\3\f\3\16\3`\13\3\3\3\3\3\3\3\3\3"+
		"\3\4\6\4g\n\4\r\4\16\4h\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00b3\n\17"+
		"\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3\26"+
		"\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\3\33\3\33\5\33\u00e2\n\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37"+
		"\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3$\7$\u00f7\n$\f$\16$\u00fa\13$\3%\6"+
		"%\u00fd\n%\r%\16%\u00fe\3&\6&\u0102\n&\r&\16&\u0103\3&\3&\6&\u0108\n&"+
		"\r&\16&\u0109\3\'\3\'\3^\2(\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25"+
		"\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32"+
		"\63\33\65\34\67\359\36;\37= ?!A\"C\2E\2G#I$K%M&\3\2\7\4\2\f\f\17\17\5"+
		"\2\13\f\17\17\"\"\4\2>>@@\5\2C\\aac|\3\2\62;\2\u0117\2\3\3\2\2\2\2\5\3"+
		"\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2"+
		"\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3"+
		"\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'"+
		"\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63"+
		"\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2"+
		"?\3\2\2\2\2A\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\3O\3"+
		"\2\2\2\5Z\3\2\2\2\7f\3\2\2\2\tl\3\2\2\2\13t\3\2\2\2\rz\3\2\2\2\17~\3\2"+
		"\2\2\21\u0082\3\2\2\2\23\u008c\3\2\2\2\25\u0090\3\2\2\2\27\u0096\3\2\2"+
		"\2\31\u009e\3\2\2\2\33\u00a3\3\2\2\2\35\u00b2\3\2\2\2\37\u00b4\3\2\2\2"+
		"!\u00b7\3\2\2\2#\u00bc\3\2\2\2%\u00c1\3\2\2\2\'\u00c7\3\2\2\2)\u00ca\3"+
		"\2\2\2+\u00ce\3\2\2\2-\u00d1\3\2\2\2/\u00d3\3\2\2\2\61\u00d5\3\2\2\2\63"+
		"\u00d7\3\2\2\2\65\u00e1\3\2\2\2\67\u00e3\3\2\2\29\u00e5\3\2\2\2;\u00e7"+
		"\3\2\2\2=\u00e9\3\2\2\2?\u00eb\3\2\2\2A\u00ed\3\2\2\2C\u00ef\3\2\2\2E"+
		"\u00f1\3\2\2\2G\u00f3\3\2\2\2I\u00fc\3\2\2\2K\u0101\3\2\2\2M\u010b\3\2"+
		"\2\2OP\7\61\2\2PQ\7\61\2\2QU\3\2\2\2RT\n\2\2\2SR\3\2\2\2TW\3\2\2\2US\3"+
		"\2\2\2UV\3\2\2\2VX\3\2\2\2WU\3\2\2\2XY\b\2\2\2Y\4\3\2\2\2Z^\7}\2\2[]\13"+
		"\2\2\2\\[\3\2\2\2]`\3\2\2\2^_\3\2\2\2^\\\3\2\2\2_a\3\2\2\2`^\3\2\2\2a"+
		"b\7\177\2\2bc\3\2\2\2cd\b\3\2\2d\6\3\2\2\2eg\t\3\2\2fe\3\2\2\2gh\3\2\2"+
		"\2hf\3\2\2\2hi\3\2\2\2ij\3\2\2\2jk\b\4\2\2k\b\3\2\2\2lm\7r\2\2mn\7t\2"+
		"\2no\7q\2\2op\7i\2\2pq\7t\2\2qr\7c\2\2rs\7o\2\2s\n\3\2\2\2tu\7d\2\2uv"+
		"\7g\2\2vw\7i\2\2wx\7k\2\2xy\7p\2\2y\f\3\2\2\2z{\7g\2\2{|\7p\2\2|}\7f\2"+
		"\2}\16\3\2\2\2~\177\7x\2\2\177\u0080\7c\2\2\u0080\u0081\7t\2\2\u0081\20"+
		"\3\2\2\2\u0082\u0083\7r\2\2\u0083\u0084\7t\2\2\u0084\u0085\7q\2\2\u0085"+
		"\u0086\7e\2\2\u0086\u0087\7g\2\2\u0087\u0088\7f\2\2\u0088\u0089\7w\2\2"+
		"\u0089\u008a\7t\2\2\u008a\u008b\7g\2\2\u008b\22\3\2\2\2\u008c\u008d\7"+
		"k\2\2\u008d\u008e\7p\2\2\u008e\u008f\7v\2\2\u008f\24\3\2\2\2\u0090\u0091"+
		"\7h\2\2\u0091\u0092\7n\2\2\u0092\u0093\7q\2\2\u0093\u0094\7c\2\2\u0094"+
		"\u0095\7v\2\2\u0095\26\3\2\2\2\u0096\u0097\7d\2\2\u0097\u0098\7q\2\2\u0098"+
		"\u0099\7q\2\2\u0099\u009a\7n\2\2\u009a\u009b\7g\2\2\u009b\u009c\7c\2\2"+
		"\u009c\u009d\7p\2\2\u009d\30\3\2\2\2\u009e\u009f\7t\2\2\u009f\u00a0\7"+
		"g\2\2\u00a0\u00a1\7c\2\2\u00a1\u00a2\7f\2\2\u00a2\32\3\2\2\2\u00a3\u00a4"+
		"\7y\2\2\u00a4\u00a5\7t\2\2\u00a5\u00a6\7k\2\2\u00a6\u00a7\7v\2\2\u00a7"+
		"\u00a8\7g\2\2\u00a8\34\3\2\2\2\u00a9\u00aa\7v\2\2\u00aa\u00ab\7t\2\2\u00ab"+
		"\u00ac\7w\2\2\u00ac\u00b3\7g\2\2\u00ad\u00ae\7h\2\2\u00ae\u00af\7c\2\2"+
		"\u00af\u00b0\7n\2\2\u00b0\u00b1\7u\2\2\u00b1\u00b3\7g\2\2\u00b2\u00a9"+
		"\3\2\2\2\u00b2\u00ad\3\2\2\2\u00b3\36\3\2\2\2\u00b4\u00b5\7k\2\2\u00b5"+
		"\u00b6\7h\2\2\u00b6 \3\2\2\2\u00b7\u00b8\7v\2\2\u00b8\u00b9\7j\2\2\u00b9"+
		"\u00ba\7g\2\2\u00ba\u00bb\7p\2\2\u00bb\"\3\2\2\2\u00bc\u00bd\7g\2\2\u00bd"+
		"\u00be\7n\2\2\u00be\u00bf\7u\2\2\u00bf\u00c0\7g\2\2\u00c0$\3\2\2\2\u00c1"+
		"\u00c2\7y\2\2\u00c2\u00c3\7j\2\2\u00c3\u00c4\7k\2\2\u00c4\u00c5\7n\2\2"+
		"\u00c5\u00c6\7g\2\2\u00c6&\3\2\2\2\u00c7\u00c8\7f\2\2\u00c8\u00c9\7q\2"+
		"\2\u00c9(\3\2\2\2\u00ca\u00cb\7p\2\2\u00cb\u00cc\7q\2\2\u00cc\u00cd\7"+
		"v\2\2\u00cd*\3\2\2\2\u00ce\u00cf\7<\2\2\u00cf\u00d0\7?\2\2\u00d0,\3\2"+
		"\2\2\u00d1\u00d2\7-\2\2\u00d2.\3\2\2\2\u00d3\u00d4\7/\2\2\u00d4\60\3\2"+
		"\2\2\u00d5\u00d6\7,\2\2\u00d6\62\3\2\2\2\u00d7\u00d8\7\61\2\2\u00d8\64"+
		"\3\2\2\2\u00d9\u00e2\t\4\2\2\u00da\u00db\7>\2\2\u00db\u00e2\7?\2\2\u00dc"+
		"\u00dd\7@\2\2\u00dd\u00e2\7?\2\2\u00de\u00e2\7?\2\2\u00df\u00e0\7>\2\2"+
		"\u00e0\u00e2\7@\2\2\u00e1\u00d9\3\2\2\2\u00e1\u00da\3\2\2\2\u00e1\u00dc"+
		"\3\2\2\2\u00e1\u00de\3\2\2\2\u00e1\u00df\3\2\2\2\u00e2\66\3\2\2\2\u00e3"+
		"\u00e4\7*\2\2\u00e48\3\2\2\2\u00e5\u00e6\7+\2\2\u00e6:\3\2\2\2\u00e7\u00e8"+
		"\7.\2\2\u00e8<\3\2\2\2\u00e9\u00ea\7=\2\2\u00ea>\3\2\2\2\u00eb\u00ec\7"+
		"<\2\2\u00ec@\3\2\2\2\u00ed\u00ee\7\60\2\2\u00eeB\3\2\2\2\u00ef\u00f0\t"+
		"\5\2\2\u00f0D\3\2\2\2\u00f1\u00f2\t\6\2\2\u00f2F\3\2\2\2\u00f3\u00f8\5"+
		"C\"\2\u00f4\u00f7\5C\"\2\u00f5\u00f7\5E#\2\u00f6\u00f4\3\2\2\2\u00f6\u00f5"+
		"\3\2\2\2\u00f7\u00fa\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9"+
		"H\3\2\2\2\u00fa\u00f8\3\2\2\2\u00fb\u00fd\5E#\2\u00fc\u00fb\3\2\2\2\u00fd"+
		"\u00fe\3\2\2\2\u00fe\u00fc\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ffJ\3\2\2\2"+
		"\u0100\u0102\5E#\2\u0101\u0100\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0101"+
		"\3\2\2\2\u0103\u0104\3\2\2\2\u0104\u0105\3\2\2\2\u0105\u0107\7\60\2\2"+
		"\u0106\u0108\5E#\2\u0107\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109\u0107"+
		"\3\2\2\2\u0109\u010a\3\2\2\2\u010aL\3\2\2\2\u010b\u010c\13\2\2\2\u010c"+
		"N\3\2\2\2\r\2U^h\u00b2\u00e1\u00f6\u00f8\u00fe\u0103\u0109\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}