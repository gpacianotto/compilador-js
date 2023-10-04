// Generated from ./antlr/LALGLexer.g4 by ANTLR 4.13.0
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
export default class LALGLexer extends Lexer {
	public static readonly COMENTARIO = 1;
	public static readonly COMENTARIO_MULTI = 2;
	public static readonly WS = 3;
	public static readonly PROGRAM = 4;
	public static readonly BEGIN = 5;
	public static readonly END = 6;
	public static readonly VAR = 7;
	public static readonly PROCEDURE = 8;
	public static readonly TIPO = 9;
	public static readonly READ = 10;
	public static readonly WRITE = 11;
	public static readonly BOOL_CONST = 12;
	public static readonly IF = 13;
	public static readonly THEN = 14;
	public static readonly ELSE = 15;
	public static readonly WHILE = 16;
	public static readonly DO = 17;
	public static readonly NOT = 18;
	public static readonly ATRIBUICAO = 19;
	public static readonly MAIS = 20;
	public static readonly MENOS = 21;
	public static readonly MULT = 22;
	public static readonly DIV = 23;
	public static readonly RELACAO = 24;
	public static readonly ABRE_PARENTESES = 25;
	public static readonly FECHA_PARENTESES = 26;
	public static readonly ABRE_COLCHETES = 27;
	public static readonly FECHA_COLCHETES = 28;
	public static readonly VIRGULA = 29;
	public static readonly PONTO_VIRGULA = 30;
	public static readonly DOIS_PONTOS = 31;
	public static readonly PONTO = 32;
	public static readonly AND = 33;
	public static readonly OR = 34;
	public static readonly ID = 35;
	public static readonly INT = 36;
	public static readonly FLOAT = 37;
	public static readonly ERRO = 38;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'program'", 
                                                            "'begin'", "'end'", 
                                                            "'var'", "'procedure'", 
                                                            null, "'read'", 
                                                            "'write'", null, 
                                                            "'if'", "'then'", 
                                                            "'else'", "'while'", 
                                                            "'do'", "'not'", 
                                                            "':='", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", null, 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "','", "';'", 
                                                            "':'", "'.'", 
                                                            "'and'", "'or'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "COMENTARIO", 
                                                             "COMENTARIO_MULTI", 
                                                             "WS", "PROGRAM", 
                                                             "BEGIN", "END", 
                                                             "VAR", "PROCEDURE", 
                                                             "TIPO", "READ", 
                                                             "WRITE", "BOOL_CONST", 
                                                             "IF", "THEN", 
                                                             "ELSE", "WHILE", 
                                                             "DO", "NOT", 
                                                             "ATRIBUICAO", 
                                                             "MAIS", "MENOS", 
                                                             "MULT", "DIV", 
                                                             "RELACAO", 
                                                             "ABRE_PARENTESES", 
                                                             "FECHA_PARENTESES", 
                                                             "ABRE_COLCHETES", 
                                                             "FECHA_COLCHETES", 
                                                             "VIRGULA", 
                                                             "PONTO_VIRGULA", 
                                                             "DOIS_PONTOS", 
                                                             "PONTO", "AND", 
                                                             "OR", "ID", 
                                                             "INT", "FLOAT", 
                                                             "ERRO" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"COMENTARIO", "COMENTARIO_MULTI", "WS", "PROGRAM", "BEGIN", "END", "VAR", 
		"PROCEDURE", "INT_LITERAL", "FLOAT_LITERAL", "BOOL_LITERAL", "TIPO", "READ", 
		"WRITE", "BOOL_CONST", "IF", "THEN", "ELSE", "WHILE", "DO", "NOT", "ATRIBUICAO", 
		"MAIS", "MENOS", "MULT", "DIV", "RELACAO", "ABRE_PARENTESES", "FECHA_PARENTESES", 
		"ABRE_COLCHETES", "FECHA_COLCHETES", "VIRGULA", "PONTO_VIRGULA", "DOIS_PONTOS", 
		"PONTO", "AND", "OR", "LETRA", "DIGITO", "ID", "INT", "FLOAT", "ERRO",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LALGLexer._ATN, LALGLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "LALGLexer.g4"; }

	public get literalNames(): (string | null)[] { return LALGLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LALGLexer.symbolicNames; }
	public get ruleNames(): string[] { return LALGLexer.ruleNames; }

	public get serializedATN(): number[] { return LALGLexer._serializedATN; }

	public get channelNames(): string[] { return LALGLexer.channelNames; }

	public get modeNames(): string[] { return LALGLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,38,293,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,1,0,1,0,1,0,1,0,5,0,92,8,0,
	10,0,12,0,95,9,0,1,0,1,0,1,1,1,1,5,1,101,8,1,10,1,12,1,104,9,1,1,1,1,1,
	1,1,1,1,1,2,4,2,111,8,2,11,2,12,2,112,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,170,8,11,1,12,
	1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,1,14,1,14,3,14,192,8,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,
	1,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,
	19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,
	1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,239,8,26,1,27,1,27,1,
	28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,
	1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,39,5,39,271,
	8,39,10,39,12,39,274,9,39,1,40,4,40,277,8,40,11,40,12,40,278,1,41,4,41,
	282,8,41,11,41,12,41,283,1,41,1,41,4,41,288,8,41,11,41,12,41,289,1,42,1,
	42,1,102,0,43,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,0,19,0,21,0,23,9,25,
	10,27,11,29,12,31,13,33,14,35,15,37,16,39,17,41,18,43,19,45,20,47,21,49,
	22,51,23,53,24,55,25,57,26,59,27,61,28,63,29,65,30,67,31,69,32,71,33,73,
	34,75,0,77,0,79,35,81,36,83,37,85,38,1,0,5,2,0,10,10,13,13,3,0,9,10,13,
	13,32,32,2,0,60,60,62,62,3,0,65,90,95,95,97,122,1,0,48,57,302,0,1,1,0,0,
	0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
	0,0,0,15,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,
	31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,
	0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,
	53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,
	0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,
	79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,1,87,1,0,0,0,3,98,1,0,
	0,0,5,110,1,0,0,0,7,116,1,0,0,0,9,124,1,0,0,0,11,130,1,0,0,0,13,134,1,0,
	0,0,15,138,1,0,0,0,17,148,1,0,0,0,19,152,1,0,0,0,21,158,1,0,0,0,23,169,
	1,0,0,0,25,171,1,0,0,0,27,176,1,0,0,0,29,191,1,0,0,0,31,193,1,0,0,0,33,
	196,1,0,0,0,35,201,1,0,0,0,37,206,1,0,0,0,39,212,1,0,0,0,41,215,1,0,0,0,
	43,219,1,0,0,0,45,222,1,0,0,0,47,224,1,0,0,0,49,226,1,0,0,0,51,228,1,0,
	0,0,53,238,1,0,0,0,55,240,1,0,0,0,57,242,1,0,0,0,59,244,1,0,0,0,61,246,
	1,0,0,0,63,248,1,0,0,0,65,250,1,0,0,0,67,252,1,0,0,0,69,254,1,0,0,0,71,
	256,1,0,0,0,73,260,1,0,0,0,75,263,1,0,0,0,77,265,1,0,0,0,79,267,1,0,0,0,
	81,276,1,0,0,0,83,281,1,0,0,0,85,291,1,0,0,0,87,88,5,47,0,0,88,89,5,47,
	0,0,89,93,1,0,0,0,90,92,8,0,0,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,
	0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,0,0,0,96,97,6,0,0,0,97,2,1,0,0,0,
	98,102,5,123,0,0,99,101,9,0,0,0,100,99,1,0,0,0,101,104,1,0,0,0,102,103,
	1,0,0,0,102,100,1,0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,105,106,5,125,0,
	0,106,107,1,0,0,0,107,108,6,1,0,0,108,4,1,0,0,0,109,111,7,1,0,0,110,109,
	1,0,0,0,111,112,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,114,1,0,0,0,
	114,115,6,2,0,0,115,6,1,0,0,0,116,117,5,112,0,0,117,118,5,114,0,0,118,119,
	5,111,0,0,119,120,5,103,0,0,120,121,5,114,0,0,121,122,5,97,0,0,122,123,
	5,109,0,0,123,8,1,0,0,0,124,125,5,98,0,0,125,126,5,101,0,0,126,127,5,103,
	0,0,127,128,5,105,0,0,128,129,5,110,0,0,129,10,1,0,0,0,130,131,5,101,0,
	0,131,132,5,110,0,0,132,133,5,100,0,0,133,12,1,0,0,0,134,135,5,118,0,0,
	135,136,5,97,0,0,136,137,5,114,0,0,137,14,1,0,0,0,138,139,5,112,0,0,139,
	140,5,114,0,0,140,141,5,111,0,0,141,142,5,99,0,0,142,143,5,101,0,0,143,
	144,5,100,0,0,144,145,5,117,0,0,145,146,5,114,0,0,146,147,5,101,0,0,147,
	16,1,0,0,0,148,149,5,105,0,0,149,150,5,110,0,0,150,151,5,116,0,0,151,18,
	1,0,0,0,152,153,5,102,0,0,153,154,5,108,0,0,154,155,5,111,0,0,155,156,5,
	97,0,0,156,157,5,116,0,0,157,20,1,0,0,0,158,159,5,98,0,0,159,160,5,111,
	0,0,160,161,5,111,0,0,161,162,5,108,0,0,162,163,5,101,0,0,163,164,5,97,
	0,0,164,165,5,110,0,0,165,22,1,0,0,0,166,170,3,17,8,0,167,170,3,19,9,0,
	168,170,3,21,10,0,169,166,1,0,0,0,169,167,1,0,0,0,169,168,1,0,0,0,170,24,
	1,0,0,0,171,172,5,114,0,0,172,173,5,101,0,0,173,174,5,97,0,0,174,175,5,
	100,0,0,175,26,1,0,0,0,176,177,5,119,0,0,177,178,5,114,0,0,178,179,5,105,
	0,0,179,180,5,116,0,0,180,181,5,101,0,0,181,28,1,0,0,0,182,183,5,116,0,
	0,183,184,5,114,0,0,184,185,5,117,0,0,185,192,5,101,0,0,186,187,5,102,0,
	0,187,188,5,97,0,0,188,189,5,108,0,0,189,190,5,115,0,0,190,192,5,101,0,
	0,191,182,1,0,0,0,191,186,1,0,0,0,192,30,1,0,0,0,193,194,5,105,0,0,194,
	195,5,102,0,0,195,32,1,0,0,0,196,197,5,116,0,0,197,198,5,104,0,0,198,199,
	5,101,0,0,199,200,5,110,0,0,200,34,1,0,0,0,201,202,5,101,0,0,202,203,5,
	108,0,0,203,204,5,115,0,0,204,205,5,101,0,0,205,36,1,0,0,0,206,207,5,119,
	0,0,207,208,5,104,0,0,208,209,5,105,0,0,209,210,5,108,0,0,210,211,5,101,
	0,0,211,38,1,0,0,0,212,213,5,100,0,0,213,214,5,111,0,0,214,40,1,0,0,0,215,
	216,5,110,0,0,216,217,5,111,0,0,217,218,5,116,0,0,218,42,1,0,0,0,219,220,
	5,58,0,0,220,221,5,61,0,0,221,44,1,0,0,0,222,223,5,43,0,0,223,46,1,0,0,
	0,224,225,5,45,0,0,225,48,1,0,0,0,226,227,5,42,0,0,227,50,1,0,0,0,228,229,
	5,47,0,0,229,52,1,0,0,0,230,239,7,2,0,0,231,232,5,60,0,0,232,239,5,61,0,
	0,233,234,5,62,0,0,234,239,5,61,0,0,235,239,5,61,0,0,236,237,5,60,0,0,237,
	239,5,62,0,0,238,230,1,0,0,0,238,231,1,0,0,0,238,233,1,0,0,0,238,235,1,
	0,0,0,238,236,1,0,0,0,239,54,1,0,0,0,240,241,5,40,0,0,241,56,1,0,0,0,242,
	243,5,41,0,0,243,58,1,0,0,0,244,245,5,91,0,0,245,60,1,0,0,0,246,247,5,93,
	0,0,247,62,1,0,0,0,248,249,5,44,0,0,249,64,1,0,0,0,250,251,5,59,0,0,251,
	66,1,0,0,0,252,253,5,58,0,0,253,68,1,0,0,0,254,255,5,46,0,0,255,70,1,0,
	0,0,256,257,5,97,0,0,257,258,5,110,0,0,258,259,5,100,0,0,259,72,1,0,0,0,
	260,261,5,111,0,0,261,262,5,114,0,0,262,74,1,0,0,0,263,264,7,3,0,0,264,
	76,1,0,0,0,265,266,7,4,0,0,266,78,1,0,0,0,267,272,3,75,37,0,268,271,3,75,
	37,0,269,271,3,77,38,0,270,268,1,0,0,0,270,269,1,0,0,0,271,274,1,0,0,0,
	272,270,1,0,0,0,272,273,1,0,0,0,273,80,1,0,0,0,274,272,1,0,0,0,275,277,
	3,77,38,0,276,275,1,0,0,0,277,278,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,
	0,279,82,1,0,0,0,280,282,3,77,38,0,281,280,1,0,0,0,282,283,1,0,0,0,283,
	281,1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,287,5,46,0,0,286,288,3,
	77,38,0,287,286,1,0,0,0,288,289,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,
	290,84,1,0,0,0,291,292,9,0,0,0,292,86,1,0,0,0,12,0,93,102,112,169,191,238,
	270,272,278,283,289,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LALGLexer.__ATN) {
			LALGLexer.__ATN = new ATNDeserializer().deserialize(LALGLexer._serializedATN);
		}

		return LALGLexer.__ATN;
	}


	static DecisionsToDFA = LALGLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}