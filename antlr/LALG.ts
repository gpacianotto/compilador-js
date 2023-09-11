// Generated from ./antlr/LALG.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LALG extends Lexer {
	public static readonly PROGRAM = 1;
	public static readonly BEGIN = 2;
	public static readonly END = 3;
	public static readonly PROCEDURE = 4;
	public static readonly IF = 5;
	public static readonly THEN = 6;
	public static readonly ELSE = 7;
	public static readonly WHILE = 8;
	public static readonly DO = 9;
	public static readonly TRUE = 10;
	public static readonly FALSE = 11;
	public static readonly INT = 12;
	public static readonly BOOLEAN = 13;
	public static readonly READ = 14;
	public static readonly WRITE = 15;
	public static readonly NOT = 16;
	public static readonly VAR = 17;
	public static readonly ASSIGN = 18;
	public static readonly SEMICOLON = 19;
	public static readonly COMMA = 20;
	public static readonly DOT = 21;
	public static readonly COLON = 22;
	public static readonly LPAREN = 23;
	public static readonly RPAREN = 24;
	public static readonly LBRACKET = 25;
	public static readonly RBRACKET = 26;
	public static readonly LETRA = 27;
	public static readonly PLUS = 28;
	public static readonly MINUS = 29;
	public static readonly TIMES = 30;
	public static readonly DIV = 31;
	public static readonly EQUAL = 32;
	public static readonly DIFF = 33;
	public static readonly LESS_THEN = 34;
	public static readonly GREATER_THEN = 35;
	public static readonly LESS_TTHEN_EQUAL = 36;
	public static readonly GREATER_THEN_EQUAL = 37;
	public static readonly COMMENT = 38;
	public static readonly MULTILINE_COMMENT = 39;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'program'", 
                                                            "'begin'", "'end'", 
                                                            "'procedure'", 
                                                            "'if'", "'then'", 
                                                            "'else'", "'while'", 
                                                            "'do'", "'true'", 
                                                            "'false'", "'int'", 
                                                            "'boolean'", 
                                                            "'read'", "'write'", 
                                                            "'not'", "'var'", 
                                                            "':='", "';'", 
                                                            "','", "'.'", 
                                                            "':'", "'('", 
                                                            "')'", "'['", 
                                                            "']'", null, 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'='", "'<>'", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "PROGRAM", 
                                                             "BEGIN", "END", 
                                                             "PROCEDURE", 
                                                             "IF", "THEN", 
                                                             "ELSE", "WHILE", 
                                                             "DO", "TRUE", 
                                                             "FALSE", "INT", 
                                                             "BOOLEAN", 
                                                             "READ", "WRITE", 
                                                             "NOT", "VAR", 
                                                             "ASSIGN", "SEMICOLON", 
                                                             "COMMA", "DOT", 
                                                             "COLON", "LPAREN", 
                                                             "RPAREN", "LBRACKET", 
                                                             "RBRACKET", 
                                                             "LETRA", "PLUS", 
                                                             "MINUS", "TIMES", 
                                                             "DIV", "EQUAL", 
                                                             "DIFF", "LESS_THEN", 
                                                             "GREATER_THEN", 
                                                             "LESS_TTHEN_EQUAL", 
                                                             "GREATER_THEN_EQUAL", 
                                                             "COMMENT", 
                                                             "MULTILINE_COMMENT" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"PROGRAM", "BEGIN", "END", "PROCEDURE", "IF", "THEN", "ELSE", "WHILE", 
		"DO", "TRUE", "FALSE", "INT", "BOOLEAN", "READ", "WRITE", "NOT", "VAR", 
		"ASSIGN", "SEMICOLON", "COMMA", "DOT", "COLON", "LPAREN", "RPAREN", "LBRACKET", 
		"RBRACKET", "LETRA", "PLUS", "MINUS", "TIMES", "DIV", "EQUAL", "DIFF", 
		"LESS_THEN", "GREATER_THEN", "LESS_TTHEN_EQUAL", "GREATER_THEN_EQUAL", 
		"COMMENT", "MULTILINE_COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LALG._ATN, LALG.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "LALG.g4"; }

	public get literalNames(): (string | null)[] { return LALG.literalNames; }
	public get symbolicNames(): (string | null)[] { return LALG.symbolicNames; }
	public get ruleNames(): string[] { return LALG.ruleNames; }

	public get serializedATN(): number[] { return LALG._serializedATN; }

	public get channelNames(): string[] { return LALG.channelNames; }

	public get modeNames(): string[] { return LALG.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,39,237,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,
	2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,
	5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,
	9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,
	12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,
	1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,
	18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,
	1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,
	32,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,37,1,37,
	5,37,220,8,37,10,37,12,37,223,9,37,1,37,1,37,1,38,1,38,5,38,229,8,38,10,
	38,12,38,232,9,38,1,38,1,38,1,38,1,38,1,230,0,39,1,1,3,2,5,3,7,4,9,5,11,
	6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,
	37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,
	61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,1,0,2,3,0,65,90,95,
	95,97,122,2,0,10,10,13,13,238,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
	0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
	19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,
	0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,
	41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,
	0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,
	63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,
	0,0,0,75,1,0,0,0,0,77,1,0,0,0,1,79,1,0,0,0,3,87,1,0,0,0,5,93,1,0,0,0,7,
	97,1,0,0,0,9,107,1,0,0,0,11,110,1,0,0,0,13,115,1,0,0,0,15,120,1,0,0,0,17,
	126,1,0,0,0,19,129,1,0,0,0,21,134,1,0,0,0,23,140,1,0,0,0,25,144,1,0,0,0,
	27,152,1,0,0,0,29,157,1,0,0,0,31,163,1,0,0,0,33,167,1,0,0,0,35,171,1,0,
	0,0,37,174,1,0,0,0,39,176,1,0,0,0,41,178,1,0,0,0,43,180,1,0,0,0,45,182,
	1,0,0,0,47,184,1,0,0,0,49,186,1,0,0,0,51,188,1,0,0,0,53,190,1,0,0,0,55,
	192,1,0,0,0,57,194,1,0,0,0,59,196,1,0,0,0,61,198,1,0,0,0,63,200,1,0,0,0,
	65,202,1,0,0,0,67,205,1,0,0,0,69,207,1,0,0,0,71,209,1,0,0,0,73,212,1,0,
	0,0,75,215,1,0,0,0,77,226,1,0,0,0,79,80,5,112,0,0,80,81,5,114,0,0,81,82,
	5,111,0,0,82,83,5,103,0,0,83,84,5,114,0,0,84,85,5,97,0,0,85,86,5,109,0,
	0,86,2,1,0,0,0,87,88,5,98,0,0,88,89,5,101,0,0,89,90,5,103,0,0,90,91,5,105,
	0,0,91,92,5,110,0,0,92,4,1,0,0,0,93,94,5,101,0,0,94,95,5,110,0,0,95,96,
	5,100,0,0,96,6,1,0,0,0,97,98,5,112,0,0,98,99,5,114,0,0,99,100,5,111,0,0,
	100,101,5,99,0,0,101,102,5,101,0,0,102,103,5,100,0,0,103,104,5,117,0,0,
	104,105,5,114,0,0,105,106,5,101,0,0,106,8,1,0,0,0,107,108,5,105,0,0,108,
	109,5,102,0,0,109,10,1,0,0,0,110,111,5,116,0,0,111,112,5,104,0,0,112,113,
	5,101,0,0,113,114,5,110,0,0,114,12,1,0,0,0,115,116,5,101,0,0,116,117,5,
	108,0,0,117,118,5,115,0,0,118,119,5,101,0,0,119,14,1,0,0,0,120,121,5,119,
	0,0,121,122,5,104,0,0,122,123,5,105,0,0,123,124,5,108,0,0,124,125,5,101,
	0,0,125,16,1,0,0,0,126,127,5,100,0,0,127,128,5,111,0,0,128,18,1,0,0,0,129,
	130,5,116,0,0,130,131,5,114,0,0,131,132,5,117,0,0,132,133,5,101,0,0,133,
	20,1,0,0,0,134,135,5,102,0,0,135,136,5,97,0,0,136,137,5,108,0,0,137,138,
	5,115,0,0,138,139,5,101,0,0,139,22,1,0,0,0,140,141,5,105,0,0,141,142,5,
	110,0,0,142,143,5,116,0,0,143,24,1,0,0,0,144,145,5,98,0,0,145,146,5,111,
	0,0,146,147,5,111,0,0,147,148,5,108,0,0,148,149,5,101,0,0,149,150,5,97,
	0,0,150,151,5,110,0,0,151,26,1,0,0,0,152,153,5,114,0,0,153,154,5,101,0,
	0,154,155,5,97,0,0,155,156,5,100,0,0,156,28,1,0,0,0,157,158,5,119,0,0,158,
	159,5,114,0,0,159,160,5,105,0,0,160,161,5,116,0,0,161,162,5,101,0,0,162,
	30,1,0,0,0,163,164,5,110,0,0,164,165,5,111,0,0,165,166,5,116,0,0,166,32,
	1,0,0,0,167,168,5,118,0,0,168,169,5,97,0,0,169,170,5,114,0,0,170,34,1,0,
	0,0,171,172,5,58,0,0,172,173,5,61,0,0,173,36,1,0,0,0,174,175,5,59,0,0,175,
	38,1,0,0,0,176,177,5,44,0,0,177,40,1,0,0,0,178,179,5,46,0,0,179,42,1,0,
	0,0,180,181,5,58,0,0,181,44,1,0,0,0,182,183,5,40,0,0,183,46,1,0,0,0,184,
	185,5,41,0,0,185,48,1,0,0,0,186,187,5,91,0,0,187,50,1,0,0,0,188,189,5,93,
	0,0,189,52,1,0,0,0,190,191,7,0,0,0,191,54,1,0,0,0,192,193,5,43,0,0,193,
	56,1,0,0,0,194,195,5,45,0,0,195,58,1,0,0,0,196,197,5,42,0,0,197,60,1,0,
	0,0,198,199,5,47,0,0,199,62,1,0,0,0,200,201,5,61,0,0,201,64,1,0,0,0,202,
	203,5,60,0,0,203,204,5,62,0,0,204,66,1,0,0,0,205,206,5,60,0,0,206,68,1,
	0,0,0,207,208,5,62,0,0,208,70,1,0,0,0,209,210,5,60,0,0,210,211,5,61,0,0,
	211,72,1,0,0,0,212,213,5,62,0,0,213,214,5,61,0,0,214,74,1,0,0,0,215,216,
	5,47,0,0,216,217,5,47,0,0,217,221,1,0,0,0,218,220,8,1,0,0,219,218,1,0,0,
	0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,224,1,0,0,0,223,221,
	1,0,0,0,224,225,6,37,0,0,225,76,1,0,0,0,226,230,5,123,0,0,227,229,9,0,0,
	0,228,227,1,0,0,0,229,232,1,0,0,0,230,231,1,0,0,0,230,228,1,0,0,0,231,233,
	1,0,0,0,232,230,1,0,0,0,233,234,5,125,0,0,234,235,1,0,0,0,235,236,6,38,
	0,0,236,78,1,0,0,0,3,0,221,230,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LALG.__ATN) {
			LALG.__ATN = new ATNDeserializer().deserialize(LALG._serializedATN);
		}

		return LALG.__ATN;
	}


	static DecisionsToDFA = LALG._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}