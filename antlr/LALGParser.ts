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
import LALGParserVisitor from "./LALGParserVisitor.js";

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
	public static readonly INT_TIPO = 9;
	public static readonly FLOAT_TIPO = 10;
	public static readonly BOOL_TIPO = 11;
	public static readonly READ = 12;
	public static readonly WRITE = 13;
	public static readonly TRUE_CONST = 14;
	public static readonly FALSE_CONST = 15;
	public static readonly IF = 16;
	public static readonly THEN = 17;
	public static readonly ELSE = 18;
	public static readonly WHILE = 19;
	public static readonly DO = 20;
	public static readonly NOT = 21;
	public static readonly ATRIBUICAO = 22;
	public static readonly MAIS = 23;
	public static readonly MENOS = 24;
	public static readonly MULT = 25;
	public static readonly DIV = 26;
	public static readonly RELACAO = 27;
	public static readonly ABRE_PARENTESES = 28;
	public static readonly FECHA_PARENTESES = 29;
	public static readonly ABRE_COLCHETES = 30;
	public static readonly FECHA_COLCHETES = 31;
	public static readonly VIRGULA = 32;
	public static readonly PONTO_VIRGULA = 33;
	public static readonly DOIS_PONTOS = 34;
	public static readonly PONTO = 35;
	public static readonly AND = 36;
	public static readonly OR = 37;
	public static readonly ID = 38;
	public static readonly INT = 39;
	public static readonly FLOAT = 40;
	public static readonly INVALID_TOKEN = 41;
	public static readonly INVALID = 42;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_numero = 0;
	public static readonly RULE_termo = 1;
	public static readonly RULE_termo_aux = 2;
	public static readonly RULE_expressaoSimples = 3;
	public static readonly RULE_expressaoSimples_aux = 4;
	public static readonly RULE_expressao = 5;
	public static readonly RULE_expressao_aux = 6;
	public static readonly RULE_fator = 7;
	public static readonly RULE_variavel = 8;
	public static readonly RULE_variavel1 = 9;
	public static readonly RULE_declaracaoVariavel = 10;
	public static readonly RULE_listaID = 11;
	public static readonly RULE_listaID_aux = 12;
	public static readonly RULE_parteDeclaracaoVariavel = 13;
	public static readonly RULE_parteDeclaracaoVariavel_aux = 14;
	public static readonly RULE_tipo = 15;
	public static readonly RULE_programa = 16;
	public static readonly RULE_bloco = 17;
	public static readonly RULE_parteDeclaracaoSubRotina = 18;
	public static readonly RULE_parteDeclaracaoSubRotina_aux = 19;
	public static readonly RULE_declaracaoProcedimento = 20;
	public static readonly RULE_declaracaoProcedimento_aux = 21;
	public static readonly RULE_parametros = 22;
	public static readonly RULE_parametros_aux = 23;
	public static readonly RULE_secaoParametros = 24;
	public static readonly RULE_secaoParametrosFormais_aux = 25;
	public static readonly RULE_comandoComposto = 26;
	public static readonly RULE_comandoComposto_aux = 27;
	public static readonly RULE_comando = 28;
	public static readonly RULE_atribuicao = 29;
	public static readonly RULE_chamadaProcedimento = 30;
	public static readonly RULE_chamadaProcedimento_aux = 31;
	public static readonly RULE_comandoCondicional = 32;
	public static readonly RULE_comandoCondicional_aux = 33;
	public static readonly RULE_comandoRepetitivo = 34;
	public static readonly RULE_listaExpressao = 35;
	public static readonly RULE_listaExpressao_aux = 36;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'program'", 
                                                            "'begin'", "'end'", 
                                                            "'var'", "'procedure'", 
                                                            "'int'", "'float'", 
                                                            "'boolean'", 
                                                            "'read'", "'write'", 
                                                            "'true'", "'false'", 
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
                                                             "INT_TIPO", 
                                                             "FLOAT_TIPO", 
                                                             "BOOL_TIPO", 
                                                             "READ", "WRITE", 
                                                             "TRUE_CONST", 
                                                             "FALSE_CONST", 
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
                                                             "INVALID_TOKEN", 
                                                             "INVALID" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"numero", "termo", "termo_aux", "expressaoSimples", "expressaoSimples_aux", 
		"expressao", "expressao_aux", "fator", "variavel", "variavel1", "declaracaoVariavel", 
		"listaID", "listaID_aux", "parteDeclaracaoVariavel", "parteDeclaracaoVariavel_aux", 
		"tipo", "programa", "bloco", "parteDeclaracaoSubRotina", "parteDeclaracaoSubRotina_aux", 
		"declaracaoProcedimento", "declaracaoProcedimento_aux", "parametros", 
		"parametros_aux", "secaoParametros", "secaoParametrosFormais_aux", "comandoComposto", 
		"comandoComposto_aux", "comando", "atribuicao", "chamadaProcedimento", 
		"chamadaProcedimento_aux", "comandoCondicional", "comandoCondicional_aux", 
		"comandoRepetitivo", "listaExpressao", "listaExpressao_aux",
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
	public numero(): NumeroContext {
		let localctx: NumeroContext = new NumeroContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LALGParser.RULE_numero);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			_la = this._input.LA(1);
			if(!(_la===39 || _la===40)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
		this.enterRule(localctx, 2, LALGParser.RULE_termo);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.fator();
			this.state = 77;
			this.termo_aux();
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
	public termo_aux(): Termo_auxContext {
		let localctx: Termo_auxContext = new Termo_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LALGParser.RULE_termo_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 79;
				_la = this._input.LA(1);
				if(!(_la===25 || _la===36)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 80;
				this.fator();
				this.state = 81;
				this.termo_aux();
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
	public expressaoSimples(): ExpressaoSimplesContext {
		let localctx: ExpressaoSimplesContext = new ExpressaoSimplesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LALGParser.RULE_expressaoSimples);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23 || _la===24) {
				{
				this.state = 85;
				_la = this._input.LA(1);
				if(!(_la===23 || _la===24)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 88;
			this.termo();
			this.state = 89;
			this.expressaoSimples_aux();
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
	public expressaoSimples_aux(): ExpressaoSimples_auxContext {
		let localctx: ExpressaoSimples_auxContext = new ExpressaoSimples_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LALGParser.RULE_expressaoSimples_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 91;
				_la = this._input.LA(1);
				if(!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 16387) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 92;
				this.termo();
				this.state = 93;
				this.expressaoSimples_aux();
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
	public expressao(): ExpressaoContext {
		let localctx: ExpressaoContext = new ExpressaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LALGParser.RULE_expressao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 97;
			this.expressaoSimples();
			this.state = 98;
			this.expressao_aux();
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
	public expressao_aux(): Expressao_auxContext {
		let localctx: Expressao_auxContext = new Expressao_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LALGParser.RULE_expressao_aux);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 100;
				this.match(LALGParser.RELACAO);
				this.state = 101;
				this.expressaoSimples();
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
	public fator(): FatorContext {
		let localctx: FatorContext = new FatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LALGParser.RULE_fator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				{
				this.state = 104;
				this.variavel();
				}
				break;
			case 39:
			case 40:
				{
				this.state = 105;
				this.numero();
				}
				break;
			case 28:
				{
				{
				this.state = 106;
				this.match(LALGParser.ABRE_PARENTESES);
				this.state = 107;
				this.expressao();
				this.state = 108;
				this.match(LALGParser.FECHA_PARENTESES);
				}
				}
				break;
			case 21:
				{
				{
				this.state = 110;
				this.match(LALGParser.NOT);
				this.state = 111;
				this.fator();
				}
				}
				break;
			case 14:
				{
				this.state = 112;
				this.match(LALGParser.TRUE_CONST);
				}
				break;
			case 15:
				{
				this.state = 113;
				this.match(LALGParser.FALSE_CONST);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public variavel(): VariavelContext {
		let localctx: VariavelContext = new VariavelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LALGParser.RULE_variavel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.match(LALGParser.ID);
			this.state = 117;
			this.variavel1();
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
	public variavel1(): Variavel1Context {
		let localctx: Variavel1Context = new Variavel1Context(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LALGParser.RULE_variavel1);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 119;
				this.expressao();
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
	public declaracaoVariavel(): DeclaracaoVariavelContext {
		let localctx: DeclaracaoVariavelContext = new DeclaracaoVariavelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LALGParser.RULE_declaracaoVariavel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			this.tipo();
			this.state = 123;
			this.listaID();
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
	public listaID(): ListaIDContext {
		let localctx: ListaIDContext = new ListaIDContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LALGParser.RULE_listaID);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this.match(LALGParser.ID);
			this.state = 126;
			this.listaID_aux();
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
	public listaID_aux(): ListaID_auxContext {
		let localctx: ListaID_auxContext = new ListaID_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LALGParser.RULE_listaID_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 128;
				this.match(LALGParser.VIRGULA);
				this.state = 129;
				this.match(LALGParser.ID);
				this.state = 130;
				this.listaID_aux();
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
	public parteDeclaracaoVariavel(): ParteDeclaracaoVariavelContext {
		let localctx: ParteDeclaracaoVariavelContext = new ParteDeclaracaoVariavelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LALGParser.RULE_parteDeclaracaoVariavel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.declaracaoVariavel();
			this.state = 134;
			this.parteDeclaracaoVariavel_aux();
			this.state = 135;
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
	public parteDeclaracaoVariavel_aux(): ParteDeclaracaoVariavel_auxContext {
		let localctx: ParteDeclaracaoVariavel_auxContext = new ParteDeclaracaoVariavel_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LALGParser.RULE_parteDeclaracaoVariavel_aux);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 137;
				this.match(LALGParser.PONTO_VIRGULA);
				this.state = 138;
				this.declaracaoVariavel();
				this.state = 139;
				this.parteDeclaracaoVariavel_aux();
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
	public tipo(): TipoContext {
		let localctx: TipoContext = new TipoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LALGParser.RULE_tipo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3584) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public programa(): ProgramaContext {
		let localctx: ProgramaContext = new ProgramaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LALGParser.RULE_programa);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this.match(LALGParser.PROGRAM);
			this.state = 146;
			this.match(LALGParser.ID);
			this.state = 147;
			this.match(LALGParser.PONTO_VIRGULA);
			this.state = 148;
			this.bloco();
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 149;
				this.match(LALGParser.PONTO);
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===35);
			this.state = 154;
			this.match(LALGParser.EOF);
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
		this.enterRule(localctx, 34, LALGParser.RULE_bloco);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3584) !== 0)) {
				{
				this.state = 156;
				this.parteDeclaracaoVariavel();
				}
			}

			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 159;
				this.parteDeclaracaoSubRotina();
				}
			}

			this.state = 162;
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
	public parteDeclaracaoSubRotina(): ParteDeclaracaoSubRotinaContext {
		let localctx: ParteDeclaracaoSubRotinaContext = new ParteDeclaracaoSubRotinaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LALGParser.RULE_parteDeclaracaoSubRotina);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this.declaracaoProcedimento();
			this.state = 165;
			this.match(LALGParser.PONTO_VIRGULA);
			this.state = 166;
			this.parteDeclaracaoSubRotina_aux();
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
	public parteDeclaracaoSubRotina_aux(): ParteDeclaracaoSubRotina_auxContext {
		let localctx: ParteDeclaracaoSubRotina_auxContext = new ParteDeclaracaoSubRotina_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LALGParser.RULE_parteDeclaracaoSubRotina_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 168;
				this.declaracaoProcedimento();
				this.state = 169;
				this.parteDeclaracaoSubRotina_aux();
				this.state = 170;
				this.match(LALGParser.PONTO_VIRGULA);
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
	public declaracaoProcedimento(): DeclaracaoProcedimentoContext {
		let localctx: DeclaracaoProcedimentoContext = new DeclaracaoProcedimentoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LALGParser.RULE_declaracaoProcedimento);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			this.match(LALGParser.PROCEDURE);
			this.state = 175;
			this.match(LALGParser.ID);
			this.state = 176;
			this.declaracaoProcedimento_aux();
			this.state = 177;
			this.match(LALGParser.PONTO_VIRGULA);
			this.state = 178;
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
	public declaracaoProcedimento_aux(): DeclaracaoProcedimento_auxContext {
		let localctx: DeclaracaoProcedimento_auxContext = new DeclaracaoProcedimento_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LALGParser.RULE_declaracaoProcedimento_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 180;
				this.parametros();
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
	public parametros(): ParametrosContext {
		let localctx: ParametrosContext = new ParametrosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LALGParser.RULE_parametros);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this.match(LALGParser.ABRE_PARENTESES);
			this.state = 184;
			this.secaoParametros();
			this.state = 185;
			this.parametros_aux();
			this.state = 186;
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
	public parametros_aux(): Parametros_auxContext {
		let localctx: Parametros_auxContext = new Parametros_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, LALGParser.RULE_parametros_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 188;
				this.match(LALGParser.PONTO_VIRGULA);
				this.state = 189;
				this.secaoParametros();
				this.state = 190;
				this.parametros_aux();
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
	public secaoParametros(): SecaoParametrosContext {
		let localctx: SecaoParametrosContext = new SecaoParametrosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LALGParser.RULE_secaoParametros);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 194;
				this.match(LALGParser.VAR);
				}
			}

			this.state = 197;
			this.listaID();
			this.state = 198;
			this.match(LALGParser.DOIS_PONTOS);
			this.state = 199;
			this.secaoParametrosFormais_aux();
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
	public secaoParametrosFormais_aux(): SecaoParametrosFormais_auxContext {
		let localctx: SecaoParametrosFormais_auxContext = new SecaoParametrosFormais_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LALGParser.RULE_secaoParametrosFormais_aux);
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 38:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 201;
				this.match(LALGParser.ID);
				}
				break;
			case 9:
			case 10:
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 202;
				this.tipo();
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
	public comandoComposto(): ComandoCompostoContext {
		let localctx: ComandoCompostoContext = new ComandoCompostoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LALGParser.RULE_comandoComposto);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this.match(LALGParser.BEGIN);
			this.state = 206;
			this.comando();
			this.state = 207;
			this.comandoComposto_aux();
			this.state = 208;
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
	public comandoComposto_aux(): ComandoComposto_auxContext {
		let localctx: ComandoComposto_auxContext = new ComandoComposto_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LALGParser.RULE_comandoComposto_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 210;
				this.match(LALGParser.PONTO_VIRGULA);
				this.state = 211;
				this.comando();
				this.state = 212;
				this.comandoComposto_aux();
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
	public comando(): ComandoContext {
		let localctx: ComandoContext = new ComandoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, LALGParser.RULE_comando);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 216;
				this.atribuicao();
				}
				break;
			case 2:
				{
				this.state = 217;
				this.chamadaProcedimento();
				}
				break;
			case 3:
				{
				this.state = 218;
				this.comandoComposto();
				}
				break;
			case 4:
				{
				this.state = 219;
				this.comandoCondicional();
				}
				break;
			case 5:
				{
				this.state = 220;
				this.comandoRepetitivo();
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
	public atribuicao(): AtribuicaoContext {
		let localctx: AtribuicaoContext = new AtribuicaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LALGParser.RULE_atribuicao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 223;
			this.variavel();
			this.state = 224;
			this.match(LALGParser.ATRIBUICAO);
			this.state = 225;
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
		this.enterRule(localctx, 60, LALGParser.RULE_chamadaProcedimento);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 227;
			_la = this._input.LA(1);
			if(!(((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & 67108867) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 228;
			this.chamadaProcedimento_aux();
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
	public chamadaProcedimento_aux(): ChamadaProcedimento_auxContext {
		let localctx: ChamadaProcedimento_auxContext = new ChamadaProcedimento_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, LALGParser.RULE_chamadaProcedimento_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 230;
				this.match(LALGParser.ABRE_PARENTESES);
				this.state = 231;
				this.listaExpressao();
				this.state = 232;
				this.match(LALGParser.FECHA_PARENTESES);
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
	public comandoCondicional(): ComandoCondicionalContext {
		let localctx: ComandoCondicionalContext = new ComandoCondicionalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, LALGParser.RULE_comandoCondicional);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
			this.match(LALGParser.IF);
			this.state = 237;
			this.expressao();
			this.state = 238;
			this.match(LALGParser.THEN);
			this.state = 239;
			this.comando();
			this.state = 240;
			this.comandoCondicional_aux();
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
	public comandoCondicional_aux(): ComandoCondicional_auxContext {
		let localctx: ComandoCondicional_auxContext = new ComandoCondicional_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, LALGParser.RULE_comandoCondicional_aux);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 242;
				this.match(LALGParser.ELSE);
				this.state = 243;
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
		this.enterRule(localctx, 68, LALGParser.RULE_comandoRepetitivo);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this.match(LALGParser.WHILE);
			this.state = 247;
			this.expressao();
			this.state = 248;
			this.match(LALGParser.DO);
			this.state = 249;
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
	public listaExpressao(): ListaExpressaoContext {
		let localctx: ListaExpressaoContext = new ListaExpressaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, LALGParser.RULE_listaExpressao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this.expressao();
			this.state = 252;
			this.listaExpressao_aux();
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
	public listaExpressao_aux(): ListaExpressao_auxContext {
		let localctx: ListaExpressao_auxContext = new ListaExpressao_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, LALGParser.RULE_listaExpressao_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 254;
				this.match(LALGParser.VIRGULA);
				this.state = 255;
				this.expressao();
				this.state = 256;
				this.listaExpressao_aux();
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

	public static readonly _serializedATN: number[] = [4,1,42,261,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,1,0,1,0,1,1,1,1,1,1,1,
	2,1,2,1,2,1,2,3,2,84,8,2,1,3,3,3,87,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,
	96,8,4,1,5,1,5,1,5,1,6,1,6,3,6,103,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,3,7,115,8,7,1,8,1,8,1,8,1,9,3,9,121,8,9,1,10,1,10,1,10,1,11,1,11,
	1,11,1,12,1,12,1,12,3,12,132,8,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,
	14,3,14,142,8,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,4,16,151,8,16,11,16,
	12,16,152,1,16,1,16,1,17,3,17,158,8,17,1,17,3,17,161,8,17,1,17,1,17,1,18,
	1,18,1,18,1,18,1,19,1,19,1,19,1,19,3,19,173,8,19,1,20,1,20,1,20,1,20,1,
	20,1,20,1,21,3,21,182,8,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,
	3,23,193,8,23,1,24,3,24,196,8,24,1,24,1,24,1,24,1,24,1,25,1,25,3,25,204,
	8,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,3,27,215,8,27,1,28,1,
	28,1,28,1,28,1,28,3,28,222,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,31,
	1,31,1,31,1,31,3,31,235,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,3,
	33,245,8,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,36,
	3,36,259,8,36,1,36,0,0,37,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
	34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,0,6,1,0,39,
	40,2,0,25,25,36,36,1,0,23,24,2,0,23,24,37,37,1,0,9,11,2,0,12,13,38,38,251,
	0,74,1,0,0,0,2,76,1,0,0,0,4,83,1,0,0,0,6,86,1,0,0,0,8,95,1,0,0,0,10,97,
	1,0,0,0,12,102,1,0,0,0,14,114,1,0,0,0,16,116,1,0,0,0,18,120,1,0,0,0,20,
	122,1,0,0,0,22,125,1,0,0,0,24,131,1,0,0,0,26,133,1,0,0,0,28,141,1,0,0,0,
	30,143,1,0,0,0,32,145,1,0,0,0,34,157,1,0,0,0,36,164,1,0,0,0,38,172,1,0,
	0,0,40,174,1,0,0,0,42,181,1,0,0,0,44,183,1,0,0,0,46,192,1,0,0,0,48,195,
	1,0,0,0,50,203,1,0,0,0,52,205,1,0,0,0,54,214,1,0,0,0,56,221,1,0,0,0,58,
	223,1,0,0,0,60,227,1,0,0,0,62,234,1,0,0,0,64,236,1,0,0,0,66,244,1,0,0,0,
	68,246,1,0,0,0,70,251,1,0,0,0,72,258,1,0,0,0,74,75,7,0,0,0,75,1,1,0,0,0,
	76,77,3,14,7,0,77,78,3,4,2,0,78,3,1,0,0,0,79,80,7,1,0,0,80,81,3,14,7,0,
	81,82,3,4,2,0,82,84,1,0,0,0,83,79,1,0,0,0,83,84,1,0,0,0,84,5,1,0,0,0,85,
	87,7,2,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,88,1,0,0,0,88,89,3,2,1,0,89,90,
	3,8,4,0,90,7,1,0,0,0,91,92,7,3,0,0,92,93,3,2,1,0,93,94,3,8,4,0,94,96,1,
	0,0,0,95,91,1,0,0,0,95,96,1,0,0,0,96,9,1,0,0,0,97,98,3,6,3,0,98,99,3,12,
	6,0,99,11,1,0,0,0,100,101,5,27,0,0,101,103,3,6,3,0,102,100,1,0,0,0,102,
	103,1,0,0,0,103,13,1,0,0,0,104,115,3,16,8,0,105,115,3,0,0,0,106,107,5,28,
	0,0,107,108,3,10,5,0,108,109,5,29,0,0,109,115,1,0,0,0,110,111,5,21,0,0,
	111,115,3,14,7,0,112,115,5,14,0,0,113,115,5,15,0,0,114,104,1,0,0,0,114,
	105,1,0,0,0,114,106,1,0,0,0,114,110,1,0,0,0,114,112,1,0,0,0,114,113,1,0,
	0,0,115,15,1,0,0,0,116,117,5,38,0,0,117,118,3,18,9,0,118,17,1,0,0,0,119,
	121,3,10,5,0,120,119,1,0,0,0,120,121,1,0,0,0,121,19,1,0,0,0,122,123,3,30,
	15,0,123,124,3,22,11,0,124,21,1,0,0,0,125,126,5,38,0,0,126,127,3,24,12,
	0,127,23,1,0,0,0,128,129,5,32,0,0,129,130,5,38,0,0,130,132,3,24,12,0,131,
	128,1,0,0,0,131,132,1,0,0,0,132,25,1,0,0,0,133,134,3,20,10,0,134,135,3,
	28,14,0,135,136,5,33,0,0,136,27,1,0,0,0,137,138,5,33,0,0,138,139,3,20,10,
	0,139,140,3,28,14,0,140,142,1,0,0,0,141,137,1,0,0,0,141,142,1,0,0,0,142,
	29,1,0,0,0,143,144,7,4,0,0,144,31,1,0,0,0,145,146,5,4,0,0,146,147,5,38,
	0,0,147,148,5,33,0,0,148,150,3,34,17,0,149,151,5,35,0,0,150,149,1,0,0,0,
	151,152,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,155,
	5,0,0,1,155,33,1,0,0,0,156,158,3,26,13,0,157,156,1,0,0,0,157,158,1,0,0,
	0,158,160,1,0,0,0,159,161,3,36,18,0,160,159,1,0,0,0,160,161,1,0,0,0,161,
	162,1,0,0,0,162,163,3,52,26,0,163,35,1,0,0,0,164,165,3,40,20,0,165,166,
	5,33,0,0,166,167,3,38,19,0,167,37,1,0,0,0,168,169,3,40,20,0,169,170,3,38,
	19,0,170,171,5,33,0,0,171,173,1,0,0,0,172,168,1,0,0,0,172,173,1,0,0,0,173,
	39,1,0,0,0,174,175,5,8,0,0,175,176,5,38,0,0,176,177,3,42,21,0,177,178,5,
	33,0,0,178,179,3,34,17,0,179,41,1,0,0,0,180,182,3,44,22,0,181,180,1,0,0,
	0,181,182,1,0,0,0,182,43,1,0,0,0,183,184,5,28,0,0,184,185,3,48,24,0,185,
	186,3,46,23,0,186,187,5,29,0,0,187,45,1,0,0,0,188,189,5,33,0,0,189,190,
	3,48,24,0,190,191,3,46,23,0,191,193,1,0,0,0,192,188,1,0,0,0,192,193,1,0,
	0,0,193,47,1,0,0,0,194,196,5,7,0,0,195,194,1,0,0,0,195,196,1,0,0,0,196,
	197,1,0,0,0,197,198,3,22,11,0,198,199,5,34,0,0,199,200,3,50,25,0,200,49,
	1,0,0,0,201,204,5,38,0,0,202,204,3,30,15,0,203,201,1,0,0,0,203,202,1,0,
	0,0,204,51,1,0,0,0,205,206,5,5,0,0,206,207,3,56,28,0,207,208,3,54,27,0,
	208,209,5,6,0,0,209,53,1,0,0,0,210,211,5,33,0,0,211,212,3,56,28,0,212,213,
	3,54,27,0,213,215,1,0,0,0,214,210,1,0,0,0,214,215,1,0,0,0,215,55,1,0,0,
	0,216,222,3,58,29,0,217,222,3,60,30,0,218,222,3,52,26,0,219,222,3,64,32,
	0,220,222,3,68,34,0,221,216,1,0,0,0,221,217,1,0,0,0,221,218,1,0,0,0,221,
	219,1,0,0,0,221,220,1,0,0,0,222,57,1,0,0,0,223,224,3,16,8,0,224,225,5,22,
	0,0,225,226,3,10,5,0,226,59,1,0,0,0,227,228,7,5,0,0,228,229,3,62,31,0,229,
	61,1,0,0,0,230,231,5,28,0,0,231,232,3,70,35,0,232,233,5,29,0,0,233,235,
	1,0,0,0,234,230,1,0,0,0,234,235,1,0,0,0,235,63,1,0,0,0,236,237,5,16,0,0,
	237,238,3,10,5,0,238,239,5,17,0,0,239,240,3,56,28,0,240,241,3,66,33,0,241,
	65,1,0,0,0,242,243,5,18,0,0,243,245,3,56,28,0,244,242,1,0,0,0,244,245,1,
	0,0,0,245,67,1,0,0,0,246,247,5,19,0,0,247,248,3,10,5,0,248,249,5,20,0,0,
	249,250,3,56,28,0,250,69,1,0,0,0,251,252,3,10,5,0,252,253,3,72,36,0,253,
	71,1,0,0,0,254,255,5,32,0,0,255,256,3,10,5,0,256,257,3,72,36,0,257,259,
	1,0,0,0,258,254,1,0,0,0,258,259,1,0,0,0,259,73,1,0,0,0,21,83,86,95,102,
	114,120,131,141,152,157,160,172,181,192,195,203,214,221,234,244,258];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LALGParser.__ATN) {
			LALGParser.__ATN = new ATNDeserializer().deserialize(LALGParser._serializedATN);
		}

		return LALGParser.__ATN;
	}


	static DecisionsToDFA = LALGParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class NumeroContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(LALGParser.INT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(LALGParser.FLOAT, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_numero;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterNumero) {
	 		listener.enterNumero(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitNumero) {
	 		listener.exitNumero(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitNumero) {
			return visitor.visitNumero(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fator(): FatorContext {
		return this.getTypedRuleContext(FatorContext, 0) as FatorContext;
	}
	public termo_aux(): Termo_auxContext {
		return this.getTypedRuleContext(Termo_auxContext, 0) as Termo_auxContext;
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitTermo) {
			return visitor.visitTermo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Termo_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fator(): FatorContext {
		return this.getTypedRuleContext(FatorContext, 0) as FatorContext;
	}
	public termo_aux(): Termo_auxContext {
		return this.getTypedRuleContext(Termo_auxContext, 0) as Termo_auxContext;
	}
	public MULT(): TerminalNode {
		return this.getToken(LALGParser.MULT, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(LALGParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_termo_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterTermo_aux) {
	 		listener.enterTermo_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitTermo_aux) {
	 		listener.exitTermo_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitTermo_aux) {
			return visitor.visitTermo_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoSimplesContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public termo(): TermoContext {
		return this.getTypedRuleContext(TermoContext, 0) as TermoContext;
	}
	public expressaoSimples_aux(): ExpressaoSimples_auxContext {
		return this.getTypedRuleContext(ExpressaoSimples_auxContext, 0) as ExpressaoSimples_auxContext;
	}
	public MAIS(): TerminalNode {
		return this.getToken(LALGParser.MAIS, 0);
	}
	public MENOS(): TerminalNode {
		return this.getToken(LALGParser.MENOS, 0);
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitExpressaoSimples) {
			return visitor.visitExpressaoSimples(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoSimples_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public termo(): TermoContext {
		return this.getTypedRuleContext(TermoContext, 0) as TermoContext;
	}
	public expressaoSimples_aux(): ExpressaoSimples_auxContext {
		return this.getTypedRuleContext(ExpressaoSimples_auxContext, 0) as ExpressaoSimples_auxContext;
	}
	public MAIS(): TerminalNode {
		return this.getToken(LALGParser.MAIS, 0);
	}
	public MENOS(): TerminalNode {
		return this.getToken(LALGParser.MENOS, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(LALGParser.OR, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_expressaoSimples_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterExpressaoSimples_aux) {
	 		listener.enterExpressaoSimples_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitExpressaoSimples_aux) {
	 		listener.exitExpressaoSimples_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitExpressaoSimples_aux) {
			return visitor.visitExpressaoSimples_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressaoSimples(): ExpressaoSimplesContext {
		return this.getTypedRuleContext(ExpressaoSimplesContext, 0) as ExpressaoSimplesContext;
	}
	public expressao_aux(): Expressao_auxContext {
		return this.getTypedRuleContext(Expressao_auxContext, 0) as Expressao_auxContext;
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitExpressao) {
			return visitor.visitExpressao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expressao_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RELACAO(): TerminalNode {
		return this.getToken(LALGParser.RELACAO, 0);
	}
	public expressaoSimples(): ExpressaoSimplesContext {
		return this.getTypedRuleContext(ExpressaoSimplesContext, 0) as ExpressaoSimplesContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_expressao_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterExpressao_aux) {
	 		listener.enterExpressao_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitExpressao_aux) {
	 		listener.exitExpressao_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitExpressao_aux) {
			return visitor.visitExpressao_aux(this);
		} else {
			return visitor.visitChildren(this);
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
	public numero(): NumeroContext {
		return this.getTypedRuleContext(NumeroContext, 0) as NumeroContext;
	}
	public TRUE_CONST(): TerminalNode {
		return this.getToken(LALGParser.TRUE_CONST, 0);
	}
	public FALSE_CONST(): TerminalNode {
		return this.getToken(LALGParser.FALSE_CONST, 0);
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitFator) {
			return visitor.visitFator(this);
		} else {
			return visitor.visitChildren(this);
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
	public variavel1(): Variavel1Context {
		return this.getTypedRuleContext(Variavel1Context, 0) as Variavel1Context;
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitVariavel) {
			return visitor.visitVariavel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variavel1Context extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_variavel1;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterVariavel1) {
	 		listener.enterVariavel1(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitVariavel1) {
	 		listener.exitVariavel1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitVariavel1) {
			return visitor.visitVariavel1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoVariavelContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tipo(): TipoContext {
		return this.getTypedRuleContext(TipoContext, 0) as TipoContext;
	}
	public listaID(): ListaIDContext {
		return this.getTypedRuleContext(ListaIDContext, 0) as ListaIDContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_declaracaoVariavel;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterDeclaracaoVariavel) {
	 		listener.enterDeclaracaoVariavel(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitDeclaracaoVariavel) {
	 		listener.exitDeclaracaoVariavel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitDeclaracaoVariavel) {
			return visitor.visitDeclaracaoVariavel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaIDContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public listaID_aux(): ListaID_auxContext {
		return this.getTypedRuleContext(ListaID_auxContext, 0) as ListaID_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_listaID;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterListaID) {
	 		listener.enterListaID(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitListaID) {
	 		listener.exitListaID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitListaID) {
			return visitor.visitListaID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaID_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.VIRGULA, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public listaID_aux(): ListaID_auxContext {
		return this.getTypedRuleContext(ListaID_auxContext, 0) as ListaID_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_listaID_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterListaID_aux) {
	 		listener.enterListaID_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitListaID_aux) {
	 		listener.exitListaID_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitListaID_aux) {
			return visitor.visitListaID_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParteDeclaracaoVariavelContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaracaoVariavel(): DeclaracaoVariavelContext {
		return this.getTypedRuleContext(DeclaracaoVariavelContext, 0) as DeclaracaoVariavelContext;
	}
	public parteDeclaracaoVariavel_aux(): ParteDeclaracaoVariavel_auxContext {
		return this.getTypedRuleContext(ParteDeclaracaoVariavel_auxContext, 0) as ParteDeclaracaoVariavel_auxContext;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_parteDeclaracaoVariavel;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterParteDeclaracaoVariavel) {
	 		listener.enterParteDeclaracaoVariavel(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitParteDeclaracaoVariavel) {
	 		listener.exitParteDeclaracaoVariavel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitParteDeclaracaoVariavel) {
			return visitor.visitParteDeclaracaoVariavel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParteDeclaracaoVariavel_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, 0);
	}
	public declaracaoVariavel(): DeclaracaoVariavelContext {
		return this.getTypedRuleContext(DeclaracaoVariavelContext, 0) as DeclaracaoVariavelContext;
	}
	public parteDeclaracaoVariavel_aux(): ParteDeclaracaoVariavel_auxContext {
		return this.getTypedRuleContext(ParteDeclaracaoVariavel_auxContext, 0) as ParteDeclaracaoVariavel_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_parteDeclaracaoVariavel_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterParteDeclaracaoVariavel_aux) {
	 		listener.enterParteDeclaracaoVariavel_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitParteDeclaracaoVariavel_aux) {
	 		listener.exitParteDeclaracaoVariavel_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitParteDeclaracaoVariavel_aux) {
			return visitor.visitParteDeclaracaoVariavel_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TipoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL_TIPO(): TerminalNode {
		return this.getToken(LALGParser.BOOL_TIPO, 0);
	}
	public INT_TIPO(): TerminalNode {
		return this.getToken(LALGParser.INT_TIPO, 0);
	}
	public FLOAT_TIPO(): TerminalNode {
		return this.getToken(LALGParser.FLOAT_TIPO, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_tipo;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterTipo) {
	 		listener.enterTipo(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitTipo) {
	 		listener.exitTipo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitTipo) {
			return visitor.visitTipo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
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
	public EOF(): TerminalNode {
		return this.getToken(LALGParser.EOF, 0);
	}
	public PONTO_list(): TerminalNode[] {
	    	return this.getTokens(LALGParser.PONTO);
	}
	public PONTO(i: number): TerminalNode {
		return this.getToken(LALGParser.PONTO, i);
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitPrograma) {
			return visitor.visitPrograma(this);
		} else {
			return visitor.visitChildren(this);
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
	public parteDeclaracaoVariavel(): ParteDeclaracaoVariavelContext {
		return this.getTypedRuleContext(ParteDeclaracaoVariavelContext, 0) as ParteDeclaracaoVariavelContext;
	}
	public parteDeclaracaoSubRotina(): ParteDeclaracaoSubRotinaContext {
		return this.getTypedRuleContext(ParteDeclaracaoSubRotinaContext, 0) as ParteDeclaracaoSubRotinaContext;
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitBloco) {
			return visitor.visitBloco(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParteDeclaracaoSubRotinaContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaracaoProcedimento(): DeclaracaoProcedimentoContext {
		return this.getTypedRuleContext(DeclaracaoProcedimentoContext, 0) as DeclaracaoProcedimentoContext;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, 0);
	}
	public parteDeclaracaoSubRotina_aux(): ParteDeclaracaoSubRotina_auxContext {
		return this.getTypedRuleContext(ParteDeclaracaoSubRotina_auxContext, 0) as ParteDeclaracaoSubRotina_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_parteDeclaracaoSubRotina;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterParteDeclaracaoSubRotina) {
	 		listener.enterParteDeclaracaoSubRotina(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitParteDeclaracaoSubRotina) {
	 		listener.exitParteDeclaracaoSubRotina(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitParteDeclaracaoSubRotina) {
			return visitor.visitParteDeclaracaoSubRotina(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParteDeclaracaoSubRotina_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaracaoProcedimento(): DeclaracaoProcedimentoContext {
		return this.getTypedRuleContext(DeclaracaoProcedimentoContext, 0) as DeclaracaoProcedimentoContext;
	}
	public parteDeclaracaoSubRotina_aux(): ParteDeclaracaoSubRotina_auxContext {
		return this.getTypedRuleContext(ParteDeclaracaoSubRotina_auxContext, 0) as ParteDeclaracaoSubRotina_auxContext;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_parteDeclaracaoSubRotina_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterParteDeclaracaoSubRotina_aux) {
	 		listener.enterParteDeclaracaoSubRotina_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitParteDeclaracaoSubRotina_aux) {
	 		listener.exitParteDeclaracaoSubRotina_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitParteDeclaracaoSubRotina_aux) {
			return visitor.visitParteDeclaracaoSubRotina_aux(this);
		} else {
			return visitor.visitChildren(this);
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
	public declaracaoProcedimento_aux(): DeclaracaoProcedimento_auxContext {
		return this.getTypedRuleContext(DeclaracaoProcedimento_auxContext, 0) as DeclaracaoProcedimento_auxContext;
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitDeclaracaoProcedimento) {
			return visitor.visitDeclaracaoProcedimento(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoProcedimento_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parametros(): ParametrosContext {
		return this.getTypedRuleContext(ParametrosContext, 0) as ParametrosContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_declaracaoProcedimento_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterDeclaracaoProcedimento_aux) {
	 		listener.enterDeclaracaoProcedimento_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitDeclaracaoProcedimento_aux) {
	 		listener.exitDeclaracaoProcedimento_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitDeclaracaoProcedimento_aux) {
			return visitor.visitDeclaracaoProcedimento_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametrosContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.ABRE_PARENTESES, 0);
	}
	public secaoParametros(): SecaoParametrosContext {
		return this.getTypedRuleContext(SecaoParametrosContext, 0) as SecaoParametrosContext;
	}
	public parametros_aux(): Parametros_auxContext {
		return this.getTypedRuleContext(Parametros_auxContext, 0) as Parametros_auxContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.FECHA_PARENTESES, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_parametros;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterParametros) {
	 		listener.enterParametros(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitParametros) {
	 		listener.exitParametros(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitParametros) {
			return visitor.visitParametros(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parametros_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, 0);
	}
	public secaoParametros(): SecaoParametrosContext {
		return this.getTypedRuleContext(SecaoParametrosContext, 0) as SecaoParametrosContext;
	}
	public parametros_aux(): Parametros_auxContext {
		return this.getTypedRuleContext(Parametros_auxContext, 0) as Parametros_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_parametros_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterParametros_aux) {
	 		listener.enterParametros_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitParametros_aux) {
	 		listener.exitParametros_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitParametros_aux) {
			return visitor.visitParametros_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SecaoParametrosContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listaID(): ListaIDContext {
		return this.getTypedRuleContext(ListaIDContext, 0) as ListaIDContext;
	}
	public DOIS_PONTOS(): TerminalNode {
		return this.getToken(LALGParser.DOIS_PONTOS, 0);
	}
	public secaoParametrosFormais_aux(): SecaoParametrosFormais_auxContext {
		return this.getTypedRuleContext(SecaoParametrosFormais_auxContext, 0) as SecaoParametrosFormais_auxContext;
	}
	public VAR(): TerminalNode {
		return this.getToken(LALGParser.VAR, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_secaoParametros;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterSecaoParametros) {
	 		listener.enterSecaoParametros(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitSecaoParametros) {
	 		listener.exitSecaoParametros(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitSecaoParametros) {
			return visitor.visitSecaoParametros(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SecaoParametrosFormais_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public tipo(): TipoContext {
		return this.getTypedRuleContext(TipoContext, 0) as TipoContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_secaoParametrosFormais_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterSecaoParametrosFormais_aux) {
	 		listener.enterSecaoParametrosFormais_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitSecaoParametrosFormais_aux) {
	 		listener.exitSecaoParametrosFormais_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitSecaoParametrosFormais_aux) {
			return visitor.visitSecaoParametrosFormais_aux(this);
		} else {
			return visitor.visitChildren(this);
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
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
	public comandoComposto_aux(): ComandoComposto_auxContext {
		return this.getTypedRuleContext(ComandoComposto_auxContext, 0) as ComandoComposto_auxContext;
	}
	public END(): TerminalNode {
		return this.getToken(LALGParser.END, 0);
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitComandoComposto) {
			return visitor.visitComandoComposto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoComposto_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.PONTO_VIRGULA, 0);
	}
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
	public comandoComposto_aux(): ComandoComposto_auxContext {
		return this.getTypedRuleContext(ComandoComposto_auxContext, 0) as ComandoComposto_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_comandoComposto_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterComandoComposto_aux) {
	 		listener.enterComandoComposto_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitComandoComposto_aux) {
	 		listener.exitComandoComposto_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitComandoComposto_aux) {
			return visitor.visitComandoComposto_aux(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitComando) {
			return visitor.visitComando(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitAtribuicao) {
			return visitor.visitAtribuicao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChamadaProcedimentoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chamadaProcedimento_aux(): ChamadaProcedimento_auxContext {
		return this.getTypedRuleContext(ChamadaProcedimento_auxContext, 0) as ChamadaProcedimento_auxContext;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGParser.ID, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(LALGParser.READ, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(LALGParser.WRITE, 0);
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitChamadaProcedimento) {
			return visitor.visitChamadaProcedimento(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChamadaProcedimento_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.ABRE_PARENTESES, 0);
	}
	public listaExpressao(): ListaExpressaoContext {
		return this.getTypedRuleContext(ListaExpressaoContext, 0) as ListaExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(LALGParser.FECHA_PARENTESES, 0);
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_chamadaProcedimento_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterChamadaProcedimento_aux) {
	 		listener.enterChamadaProcedimento_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitChamadaProcedimento_aux) {
	 		listener.exitChamadaProcedimento_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitChamadaProcedimento_aux) {
			return visitor.visitChamadaProcedimento_aux(this);
		} else {
			return visitor.visitChildren(this);
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
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
	public comandoCondicional_aux(): ComandoCondicional_auxContext {
		return this.getTypedRuleContext(ComandoCondicional_auxContext, 0) as ComandoCondicional_auxContext;
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitComandoCondicional) {
			return visitor.visitComandoCondicional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoCondicional_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(LALGParser.ELSE, 0);
	}
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_comandoCondicional_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterComandoCondicional_aux) {
	 		listener.enterComandoCondicional_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitComandoCondicional_aux) {
	 		listener.exitComandoCondicional_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitComandoCondicional_aux) {
			return visitor.visitComandoCondicional_aux(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitComandoRepetitivo) {
			return visitor.visitComandoRepetitivo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaExpressaoContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public listaExpressao_aux(): ListaExpressao_auxContext {
		return this.getTypedRuleContext(ListaExpressao_auxContext, 0) as ListaExpressao_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_listaExpressao;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterListaExpressao) {
	 		listener.enterListaExpressao(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitListaExpressao) {
	 		listener.exitListaExpressao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitListaExpressao) {
			return visitor.visitListaExpressao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaExpressao_auxContext extends ParserRuleContext {
	constructor(parser?: LALGParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VIRGULA(): TerminalNode {
		return this.getToken(LALGParser.VIRGULA, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public listaExpressao_aux(): ListaExpressao_auxContext {
		return this.getTypedRuleContext(ListaExpressao_auxContext, 0) as ListaExpressao_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGParser.RULE_listaExpressao_aux;
	}
	public enterRule(listener: LALGParserListener): void {
	    if(listener.enterListaExpressao_aux) {
	 		listener.enterListaExpressao_aux(this);
		}
	}
	public exitRule(listener: LALGParserListener): void {
	    if(listener.exitListaExpressao_aux) {
	 		listener.exitListaExpressao_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGParserVisitor<Result>): Result {
		if (visitor.visitListaExpressao_aux) {
			return visitor.visitListaExpressao_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
