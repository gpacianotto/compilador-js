// Generated from ./antlr/LALGParser.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LALGParserListener from "./LALGParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LALGParser extends Parser {
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
	public static readonly RULE_programa = 0;
	public static readonly RULE_bloco = 1;
	public static readonly RULE_declaracoesVariaveis = 2;
	public static readonly RULE_declaracaoVariaveis = 3;
	public static readonly RULE_listaIdentificadores = 4;
	public static readonly RULE_declaracoesSubrotinas = 5;
	public static readonly RULE_declaracaoProcedimento = 6;
	public static readonly RULE_parametrosFormais = 7;
	public static readonly RULE_secaoParametrosFormais = 8;
	public static readonly RULE_comandoComposto = 9;
	public static readonly RULE_comando = 10;
	public static readonly RULE_atribuicao = 11;
	public static readonly RULE_chamadaProcedimento = 12;
	public static readonly RULE_comandoCondicional = 13;
	public static readonly RULE_comandoRepetitivo = 14;
	public static readonly RULE_expressao = 15;
	public static readonly RULE_expressaoSimples = 16;
	public static readonly RULE_termo = 17;
	public static readonly RULE_fator = 18;
	public static readonly RULE_variavel = 19;
	public static readonly RULE_listaExpressoes = 20;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programa", "bloco", "declaracoesVariaveis", "declaracaoVariaveis", "listaIdentificadores", 
		"declaracoesSubrotinas", "declaracaoProcedimento", "parametrosFormais", 
		"secaoParametrosFormais", "comandoComposto", "comando", "atribuicao", 
		"chamadaProcedimento", "comandoCondicional", "comandoRepetitivo", "expressao", 
		"expressaoSimples", "termo", "fator", "variavel", "listaExpressoes",
	];
	public get grammarFileName(): string { return "LALGParser.g4"; }
	public get literalNames(): (string | null)[] { return LALGParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LALGParser.symbolicNames; }
	public get ruleNames(): string[] { return LALGParser.ruleNames; }
	public get serializedATN(): number[] { return LALGParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LALGParser._ATN, LALGParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public programa(): ProgramaContext {
		let localctx: ProgramaContext = new ProgramaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LALGParser.RULE_programa);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			this.match(LALGParser.PROGRAM);
			this.state = 43;
			this.match(LALGParser.ID);
			this.state = 44;
			this.match(LALGParser.PONTO_VIRGULA);
			this.state = 45;
			this.bloco();
			this.state = 46;
			this.match(LALGParser.PONTO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bloco(): BlocoContext {
		let localctx: BlocoContext = new BlocoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LALGParser.RULE_bloco);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 48;
				this.declaracoesVariaveis();
				}
			}

			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 51;
				this.declaracoesSubrotinas();
				}
			}

			this.state = 54;
			this.comandoComposto();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracoesVariaveis(): DeclaracoesVariaveisContext {
		let localctx: DeclaracoesVariaveisContext = new DeclaracoesVariaveisContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LALGParser.RULE_declaracoesVariaveis);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.declaracaoVariaveis();
			this.state = 61;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 57;
					this.match(LALGParser.PONTO_VIRGULA);
					this.state = 58;
					this.declaracaoVariaveis();
					}
					}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 64;
			this.match(LALGParser.PONTO_VIRGULA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracaoVariaveis(): DeclaracaoVariaveisContext {
		let localctx: DeclaracaoVariaveisContext = new DeclaracaoVariaveisContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LALGParser.RULE_declaracaoVariaveis);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			this.match(LALGParser.TIPO);
			this.state = 67;
			this.listaIdentificadores();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listaIdentificadores(): ListaIdentificadoresContext {
		let localctx: ListaIdentificadoresContext = new ListaIdentificadoresContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LALGParser.RULE_listaIdentificadores);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.match(LALGParser.ID);
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===29) {
				{
				{
				this.state = 70;
				this.match(LALGParser.VIRGULA);
				this.state = 71;
				this.match(LALGParser.ID);
				}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracoesSubrotinas(): DeclaracoesSubrotinasContext {
		let localctx: DeclaracoesSubrotinasContext = new DeclaracoesSubrotinasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LALGParser.RULE_declaracoesSubrotinas);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.declaracaoProcedimento();
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===30) {
				{
				{
				this.state = 78;
				this.match(LALGParser.PONTO_VIRGULA);
				this.state = 79;
				this.declaracaoProcedimento();
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaracaoProcedimento(): DeclaracaoProcedimentoContext {
		let localctx: DeclaracaoProcedimentoContext = new DeclaracaoProcedimentoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LALGParser.RULE_declaracaoProcedimento);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this.match(LALGParser.PROCEDURE);
			this.state = 86;
			this.match(LALGParser.ID);
			this.state = 87;
			this.parametrosFormais();
			this.state = 88;
			this.match(LALGParser.PONTO_VIRGULA);
			this.state = 89;
			this.bloco();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parametrosFormais(): ParametrosFormaisContext {
		let localctx: ParametrosFormaisContext = new ParametrosFormaisContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LALGParser.RULE_parametrosFormais);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 91;
			this.match(LALGParser.ABRE_PARENTESES);
			this.state = 92;
			this.secaoParametrosFormais();
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===30) {
				{
				{
				this.state = 93;
				this.match(LALGParser.PONTO_VIRGULA);
				this.state = 94;
				this.secaoParametrosFormais();
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 100;
			this.match(LALGParser.FECHA_PARENTESES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public secaoParametrosFormais(): SecaoParametrosFormaisContext {
		let localctx: SecaoParametrosFormaisContext = new SecaoParametrosFormaisContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LALGParser.RULE_secaoParametrosFormais);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 102;
				this.match(LALGParser.VAR);
				}
			}

			this.state = 105;
			this.listaIdentificadores();
			this.state = 106;
			this.match(LALGParser.DOIS_PONTOS);
			this.state = 107;
			this.match(LALGParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comandoComposto(): ComandoCompostoContext {
		let localctx: ComandoCompostoContext = new ComandoCompostoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LALGParser.RULE_comandoComposto);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this.match(LALGParser.BEGIN);
			this.state = 110;
			this.comando();
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===30) {
				{
				{
				this.state = 111;
				this.match(LALGParser.PONTO_VIRGULA);
				this.state = 112;
				this.comando();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
			this.match(LALGParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comando(): ComandoContext {
		let localctx: ComandoContext = new ComandoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LALGParser.RULE_comando);
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 120;
				this.atribuicao();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 121;
				this.chamadaProcedimento();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 122;
				this.comandoComposto();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 123;
				this.comandoCondicional();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 124;
				this.comandoRepetitivo();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atribuicao(): AtribuicaoContext {
		let localctx: AtribuicaoContext = new AtribuicaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LALGParser.RULE_atribuicao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			this.variavel();
			this.state = 128;
			this.match(LALGParser.ATRIBUICAO);
			this.state = 129;
			this.expressao();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chamadaProcedimento(): ChamadaProcedimentoContext {
		let localctx: ChamadaProcedimentoContext = new ChamadaProcedimentoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LALGParser.RULE_chamadaProcedimento);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			this.match(LALGParser.ID);
			this.state = 132;
			this.match(LALGParser.ABRE_PARENTESES);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & 67181057) !== 0)) {
				{
				this.state = 133;
				this.listaExpressoes();
				}
			}

			this.state = 136;
			this.match(LALGParser.FECHA_PARENTESES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comandoCondicional(): ComandoCondicionalContext {
		let localctx: ComandoCondicionalContext = new ComandoCondicionalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LALGParser.RULE_comandoCondicional);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this.match(LALGParser.IF);
			this.state = 139;
			this.expressao();
			this.state = 140;
			this.match(LALGParser.THEN);
			this.state = 141;
			this.comando();
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 142;
				this.match(LALGParser.ELSE);
				this.state = 143;
				this.comando();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comandoRepetitivo(): ComandoRepetitivoContext {
		let localctx: ComandoRepetitivoContext = new ComandoRepetitivoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LALGParser.RULE_comandoRepetitivo);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 146;
			this.match(LALGParser.WHILE);
			this.state = 147;
			this.expressao();
			this.state = 148;
			this.match(LALGParser.DO);
			this.state = 149;
			this.comando();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressao(): ExpressaoContext {
		let localctx: ExpressaoContext = new ExpressaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LALGParser.RULE_expressao);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.expressaoSimples();
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 152;
				this.match(LALGParser.RELACAO);
				this.state = 153;
				this.expressaoSimples();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressaoSimples(): ExpressaoSimplesContext {
		let localctx: ExpressaoSimplesContext = new ExpressaoSimplesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LALGParser.RULE_expressaoSimples);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20 || _la===21) {
				{
				this.state = 156;
				_la = this._input.LA(1);
				if(!(_la===20 || _la===21)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 159;
			this.termo();
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 16387) !== 0)) {
				{
				{
				this.state = 160;
				_la = this._input.LA(1);
				if(!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 16387) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 161;
				this.termo();
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public termo(): TermoContext {
		let localctx: TermoContext = new TermoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LALGParser.RULE_termo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
			this.fator();
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 2051) !== 0)) {
				{
				{
				this.state = 168;
				_la = this._input.LA(1);
				if(!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 2051) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 169;
				this.fator();
				}
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fator(): FatorContext {
		let localctx: FatorContext = new FatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LALGParser.RULE_fator);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 175;
				this.variavel();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 176;
				this.match(LALGParser.TIPO);
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 177;
				this.match(LALGParser.ABRE_PARENTESES);
				this.state = 178;
				this.expressao();
				this.state = 179;
				this.match(LALGParser.FECHA_PARENTESES);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 181;
				this.match(LALGParser.NOT);
				this.state = 182;
				this.fator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variavel(): VariavelContext {
		let localctx: VariavelContext = new VariavelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LALGParser.RULE_variavel);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 185;
				this.match(LALGParser.ID);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 186;
				this.match(LALGParser.ID);
				this.state = 187;
				this.match(LALGParser.ABRE_COLCHETES);
				this.state = 188;
				this.expressao();
				this.state = 189;
				this.match(LALGParser.FECHA_COLCHETES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listaExpressoes(): ListaExpressoesContext {
		let localctx: ListaExpressoesContext = new ListaExpressoesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LALGParser.RULE_listaExpressoes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			this.expressao();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===29) {
				{
				{
				this.state = 194;
				this.match(LALGParser.VIRGULA);
				this.state = 195;
				this.expressao();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,38,202,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,1,0,1,0,1,0,1,0,1,0,1,0,1,1,3,1,50,8,
	1,1,1,3,1,53,8,1,1,1,1,1,1,2,1,2,1,2,5,2,60,8,2,10,2,12,2,63,9,2,1,2,1,
	2,1,3,1,3,1,3,1,4,1,4,1,4,5,4,73,8,4,10,4,12,4,76,9,4,1,5,1,5,1,5,5,5,81,
	8,5,10,5,12,5,84,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,96,8,7,
	10,7,12,7,99,9,7,1,7,1,7,1,8,3,8,104,8,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,
	9,5,9,114,8,9,10,9,12,9,117,9,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,126,
	8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,3,12,135,8,12,1,12,1,12,1,13,1,
	13,1,13,1,13,1,13,1,13,3,13,145,8,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,
	1,15,3,15,155,8,15,1,16,3,16,158,8,16,1,16,1,16,1,16,5,16,163,8,16,10,16,
	12,16,166,9,16,1,17,1,17,1,17,5,17,171,8,17,10,17,12,17,174,9,17,1,18,1,
	18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,184,8,18,1,19,1,19,1,19,1,19,1,19,
	1,19,3,19,192,8,19,1,20,1,20,1,20,5,20,197,8,20,10,20,12,20,200,9,20,1,
	20,0,0,21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,3,
	1,0,20,21,2,0,20,21,34,34,2,0,22,23,33,33,203,0,42,1,0,0,0,2,49,1,0,0,0,
	4,56,1,0,0,0,6,66,1,0,0,0,8,69,1,0,0,0,10,77,1,0,0,0,12,85,1,0,0,0,14,91,
	1,0,0,0,16,103,1,0,0,0,18,109,1,0,0,0,20,125,1,0,0,0,22,127,1,0,0,0,24,
	131,1,0,0,0,26,138,1,0,0,0,28,146,1,0,0,0,30,151,1,0,0,0,32,157,1,0,0,0,
	34,167,1,0,0,0,36,183,1,0,0,0,38,191,1,0,0,0,40,193,1,0,0,0,42,43,5,4,0,
	0,43,44,5,35,0,0,44,45,5,30,0,0,45,46,3,2,1,0,46,47,5,32,0,0,47,1,1,0,0,
	0,48,50,3,4,2,0,49,48,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,53,3,10,5,
	0,52,51,1,0,0,0,52,53,1,0,0,0,53,54,1,0,0,0,54,55,3,18,9,0,55,3,1,0,0,0,
	56,61,3,6,3,0,57,58,5,30,0,0,58,60,3,6,3,0,59,57,1,0,0,0,60,63,1,0,0,0,
	61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,65,5,30,0,0,
	65,5,1,0,0,0,66,67,5,9,0,0,67,68,3,8,4,0,68,7,1,0,0,0,69,74,5,35,0,0,70,
	71,5,29,0,0,71,73,5,35,0,0,72,70,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,
	75,1,0,0,0,75,9,1,0,0,0,76,74,1,0,0,0,77,82,3,12,6,0,78,79,5,30,0,0,79,
	81,3,12,6,0,80,78,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,
	11,1,0,0,0,84,82,1,0,0,0,85,86,5,8,0,0,86,87,5,35,0,0,87,88,3,14,7,0,88,
	89,5,30,0,0,89,90,3,2,1,0,90,13,1,0,0,0,91,92,5,25,0,0,92,97,3,16,8,0,93,
	94,5,30,0,0,94,96,3,16,8,0,95,93,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,
	98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,5,26,0,0,101,15,1,0,0,0,
	102,104,5,7,0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,0,105,106,
	3,8,4,0,106,107,5,31,0,0,107,108,5,35,0,0,108,17,1,0,0,0,109,110,5,5,0,
	0,110,115,3,20,10,0,111,112,5,30,0,0,112,114,3,20,10,0,113,111,1,0,0,0,
	114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,
	1,0,0,0,118,119,5,6,0,0,119,19,1,0,0,0,120,126,3,22,11,0,121,126,3,24,12,
	0,122,126,3,18,9,0,123,126,3,26,13,0,124,126,3,28,14,0,125,120,1,0,0,0,
	125,121,1,0,0,0,125,122,1,0,0,0,125,123,1,0,0,0,125,124,1,0,0,0,126,21,
	1,0,0,0,127,128,3,38,19,0,128,129,5,19,0,0,129,130,3,30,15,0,130,23,1,0,
	0,0,131,132,5,35,0,0,132,134,5,25,0,0,133,135,3,40,20,0,134,133,1,0,0,0,
	134,135,1,0,0,0,135,136,1,0,0,0,136,137,5,26,0,0,137,25,1,0,0,0,138,139,
	5,13,0,0,139,140,3,30,15,0,140,141,5,14,0,0,141,144,3,20,10,0,142,143,5,
	15,0,0,143,145,3,20,10,0,144,142,1,0,0,0,144,145,1,0,0,0,145,27,1,0,0,0,
	146,147,5,16,0,0,147,148,3,30,15,0,148,149,5,17,0,0,149,150,3,20,10,0,150,
	29,1,0,0,0,151,154,3,32,16,0,152,153,5,24,0,0,153,155,3,32,16,0,154,152,
	1,0,0,0,154,155,1,0,0,0,155,31,1,0,0,0,156,158,7,0,0,0,157,156,1,0,0,0,
	157,158,1,0,0,0,158,159,1,0,0,0,159,164,3,34,17,0,160,161,7,1,0,0,161,163,
	3,34,17,0,162,160,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,
	0,165,33,1,0,0,0,166,164,1,0,0,0,167,172,3,36,18,0,168,169,7,2,0,0,169,
	171,3,36,18,0,170,168,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,172,173,1,
	0,0,0,173,35,1,0,0,0,174,172,1,0,0,0,175,184,3,38,19,0,176,184,5,9,0,0,
	177,178,5,25,0,0,178,179,3,30,15,0,179,180,5,26,0,0,180,184,1,0,0,0,181,
	182,5,18,0,0,182,184,3,36,18,0,183,175,1,0,0,0,183,176,1,0,0,0,183,177,
	1,0,0,0,183,181,1,0,0,0,184,37,1,0,0,0,185,192,5,35,0,0,186,187,5,35,0,
	0,187,188,5,27,0,0,188,189,3,30,15,0,189,190,5,28,0,0,190,192,1,0,0,0,191,
	185,1,0,0,0,191,186,1,0,0,0,192,39,1,0,0,0,193,198,3,30,15,0,194,195,5,
	29,0,0,195,197,3,30,15,0,196,194,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,
	0,198,199,1,0,0,0,199,41,1,0,0,0,200,198,1,0,0,0,18,49,52,61,74,82,97,103,
	115,125,134,144,154,157,164,172,183,191,198];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LALGParser.__ATN) {
			LALGParser.__ATN = new ATNDeserializer().deserialize(LALGParser._serializedATN);
		}

		return LALGParser.__ATN;
	}


	static DecisionsToDFA = LALGParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramaContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROGRAM(): TerminalNode {
		return this.getToken(LALGParser.PROGRAM, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, 0);
	}
	public bloco(): BlocoContext {
		return this.getTypedRuleContext(BlocoContext, 0) as BlocoContext;
	}
	public PONTO(): TerminalNode {
		return this.getToken(LALGParser.PONTO, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_programa;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterPrograma) {
	 		listener.enterPrograma(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitPrograma) {
	 		listener.exitPrograma(this);
		}
	}
}


export class BlocoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public comandoComposto(): ComandoCompostoContext {
		return this.getTypedRuleContext(ComandoCompostoContext, 0) as ComandoCompostoContext;
	}
	public declaracoesVariaveis(): DeclaracoesVariaveisContext {
		return this.getTypedRuleContext(DeclaracoesVariaveisContext, 0) as DeclaracoesVariaveisContext;
	}
	public declaracoesSubrotinas(): DeclaracoesSubrotinasContext {
		return this.getTypedRuleContext(DeclaracoesSubrotinasContext, 0) as DeclaracoesSubrotinasContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_bloco;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterBloco) {
	 		listener.enterBloco(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitBloco) {
	 		listener.exitBloco(this);
		}
	}
}


export class DeclaracoesVariaveisContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaracaoVariaveis_list(): DeclaracaoVariaveisContext[] {
		return this.getTypedRuleContexts(DeclaracaoVariaveisContext) as DeclaracaoVariaveisContext[];
	}
	public declaracaoVariaveis(i: number): DeclaracaoVariaveisContext {
		return this.getTypedRuleContext(DeclaracaoVariaveisContext, i) as DeclaracaoVariaveisContext;
	}
	public PONTO_VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.PONTO_VIRGULA);
	}
	public PONTO_VIRGULA(i: number): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_declaracoesVariaveis;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterDeclaracoesVariaveis) {
	 		listener.enterDeclaracoesVariaveis(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitDeclaracoesVariaveis) {
	 		listener.exitDeclaracoesVariaveis(this);
		}
	}
}


export class DeclaracaoVariaveisContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIPO(): TerminalNode {
		return this.getToken(LALGParser.TIPO, 0);
	}
	public listaIdentificadores(): ListaIdentificadoresContext {
		return this.getTypedRuleContext(ListaIdentificadoresContext, 0) as ListaIdentificadoresContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_declaracaoVariaveis;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterDeclaracaoVariaveis) {
	 		listener.enterDeclaracaoVariaveis(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitDeclaracaoVariaveis) {
	 		listener.exitDeclaracaoVariaveis(this);
		}
	}
}


export class ListaIdentificadoresContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(LALGParser.ID, i);
	}
	public VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.VIRGULA);
	}
	public VIRGULA(i: number): TerminalNode {
		return this.getToken(LALGParser.VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_listaIdentificadores;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterListaIdentificadores) {
	 		listener.enterListaIdentificadores(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitListaIdentificadores) {
	 		listener.exitListaIdentificadores(this);
		}
	}
}


export class DeclaracoesSubrotinasContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaracaoProcedimento_list(): DeclaracaoProcedimentoContext[] {
		return this.getTypedRuleContexts(DeclaracaoProcedimentoContext) as DeclaracaoProcedimentoContext[];
	}
	public declaracaoProcedimento(i: number): DeclaracaoProcedimentoContext {
		return this.getTypedRuleContext(DeclaracaoProcedimentoContext, i) as DeclaracaoProcedimentoContext;
	}
	public PONTO_VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.PONTO_VIRGULA);
	}
	public PONTO_VIRGULA(i: number): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_declaracoesSubrotinas;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterDeclaracoesSubrotinas) {
	 		listener.enterDeclaracoesSubrotinas(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitDeclaracoesSubrotinas) {
	 		listener.exitDeclaracoesSubrotinas(this);
		}
	}
}


export class DeclaracaoProcedimentoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROCEDURE(): TerminalNode {
		return this.getToken(LALGParser.PROCEDURE, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public parametrosFormais(): ParametrosFormaisContext {
		return this.getTypedRuleContext(ParametrosFormaisContext, 0) as ParametrosFormaisContext;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, 0);
	}
	public bloco(): BlocoContext {
		return this.getTypedRuleContext(BlocoContext, 0) as BlocoContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_declaracaoProcedimento;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterDeclaracaoProcedimento) {
	 		listener.enterDeclaracaoProcedimento(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitDeclaracaoProcedimento) {
	 		listener.exitDeclaracaoProcedimento(this);
		}
	}
}


export class ParametrosFormaisContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.ABRE_PARENTESES, 0);
	}
	public secaoParametrosFormais_list(): SecaoParametrosFormaisContext[] {
		return this.getTypedRuleContexts(SecaoParametrosFormaisContext) as SecaoParametrosFormaisContext[];
	}
	public secaoParametrosFormais(i: number): SecaoParametrosFormaisContext {
		return this.getTypedRuleContext(SecaoParametrosFormaisContext, i) as SecaoParametrosFormaisContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.FECHA_PARENTESES, 0);
	}
	public PONTO_VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.PONTO_VIRGULA);
	}
	public PONTO_VIRGULA(i: number): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_parametrosFormais;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterParametrosFormais) {
	 		listener.enterParametrosFormais(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitParametrosFormais) {
	 		listener.exitParametrosFormais(this);
		}
	}
}


export class SecaoParametrosFormaisContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listaIdentificadores(): ListaIdentificadoresContext {
		return this.getTypedRuleContext(ListaIdentificadoresContext, 0) as ListaIdentificadoresContext;
	}
	public DOIS_PONTOS(): TerminalNode {
		return this.getToken(LALGParser.DOIS_PONTOS, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(LALGParser.VAR, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_secaoParametrosFormais;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterSecaoParametrosFormais) {
	 		listener.enterSecaoParametrosFormais(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitSecaoParametrosFormais) {
	 		listener.exitSecaoParametrosFormais(this);
		}
	}
}


export class ComandoCompostoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BEGIN(): TerminalNode {
		return this.getToken(LALGParser.BEGIN, 0);
	}
	public comando_list(): ComandoContext[] {
		return this.getTypedRuleContexts(ComandoContext) as ComandoContext[];
	}
	public comando(i: number): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, i) as ComandoContext;
	}
	public END(): TerminalNode {
		return this.getToken(LALGParser.END, 0);
	}
	public PONTO_VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.PONTO_VIRGULA);
	}
	public PONTO_VIRGULA(i: number): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_comandoComposto;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterComandoComposto) {
	 		listener.enterComandoComposto(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitComandoComposto) {
	 		listener.exitComandoComposto(this);
		}
	}
}


export class ComandoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atribuicao(): AtribuicaoContext {
		return this.getTypedRuleContext(AtribuicaoContext, 0) as AtribuicaoContext;
	}
	public chamadaProcedimento(): ChamadaProcedimentoContext {
		return this.getTypedRuleContext(ChamadaProcedimentoContext, 0) as ChamadaProcedimentoContext;
	}
	public comandoComposto(): ComandoCompostoContext {
		return this.getTypedRuleContext(ComandoCompostoContext, 0) as ComandoCompostoContext;
	}
	public comandoCondicional(): ComandoCondicionalContext {
		return this.getTypedRuleContext(ComandoCondicionalContext, 0) as ComandoCondicionalContext;
	}
	public comandoRepetitivo(): ComandoRepetitivoContext {
		return this.getTypedRuleContext(ComandoRepetitivoContext, 0) as ComandoRepetitivoContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_comando;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterComando) {
	 		listener.enterComando(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitComando) {
	 		listener.exitComando(this);
		}
	}
}


export class AtribuicaoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variavel(): VariavelContext {
		return this.getTypedRuleContext(VariavelContext, 0) as VariavelContext;
	}
	public ATRIBUICAO(): TerminalNode {
		return this.getToken(LALGParser.ATRIBUICAO, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_atribuicao;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterAtribuicao) {
	 		listener.enterAtribuicao(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitAtribuicao) {
	 		listener.exitAtribuicao(this);
		}
	}
}


export class ChamadaProcedimentoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.ABRE_PARENTESES, 0);
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.FECHA_PARENTESES, 0);
	}
	public listaExpressoes(): ListaExpressoesContext {
		return this.getTypedRuleContext(ListaExpressoesContext, 0) as ListaExpressoesContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_chamadaProcedimento;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterChamadaProcedimento) {
	 		listener.enterChamadaProcedimento(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitChamadaProcedimento) {
	 		listener.exitChamadaProcedimento(this);
		}
	}
}


export class ComandoCondicionalContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(LALGParser.IF, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(LALGParser.THEN, 0);
	}
	public comando_list(): ComandoContext[] {
		return this.getTypedRuleContexts(ComandoContext) as ComandoContext[];
	}
	public comando(i: number): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, i) as ComandoContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(LALGParser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_comandoCondicional;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterComandoCondicional) {
	 		listener.enterComandoCondicional(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitComandoCondicional) {
	 		listener.exitComandoCondicional(this);
		}
	}
}


export class ComandoRepetitivoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(LALGParser.WHILE, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public DO(): TerminalNode {
		return this.getToken(LALGParser.DO, 0);
	}
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_comandoRepetitivo;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterComandoRepetitivo) {
	 		listener.enterComandoRepetitivo(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitComandoRepetitivo) {
	 		listener.exitComandoRepetitivo(this);
		}
	}
}


export class ExpressaoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressaoSimples_list(): ExpressaoSimplesContext[] {
		return this.getTypedRuleContexts(ExpressaoSimplesContext) as ExpressaoSimplesContext[];
	}
	public expressaoSimples(i: number): ExpressaoSimplesContext {
		return this.getTypedRuleContext(ExpressaoSimplesContext, i) as ExpressaoSimplesContext;
	}
	public RELACAO(): TerminalNode {
		return this.getToken(LALGParser.RELACAO, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_expressao;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterExpressao) {
	 		listener.enterExpressao(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitExpressao) {
	 		listener.exitExpressao(this);
		}
	}
}


export class ExpressaoSimplesContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public termo_list(): TermoContext[] {
		return this.getTypedRuleContexts(TermoContext) as TermoContext[];
	}
	public termo(i: number): TermoContext {
		return this.getTypedRuleContext(TermoContext, i) as TermoContext;
	}
	public MAIS_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.MAIS);
	}
	public MAIS(i: number): TerminalNode {
		return this.getToken(LALGParser.MAIS, i);
	}
	public MENOS_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.MENOS);
	}
	public MENOS(i: number): TerminalNode {
		return this.getToken(LALGParser.MENOS, i);
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(LALGParser.OR, i);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_expressaoSimples;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterExpressaoSimples) {
	 		listener.enterExpressaoSimples(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitExpressaoSimples) {
	 		listener.exitExpressaoSimples(this);
		}
	}
}


export class TermoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fator_list(): FatorContext[] {
		return this.getTypedRuleContexts(FatorContext) as FatorContext[];
	}
	public fator(i: number): FatorContext {
		return this.getTypedRuleContext(FatorContext, i) as FatorContext;
	}
	public MULT_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.MULT);
	}
	public MULT(i: number): TerminalNode {
		return this.getToken(LALGParser.MULT, i);
	}
	public DIV_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.DIV);
	}
	public DIV(i: number): TerminalNode {
		return this.getToken(LALGParser.DIV, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(LALGParser.AND, i);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_termo;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterTermo) {
	 		listener.enterTermo(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitTermo) {
	 		listener.exitTermo(this);
		}
	}
}


export class FatorContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variavel(): VariavelContext {
		return this.getTypedRuleContext(VariavelContext, 0) as VariavelContext;
	}
	public TIPO(): TerminalNode {
		return this.getToken(LALGParser.TIPO, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.ABRE_PARENTESES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.FECHA_PARENTESES, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(LALGParser.NOT, 0);
	}
	public fator(): FatorContext {
		return this.getTypedRuleContext(FatorContext, 0) as FatorContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_fator;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterFator) {
	 		listener.enterFator(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitFator) {
	 		listener.exitFator(this);
		}
	}
}


export class VariavelContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public ABRE_COLCHETES(): TerminalNode {
		return this.getToken(LALGParser.ABRE_COLCHETES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_COLCHETES(): TerminalNode {
		return this.getToken(LALGParser.FECHA_COLCHETES, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_variavel;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterVariavel) {
	 		listener.enterVariavel(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitVariavel) {
	 		listener.exitVariavel(this);
		}
	}
}


export class ListaExpressoesContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao_list(): ExpressaoContext[] {
		return this.getTypedRuleContexts(ExpressaoContext) as ExpressaoContext[];
	}
	public expressao(i: number): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, i) as ExpressaoContext;
	}
	public VIRGULA_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.VIRGULA);
	}
	public VIRGULA(i: number): TerminalNode {
		return this.getToken(LALGParser.VIRGULA, i);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_listaExpressoes;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterListaExpressoes) {
	 		listener.enterListaExpressoes(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitListaExpressoes) {
	 		listener.exitListaExpressoes(this);
		}
	}
}
