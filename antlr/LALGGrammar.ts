// Generated from ./antlr/LALGGrammar.g4 by ANTLR 4.13.0
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
import LALGGrammarListener from "./LALGGrammarListener.js";
import LALGGrammarVisitor from "./LALGGrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LALGGrammar extends Parser {
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
	public static readonly IGUAL = 27;
	public static readonly DIFERENTE = 28;
	public static readonly MAIOR_IGUAL = 29;
	public static readonly MENOR_IGUAL = 30;
	public static readonly MAIOR = 31;
	public static readonly MENOR = 32;
	public static readonly ABRE_PARENTESES = 33;
	public static readonly FECHA_PARENTESES = 34;
	public static readonly ABRE_COLCHETES = 35;
	public static readonly FECHA_COLCHETES = 36;
	public static readonly VIRGULA = 37;
	public static readonly PONTO_VIRGULA = 38;
	public static readonly DOIS_PONTOS = 39;
	public static readonly PONTO = 40;
	public static readonly AND = 41;
	public static readonly OR = 42;
	public static readonly ID = 43;
	public static readonly INT = 44;
	public static readonly FLOAT = 45;
	public static readonly INVALID_TOKEN = 46;
	public static readonly INVALID = 47;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_numero = 0;
	public static readonly RULE_termo = 1;
	public static readonly RULE_termo_aux = 2;
	public static readonly RULE_expressaoSimples = 3;
	public static readonly RULE_expressaoSimples_aux = 4;
	public static readonly RULE_expressao = 5;
	public static readonly RULE_relacao = 6;
	public static readonly RULE_expressao_aux = 7;
	public static readonly RULE_fator = 8;
	public static readonly RULE_variavel = 9;
	public static readonly RULE_variavel_aux = 10;
	public static readonly RULE_declaracaoVariavel = 11;
	public static readonly RULE_listaID = 12;
	public static readonly RULE_listaID_aux = 13;
	public static readonly RULE_parteDeclaracaoVariavel = 14;
	public static readonly RULE_parteDeclaracaoVariavel_aux = 15;
	public static readonly RULE_tipo = 16;
	public static readonly RULE_programa = 17;
	public static readonly RULE_bloco = 18;
	public static readonly RULE_parteDeclaracaoSubRotina = 19;
	public static readonly RULE_parteDeclaracaoSubRotina_aux = 20;
	public static readonly RULE_declaracaoProcedimento = 21;
	public static readonly RULE_declaracaoProcedimento_aux = 22;
	public static readonly RULE_parametros = 23;
	public static readonly RULE_parametros_aux = 24;
	public static readonly RULE_secaoParametros = 25;
	public static readonly RULE_secaoParametros_aux = 26;
	public static readonly RULE_comandoComposto = 27;
	public static readonly RULE_comandoComposto_aux = 28;
	public static readonly RULE_comando = 29;
	public static readonly RULE_atribuicao = 30;
	public static readonly RULE_chamadaProcedimento = 31;
	public static readonly RULE_chamadaProcedimento_aux = 32;
	public static readonly RULE_comandoCondicional = 33;
	public static readonly RULE_comandoCondicional_aux = 34;
	public static readonly RULE_comandoRepetitivo = 35;
	public static readonly RULE_listaExpressao = 36;
	public static readonly RULE_listaExpressao_aux = 37;
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
                                                            "'/'", "'='", 
                                                            "'<>'", "'>='", 
                                                            "'<='", "'>'", 
                                                            "'<'", "'('", 
                                                            "')'", "'['", 
                                                            "']'", "','", 
                                                            "';'", "':'", 
                                                            "'.'", "'and'", 
                                                            "'or'" ];
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
                                                             "IGUAL", "DIFERENTE", 
                                                             "MAIOR_IGUAL", 
                                                             "MENOR_IGUAL", 
                                                             "MAIOR", "MENOR", 
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
		"expressao", "relacao", "expressao_aux", "fator", "variavel", "variavel_aux", 
		"declaracaoVariavel", "listaID", "listaID_aux", "parteDeclaracaoVariavel", 
		"parteDeclaracaoVariavel_aux", "tipo", "programa", "bloco", "parteDeclaracaoSubRotina", 
		"parteDeclaracaoSubRotina_aux", "declaracaoProcedimento", "declaracaoProcedimento_aux", 
		"parametros", "parametros_aux", "secaoParametros", "secaoParametros_aux", 
		"comandoComposto", "comandoComposto_aux", "comando", "atribuicao", "chamadaProcedimento", 
		"chamadaProcedimento_aux", "comandoCondicional", "comandoCondicional_aux", 
		"comandoRepetitivo", "listaExpressao", "listaExpressao_aux",
	];
	public get grammarFileName(): string { return "LALGGrammar.g4"; }
	public get literalNames(): (string | null)[] { return LALGGrammar.literalNames; }
	public get symbolicNames(): (string | null)[] { return LALGGrammar.symbolicNames; }
	public get ruleNames(): string[] { return LALGGrammar.ruleNames; }
	public get serializedATN(): number[] { return LALGGrammar._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LALGGrammar._ATN, LALGGrammar.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public numero(): NumeroContext {
		let localctx: NumeroContext = new NumeroContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LALGGrammar.RULE_numero);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			_la = this._input.LA(1);
			if(!(_la===44 || _la===45)) {
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
		this.enterRule(localctx, 2, LALGGrammar.RULE_termo);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this.fator();
			this.state = 79;
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
		this.enterRule(localctx, 4, LALGGrammar.RULE_termo_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 81;
				_la = this._input.LA(1);
				if(!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 65539) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 82;
				this.fator();
				this.state = 83;
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
		this.enterRule(localctx, 6, LALGGrammar.RULE_expressaoSimples);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23 || _la===24) {
				{
				this.state = 87;
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

			this.state = 90;
			this.termo();
			this.state = 91;
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
		this.enterRule(localctx, 8, LALGGrammar.RULE_expressaoSimples_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 93;
				_la = this._input.LA(1);
				if(!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 524291) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 94;
				this.termo();
				this.state = 95;
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
		this.enterRule(localctx, 10, LALGGrammar.RULE_expressao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 99;
			this.expressaoSimples();
			this.state = 100;
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
	public relacao(): RelacaoContext {
		let localctx: RelacaoContext = new RelacaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LALGGrammar.RULE_relacao);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			_la = this._input.LA(1);
			if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 63) !== 0))) {
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
	public expressao_aux(): Expressao_auxContext {
		let localctx: Expressao_auxContext = new Expressao_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LALGGrammar.RULE_expressao_aux);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 104;
				this.relacao();
				this.state = 105;
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
		this.enterRule(localctx, 16, LALGGrammar.RULE_fator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
				{
				this.state = 109;
				this.variavel();
				}
				break;
			case 44:
			case 45:
				{
				this.state = 110;
				this.numero();
				}
				break;
			case 33:
				{
				{
				this.state = 111;
				this.match(LALGGrammar.ABRE_PARENTESES);
				this.state = 112;
				this.expressao();
				this.state = 113;
				this.match(LALGGrammar.FECHA_PARENTESES);
				}
				}
				break;
			case 21:
				{
				{
				this.state = 115;
				this.match(LALGGrammar.NOT);
				this.state = 116;
				this.fator();
				}
				}
				break;
			case 14:
				{
				this.state = 117;
				this.match(LALGGrammar.TRUE_CONST);
				}
				break;
			case 15:
				{
				this.state = 118;
				this.match(LALGGrammar.FALSE_CONST);
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
		this.enterRule(localctx, 18, LALGGrammar.RULE_variavel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 121;
			this.match(LALGGrammar.ID);
			this.state = 122;
			this.variavel_aux();
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
	public variavel_aux(): Variavel_auxContext {
		let localctx: Variavel_auxContext = new Variavel_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LALGGrammar.RULE_variavel_aux);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 124;
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
		this.enterRule(localctx, 22, LALGGrammar.RULE_declaracaoVariavel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			this.tipo();
			this.state = 128;
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
		this.enterRule(localctx, 24, LALGGrammar.RULE_listaID);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
			this.match(LALGGrammar.ID);
			this.state = 131;
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
		this.enterRule(localctx, 26, LALGGrammar.RULE_listaID_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37) {
				{
				this.state = 133;
				this.match(LALGGrammar.VIRGULA);
				this.state = 134;
				this.match(LALGGrammar.ID);
				this.state = 135;
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
		this.enterRule(localctx, 28, LALGGrammar.RULE_parteDeclaracaoVariavel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this.declaracaoVariavel();
			this.state = 139;
			this.parteDeclaracaoVariavel_aux();
			this.state = 140;
			this.match(LALGGrammar.PONTO_VIRGULA);
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
		this.enterRule(localctx, 30, LALGGrammar.RULE_parteDeclaracaoVariavel_aux);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 146;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 142;
				this.match(LALGGrammar.PONTO_VIRGULA);
				this.state = 143;
				this.declaracaoVariavel();
				this.state = 144;
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
		this.enterRule(localctx, 32, LALGGrammar.RULE_tipo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			_la = this._input.LA(1);
			if(!(_la===9 || _la===11)) {
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
		this.enterRule(localctx, 34, LALGGrammar.RULE_programa);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.match(LALGGrammar.PROGRAM);
			this.state = 151;
			this.match(LALGGrammar.ID);
			this.state = 152;
			this.match(LALGGrammar.PONTO_VIRGULA);
			this.state = 153;
			this.bloco();
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 154;
				this.match(LALGGrammar.PONTO);
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===40);
			this.state = 159;
			this.match(LALGGrammar.EOF);
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
		this.enterRule(localctx, 36, LALGGrammar.RULE_bloco);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9 || _la===11) {
				{
				this.state = 161;
				this.parteDeclaracaoVariavel();
				}
			}

			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 164;
				this.parteDeclaracaoSubRotina();
				}
			}

			this.state = 167;
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
		this.enterRule(localctx, 38, LALGGrammar.RULE_parteDeclaracaoSubRotina);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 169;
			this.declaracaoProcedimento();
			this.state = 170;
			this.match(LALGGrammar.PONTO_VIRGULA);
			this.state = 171;
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
		this.enterRule(localctx, 40, LALGGrammar.RULE_parteDeclaracaoSubRotina_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 173;
				this.declaracaoProcedimento();
				this.state = 174;
				this.parteDeclaracaoSubRotina_aux();
				this.state = 175;
				this.match(LALGGrammar.PONTO_VIRGULA);
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
		this.enterRule(localctx, 42, LALGGrammar.RULE_declaracaoProcedimento);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this.match(LALGGrammar.PROCEDURE);
			this.state = 180;
			this.match(LALGGrammar.ID);
			this.state = 181;
			this.declaracaoProcedimento_aux();
			this.state = 182;
			this.match(LALGGrammar.PONTO_VIRGULA);
			this.state = 183;
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
		this.enterRule(localctx, 44, LALGGrammar.RULE_declaracaoProcedimento_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 185;
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
		this.enterRule(localctx, 46, LALGGrammar.RULE_parametros);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			this.match(LALGGrammar.ABRE_PARENTESES);
			this.state = 189;
			this.secaoParametros();
			this.state = 190;
			this.parametros_aux();
			this.state = 191;
			this.match(LALGGrammar.FECHA_PARENTESES);
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
		this.enterRule(localctx, 48, LALGGrammar.RULE_parametros_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 193;
				this.match(LALGGrammar.PONTO_VIRGULA);
				this.state = 194;
				this.secaoParametros();
				this.state = 195;
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
		this.enterRule(localctx, 50, LALGGrammar.RULE_secaoParametros);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 199;
				this.match(LALGGrammar.VAR);
				}
			}

			this.state = 202;
			this.listaID();
			this.state = 203;
			this.match(LALGGrammar.DOIS_PONTOS);
			this.state = 204;
			this.secaoParametros_aux();
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
	public secaoParametros_aux(): SecaoParametros_auxContext {
		let localctx: SecaoParametros_auxContext = new SecaoParametros_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LALGGrammar.RULE_secaoParametros_aux);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 206;
				this.match(LALGGrammar.ID);
				}
				break;
			case 9:
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 207;
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
		this.enterRule(localctx, 54, LALGGrammar.RULE_comandoComposto);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.match(LALGGrammar.BEGIN);
			this.state = 211;
			this.comando();
			this.state = 212;
			this.comandoComposto_aux();
			this.state = 213;
			this.match(LALGGrammar.END);
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
		this.enterRule(localctx, 56, LALGGrammar.RULE_comandoComposto_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 215;
				this.match(LALGGrammar.PONTO_VIRGULA);
				this.state = 216;
				this.comando();
				this.state = 217;
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
		this.enterRule(localctx, 58, LALGGrammar.RULE_comando);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 221;
				this.atribuicao();
				}
				break;
			case 2:
				{
				this.state = 222;
				this.chamadaProcedimento();
				}
				break;
			case 3:
				{
				this.state = 223;
				this.comandoComposto();
				}
				break;
			case 4:
				{
				this.state = 224;
				this.comandoCondicional();
				}
				break;
			case 5:
				{
				this.state = 225;
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
		this.enterRule(localctx, 60, LALGGrammar.RULE_atribuicao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.variavel();
			this.state = 229;
			this.match(LALGGrammar.ATRIBUICAO);
			this.state = 230;
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
		this.enterRule(localctx, 62, LALGGrammar.RULE_chamadaProcedimento);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			_la = this._input.LA(1);
			if(!(((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & 2147483651) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 233;
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
		this.enterRule(localctx, 64, LALGGrammar.RULE_chamadaProcedimento_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 235;
				this.match(LALGGrammar.ABRE_PARENTESES);
				this.state = 236;
				this.listaExpressao();
				this.state = 237;
				this.match(LALGGrammar.FECHA_PARENTESES);
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
		this.enterRule(localctx, 66, LALGGrammar.RULE_comandoCondicional);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			this.match(LALGGrammar.IF);
			this.state = 242;
			this.expressao();
			this.state = 243;
			this.match(LALGGrammar.THEN);
			this.state = 244;
			this.comando();
			this.state = 245;
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
		this.enterRule(localctx, 68, LALGGrammar.RULE_comandoCondicional_aux);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 247;
				this.match(LALGGrammar.ELSE);
				this.state = 248;
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
		this.enterRule(localctx, 70, LALGGrammar.RULE_comandoRepetitivo);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this.match(LALGGrammar.WHILE);
			this.state = 252;
			this.expressao();
			this.state = 253;
			this.match(LALGGrammar.DO);
			this.state = 254;
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
		this.enterRule(localctx, 72, LALGGrammar.RULE_listaExpressao);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 256;
			this.expressao();
			this.state = 257;
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
		this.enterRule(localctx, 74, LALGGrammar.RULE_listaExpressao_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37) {
				{
				this.state = 259;
				this.match(LALGGrammar.VIRGULA);
				this.state = 260;
				this.expressao();
				this.state = 261;
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

	public static readonly _serializedATN: number[] = [4,1,47,266,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,1,0,1,1,
	1,1,1,1,1,2,1,2,1,2,1,2,3,2,86,8,2,1,3,3,3,89,8,3,1,3,1,3,1,3,1,4,1,4,1,
	4,1,4,3,4,98,8,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,3,7,108,8,7,1,8,1,8,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,120,8,8,1,9,1,9,1,9,1,10,3,10,126,8,10,
	1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,3,13,137,8,13,1,14,1,14,1,
	14,1,14,1,15,1,15,1,15,1,15,3,15,147,8,15,1,16,1,16,1,17,1,17,1,17,1,17,
	1,17,4,17,156,8,17,11,17,12,17,157,1,17,1,17,1,18,3,18,163,8,18,1,18,3,
	18,166,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,3,20,178,
	8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,3,22,187,8,22,1,23,1,23,1,23,1,
	23,1,23,1,24,1,24,1,24,1,24,3,24,198,8,24,1,25,3,25,201,8,25,1,25,1,25,
	1,25,1,25,1,26,1,26,3,26,209,8,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,
	28,1,28,3,28,220,8,28,1,29,1,29,1,29,1,29,1,29,3,29,227,8,29,1,30,1,30,
	1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,32,3,32,240,8,32,1,33,1,33,1,
	33,1,33,1,33,1,33,1,34,1,34,3,34,250,8,34,1,35,1,35,1,35,1,35,1,35,1,36,
	1,36,1,36,1,37,1,37,1,37,1,37,3,37,264,8,37,1,37,0,0,38,0,2,4,6,8,10,12,
	14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
	62,64,66,68,70,72,74,0,7,1,0,44,45,2,0,25,26,41,41,1,0,23,24,2,0,23,24,
	42,42,1,0,27,32,2,0,9,9,11,11,2,0,12,13,43,43,255,0,76,1,0,0,0,2,78,1,0,
	0,0,4,85,1,0,0,0,6,88,1,0,0,0,8,97,1,0,0,0,10,99,1,0,0,0,12,102,1,0,0,0,
	14,107,1,0,0,0,16,119,1,0,0,0,18,121,1,0,0,0,20,125,1,0,0,0,22,127,1,0,
	0,0,24,130,1,0,0,0,26,136,1,0,0,0,28,138,1,0,0,0,30,146,1,0,0,0,32,148,
	1,0,0,0,34,150,1,0,0,0,36,162,1,0,0,0,38,169,1,0,0,0,40,177,1,0,0,0,42,
	179,1,0,0,0,44,186,1,0,0,0,46,188,1,0,0,0,48,197,1,0,0,0,50,200,1,0,0,0,
	52,208,1,0,0,0,54,210,1,0,0,0,56,219,1,0,0,0,58,226,1,0,0,0,60,228,1,0,
	0,0,62,232,1,0,0,0,64,239,1,0,0,0,66,241,1,0,0,0,68,249,1,0,0,0,70,251,
	1,0,0,0,72,256,1,0,0,0,74,263,1,0,0,0,76,77,7,0,0,0,77,1,1,0,0,0,78,79,
	3,16,8,0,79,80,3,4,2,0,80,3,1,0,0,0,81,82,7,1,0,0,82,83,3,16,8,0,83,84,
	3,4,2,0,84,86,1,0,0,0,85,81,1,0,0,0,85,86,1,0,0,0,86,5,1,0,0,0,87,89,7,
	2,0,0,88,87,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,3,2,1,0,91,92,3,8,
	4,0,92,7,1,0,0,0,93,94,7,3,0,0,94,95,3,2,1,0,95,96,3,8,4,0,96,98,1,0,0,
	0,97,93,1,0,0,0,97,98,1,0,0,0,98,9,1,0,0,0,99,100,3,6,3,0,100,101,3,14,
	7,0,101,11,1,0,0,0,102,103,7,4,0,0,103,13,1,0,0,0,104,105,3,12,6,0,105,
	106,3,6,3,0,106,108,1,0,0,0,107,104,1,0,0,0,107,108,1,0,0,0,108,15,1,0,
	0,0,109,120,3,18,9,0,110,120,3,0,0,0,111,112,5,33,0,0,112,113,3,10,5,0,
	113,114,5,34,0,0,114,120,1,0,0,0,115,116,5,21,0,0,116,120,3,16,8,0,117,
	120,5,14,0,0,118,120,5,15,0,0,119,109,1,0,0,0,119,110,1,0,0,0,119,111,1,
	0,0,0,119,115,1,0,0,0,119,117,1,0,0,0,119,118,1,0,0,0,120,17,1,0,0,0,121,
	122,5,43,0,0,122,123,3,20,10,0,123,19,1,0,0,0,124,126,3,10,5,0,125,124,
	1,0,0,0,125,126,1,0,0,0,126,21,1,0,0,0,127,128,3,32,16,0,128,129,3,24,12,
	0,129,23,1,0,0,0,130,131,5,43,0,0,131,132,3,26,13,0,132,25,1,0,0,0,133,
	134,5,37,0,0,134,135,5,43,0,0,135,137,3,26,13,0,136,133,1,0,0,0,136,137,
	1,0,0,0,137,27,1,0,0,0,138,139,3,22,11,0,139,140,3,30,15,0,140,141,5,38,
	0,0,141,29,1,0,0,0,142,143,5,38,0,0,143,144,3,22,11,0,144,145,3,30,15,0,
	145,147,1,0,0,0,146,142,1,0,0,0,146,147,1,0,0,0,147,31,1,0,0,0,148,149,
	7,5,0,0,149,33,1,0,0,0,150,151,5,4,0,0,151,152,5,43,0,0,152,153,5,38,0,
	0,153,155,3,36,18,0,154,156,5,40,0,0,155,154,1,0,0,0,156,157,1,0,0,0,157,
	155,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,5,0,0,1,160,35,1,0,
	0,0,161,163,3,28,14,0,162,161,1,0,0,0,162,163,1,0,0,0,163,165,1,0,0,0,164,
	166,3,38,19,0,165,164,1,0,0,0,165,166,1,0,0,0,166,167,1,0,0,0,167,168,3,
	54,27,0,168,37,1,0,0,0,169,170,3,42,21,0,170,171,5,38,0,0,171,172,3,40,
	20,0,172,39,1,0,0,0,173,174,3,42,21,0,174,175,3,40,20,0,175,176,5,38,0,
	0,176,178,1,0,0,0,177,173,1,0,0,0,177,178,1,0,0,0,178,41,1,0,0,0,179,180,
	5,8,0,0,180,181,5,43,0,0,181,182,3,44,22,0,182,183,5,38,0,0,183,184,3,36,
	18,0,184,43,1,0,0,0,185,187,3,46,23,0,186,185,1,0,0,0,186,187,1,0,0,0,187,
	45,1,0,0,0,188,189,5,33,0,0,189,190,3,50,25,0,190,191,3,48,24,0,191,192,
	5,34,0,0,192,47,1,0,0,0,193,194,5,38,0,0,194,195,3,50,25,0,195,196,3,48,
	24,0,196,198,1,0,0,0,197,193,1,0,0,0,197,198,1,0,0,0,198,49,1,0,0,0,199,
	201,5,7,0,0,200,199,1,0,0,0,200,201,1,0,0,0,201,202,1,0,0,0,202,203,3,24,
	12,0,203,204,5,39,0,0,204,205,3,52,26,0,205,51,1,0,0,0,206,209,5,43,0,0,
	207,209,3,32,16,0,208,206,1,0,0,0,208,207,1,0,0,0,209,53,1,0,0,0,210,211,
	5,5,0,0,211,212,3,58,29,0,212,213,3,56,28,0,213,214,5,6,0,0,214,55,1,0,
	0,0,215,216,5,38,0,0,216,217,3,58,29,0,217,218,3,56,28,0,218,220,1,0,0,
	0,219,215,1,0,0,0,219,220,1,0,0,0,220,57,1,0,0,0,221,227,3,60,30,0,222,
	227,3,62,31,0,223,227,3,54,27,0,224,227,3,66,33,0,225,227,3,70,35,0,226,
	221,1,0,0,0,226,222,1,0,0,0,226,223,1,0,0,0,226,224,1,0,0,0,226,225,1,0,
	0,0,227,59,1,0,0,0,228,229,3,18,9,0,229,230,5,22,0,0,230,231,3,10,5,0,231,
	61,1,0,0,0,232,233,7,6,0,0,233,234,3,64,32,0,234,63,1,0,0,0,235,236,5,33,
	0,0,236,237,3,72,36,0,237,238,5,34,0,0,238,240,1,0,0,0,239,235,1,0,0,0,
	239,240,1,0,0,0,240,65,1,0,0,0,241,242,5,16,0,0,242,243,3,10,5,0,243,244,
	5,17,0,0,244,245,3,58,29,0,245,246,3,68,34,0,246,67,1,0,0,0,247,248,5,18,
	0,0,248,250,3,58,29,0,249,247,1,0,0,0,249,250,1,0,0,0,250,69,1,0,0,0,251,
	252,5,19,0,0,252,253,3,10,5,0,253,254,5,20,0,0,254,255,3,58,29,0,255,71,
	1,0,0,0,256,257,3,10,5,0,257,258,3,74,37,0,258,73,1,0,0,0,259,260,5,37,
	0,0,260,261,3,10,5,0,261,262,3,74,37,0,262,264,1,0,0,0,263,259,1,0,0,0,
	263,264,1,0,0,0,264,75,1,0,0,0,21,85,88,97,107,119,125,136,146,157,162,
	165,177,186,197,200,208,219,226,239,249,263];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LALGGrammar.__ATN) {
			LALGGrammar.__ATN = new ATNDeserializer().deserialize(LALGGrammar._serializedATN);
		}

		return LALGGrammar.__ATN;
	}


	static DecisionsToDFA = LALGGrammar._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class NumeroContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(LALGGrammar.INT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(LALGGrammar.FLOAT, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_numero;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterNumero) {
	 		listener.enterNumero(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitNumero) {
	 		listener.exitNumero(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitNumero) {
			return visitor.visitNumero(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
    	return LALGGrammar.RULE_termo;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterTermo) {
	 		listener.enterTermo(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitTermo) {
	 		listener.exitTermo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitTermo) {
			return visitor.visitTermo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Termo_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(LALGGrammar.MULT, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(LALGGrammar.AND, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(LALGGrammar.DIV, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_termo_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterTermo_aux) {
	 		listener.enterTermo_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitTermo_aux) {
	 		listener.exitTermo_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitTermo_aux) {
			return visitor.visitTermo_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoSimplesContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(LALGGrammar.MAIS, 0);
	}
	public MENOS(): TerminalNode {
		return this.getToken(LALGGrammar.MENOS, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_expressaoSimples;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterExpressaoSimples) {
	 		listener.enterExpressaoSimples(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitExpressaoSimples) {
	 		listener.exitExpressaoSimples(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitExpressaoSimples) {
			return visitor.visitExpressaoSimples(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoSimples_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(LALGGrammar.MAIS, 0);
	}
	public MENOS(): TerminalNode {
		return this.getToken(LALGGrammar.MENOS, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(LALGGrammar.OR, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_expressaoSimples_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterExpressaoSimples_aux) {
	 		listener.enterExpressaoSimples_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitExpressaoSimples_aux) {
	 		listener.exitExpressaoSimples_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitExpressaoSimples_aux) {
			return visitor.visitExpressaoSimples_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressaoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
    	return LALGGrammar.RULE_expressao;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterExpressao) {
	 		listener.enterExpressao(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitExpressao) {
	 		listener.exitExpressao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitExpressao) {
			return visitor.visitExpressao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelacaoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IGUAL(): TerminalNode {
		return this.getToken(LALGGrammar.IGUAL, 0);
	}
	public MENOR(): TerminalNode {
		return this.getToken(LALGGrammar.MENOR, 0);
	}
	public MAIOR(): TerminalNode {
		return this.getToken(LALGGrammar.MAIOR, 0);
	}
	public MENOR_IGUAL(): TerminalNode {
		return this.getToken(LALGGrammar.MENOR_IGUAL, 0);
	}
	public MAIOR_IGUAL(): TerminalNode {
		return this.getToken(LALGGrammar.MAIOR_IGUAL, 0);
	}
	public DIFERENTE(): TerminalNode {
		return this.getToken(LALGGrammar.DIFERENTE, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_relacao;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterRelacao) {
	 		listener.enterRelacao(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitRelacao) {
	 		listener.exitRelacao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitRelacao) {
			return visitor.visitRelacao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expressao_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relacao(): RelacaoContext {
		return this.getTypedRuleContext(RelacaoContext, 0) as RelacaoContext;
	}
	public expressaoSimples(): ExpressaoSimplesContext {
		return this.getTypedRuleContext(ExpressaoSimplesContext, 0) as ExpressaoSimplesContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_expressao_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterExpressao_aux) {
	 		listener.enterExpressao_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitExpressao_aux) {
	 		listener.exitExpressao_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitExpressao_aux) {
			return visitor.visitExpressao_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FatorContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(LALGGrammar.TRUE_CONST, 0);
	}
	public FALSE_CONST(): TerminalNode {
		return this.getToken(LALGGrammar.FALSE_CONST, 0);
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(LALGGrammar.ABRE_PARENTESES, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(LALGGrammar.FECHA_PARENTESES, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(LALGGrammar.NOT, 0);
	}
	public fator(): FatorContext {
		return this.getTypedRuleContext(FatorContext, 0) as FatorContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_fator;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterFator) {
	 		listener.enterFator(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitFator) {
	 		listener.exitFator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitFator) {
			return visitor.visitFator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariavelContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGGrammar.ID, 0);
	}
	public variavel_aux(): Variavel_auxContext {
		return this.getTypedRuleContext(Variavel_auxContext, 0) as Variavel_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_variavel;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterVariavel) {
	 		listener.enterVariavel(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitVariavel) {
	 		listener.exitVariavel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitVariavel) {
			return visitor.visitVariavel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variavel_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_variavel_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterVariavel_aux) {
	 		listener.enterVariavel_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitVariavel_aux) {
	 		listener.exitVariavel_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitVariavel_aux) {
			return visitor.visitVariavel_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoVariavelContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
    	return LALGGrammar.RULE_declaracaoVariavel;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterDeclaracaoVariavel) {
	 		listener.enterDeclaracaoVariavel(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitDeclaracaoVariavel) {
	 		listener.exitDeclaracaoVariavel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitDeclaracaoVariavel) {
			return visitor.visitDeclaracaoVariavel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaIDContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGGrammar.ID, 0);
	}
	public listaID_aux(): ListaID_auxContext {
		return this.getTypedRuleContext(ListaID_auxContext, 0) as ListaID_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_listaID;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterListaID) {
	 		listener.enterListaID(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitListaID) {
	 		listener.exitListaID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitListaID) {
			return visitor.visitListaID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaID_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VIRGULA(): TerminalNode {
		return this.getToken(LALGGrammar.VIRGULA, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LALGGrammar.ID, 0);
	}
	public listaID_aux(): ListaID_auxContext {
		return this.getTypedRuleContext(ListaID_auxContext, 0) as ListaID_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_listaID_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterListaID_aux) {
	 		listener.enterListaID_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitListaID_aux) {
	 		listener.exitListaID_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitListaID_aux) {
			return visitor.visitListaID_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParteDeclaracaoVariavelContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(LALGGrammar.PONTO_VIRGULA, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_parteDeclaracaoVariavel;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterParteDeclaracaoVariavel) {
	 		listener.enterParteDeclaracaoVariavel(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitParteDeclaracaoVariavel) {
	 		listener.exitParteDeclaracaoVariavel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitParteDeclaracaoVariavel) {
			return visitor.visitParteDeclaracaoVariavel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParteDeclaracaoVariavel_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGGrammar.PONTO_VIRGULA, 0);
	}
	public declaracaoVariavel(): DeclaracaoVariavelContext {
		return this.getTypedRuleContext(DeclaracaoVariavelContext, 0) as DeclaracaoVariavelContext;
	}
	public parteDeclaracaoVariavel_aux(): ParteDeclaracaoVariavel_auxContext {
		return this.getTypedRuleContext(ParteDeclaracaoVariavel_auxContext, 0) as ParteDeclaracaoVariavel_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_parteDeclaracaoVariavel_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterParteDeclaracaoVariavel_aux) {
	 		listener.enterParteDeclaracaoVariavel_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitParteDeclaracaoVariavel_aux) {
	 		listener.exitParteDeclaracaoVariavel_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitParteDeclaracaoVariavel_aux) {
			return visitor.visitParteDeclaracaoVariavel_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TipoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL_TIPO(): TerminalNode {
		return this.getToken(LALGGrammar.BOOL_TIPO, 0);
	}
	public INT_TIPO(): TerminalNode {
		return this.getToken(LALGGrammar.INT_TIPO, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_tipo;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterTipo) {
	 		listener.enterTipo(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitTipo) {
	 		listener.exitTipo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitTipo) {
			return visitor.visitTipo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramaContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROGRAM(): TerminalNode {
		return this.getToken(LALGGrammar.PROGRAM, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LALGGrammar.ID, 0);
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGGrammar.PONTO_VIRGULA, 0);
	}
	public bloco(): BlocoContext {
		return this.getTypedRuleContext(BlocoContext, 0) as BlocoContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(LALGGrammar.EOF, 0);
	}
	public PONTO_list(): TerminalNode[] {
	    	return this.getTokens(LALGGrammar.PONTO);
	}
	public PONTO(i: number): TerminalNode {
		return this.getToken(LALGGrammar.PONTO, i);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_programa;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterPrograma) {
	 		listener.enterPrograma(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitPrograma) {
	 		listener.exitPrograma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitPrograma) {
			return visitor.visitPrograma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlocoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
    	return LALGGrammar.RULE_bloco;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterBloco) {
	 		listener.enterBloco(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitBloco) {
	 		listener.exitBloco(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitBloco) {
			return visitor.visitBloco(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParteDeclaracaoSubRotinaContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaracaoProcedimento(): DeclaracaoProcedimentoContext {
		return this.getTypedRuleContext(DeclaracaoProcedimentoContext, 0) as DeclaracaoProcedimentoContext;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGGrammar.PONTO_VIRGULA, 0);
	}
	public parteDeclaracaoSubRotina_aux(): ParteDeclaracaoSubRotina_auxContext {
		return this.getTypedRuleContext(ParteDeclaracaoSubRotina_auxContext, 0) as ParteDeclaracaoSubRotina_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_parteDeclaracaoSubRotina;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterParteDeclaracaoSubRotina) {
	 		listener.enterParteDeclaracaoSubRotina(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitParteDeclaracaoSubRotina) {
	 		listener.exitParteDeclaracaoSubRotina(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitParteDeclaracaoSubRotina) {
			return visitor.visitParteDeclaracaoSubRotina(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParteDeclaracaoSubRotina_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(LALGGrammar.PONTO_VIRGULA, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_parteDeclaracaoSubRotina_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterParteDeclaracaoSubRotina_aux) {
	 		listener.enterParteDeclaracaoSubRotina_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitParteDeclaracaoSubRotina_aux) {
	 		listener.exitParteDeclaracaoSubRotina_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitParteDeclaracaoSubRotina_aux) {
			return visitor.visitParteDeclaracaoSubRotina_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoProcedimentoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROCEDURE(): TerminalNode {
		return this.getToken(LALGGrammar.PROCEDURE, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LALGGrammar.ID, 0);
	}
	public declaracaoProcedimento_aux(): DeclaracaoProcedimento_auxContext {
		return this.getTypedRuleContext(DeclaracaoProcedimento_auxContext, 0) as DeclaracaoProcedimento_auxContext;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGGrammar.PONTO_VIRGULA, 0);
	}
	public bloco(): BlocoContext {
		return this.getTypedRuleContext(BlocoContext, 0) as BlocoContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_declaracaoProcedimento;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterDeclaracaoProcedimento) {
	 		listener.enterDeclaracaoProcedimento(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitDeclaracaoProcedimento) {
	 		listener.exitDeclaracaoProcedimento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitDeclaracaoProcedimento) {
			return visitor.visitDeclaracaoProcedimento(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaracaoProcedimento_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parametros(): ParametrosContext {
		return this.getTypedRuleContext(ParametrosContext, 0) as ParametrosContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_declaracaoProcedimento_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterDeclaracaoProcedimento_aux) {
	 		listener.enterDeclaracaoProcedimento_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitDeclaracaoProcedimento_aux) {
	 		listener.exitDeclaracaoProcedimento_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitDeclaracaoProcedimento_aux) {
			return visitor.visitDeclaracaoProcedimento_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametrosContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(LALGGrammar.ABRE_PARENTESES, 0);
	}
	public secaoParametros(): SecaoParametrosContext {
		return this.getTypedRuleContext(SecaoParametrosContext, 0) as SecaoParametrosContext;
	}
	public parametros_aux(): Parametros_auxContext {
		return this.getTypedRuleContext(Parametros_auxContext, 0) as Parametros_auxContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(LALGGrammar.FECHA_PARENTESES, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_parametros;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterParametros) {
	 		listener.enterParametros(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitParametros) {
	 		listener.exitParametros(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitParametros) {
			return visitor.visitParametros(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parametros_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGGrammar.PONTO_VIRGULA, 0);
	}
	public secaoParametros(): SecaoParametrosContext {
		return this.getTypedRuleContext(SecaoParametrosContext, 0) as SecaoParametrosContext;
	}
	public parametros_aux(): Parametros_auxContext {
		return this.getTypedRuleContext(Parametros_auxContext, 0) as Parametros_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_parametros_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterParametros_aux) {
	 		listener.enterParametros_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitParametros_aux) {
	 		listener.exitParametros_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitParametros_aux) {
			return visitor.visitParametros_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SecaoParametrosContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listaID(): ListaIDContext {
		return this.getTypedRuleContext(ListaIDContext, 0) as ListaIDContext;
	}
	public DOIS_PONTOS(): TerminalNode {
		return this.getToken(LALGGrammar.DOIS_PONTOS, 0);
	}
	public secaoParametros_aux(): SecaoParametros_auxContext {
		return this.getTypedRuleContext(SecaoParametros_auxContext, 0) as SecaoParametros_auxContext;
	}
	public VAR(): TerminalNode {
		return this.getToken(LALGGrammar.VAR, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_secaoParametros;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterSecaoParametros) {
	 		listener.enterSecaoParametros(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitSecaoParametros) {
	 		listener.exitSecaoParametros(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitSecaoParametros) {
			return visitor.visitSecaoParametros(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SecaoParametros_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGGrammar.ID, 0);
	}
	public tipo(): TipoContext {
		return this.getTypedRuleContext(TipoContext, 0) as TipoContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_secaoParametros_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterSecaoParametros_aux) {
	 		listener.enterSecaoParametros_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitSecaoParametros_aux) {
	 		listener.exitSecaoParametros_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitSecaoParametros_aux) {
			return visitor.visitSecaoParametros_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoCompostoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BEGIN(): TerminalNode {
		return this.getToken(LALGGrammar.BEGIN, 0);
	}
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
	public comandoComposto_aux(): ComandoComposto_auxContext {
		return this.getTypedRuleContext(ComandoComposto_auxContext, 0) as ComandoComposto_auxContext;
	}
	public END(): TerminalNode {
		return this.getToken(LALGGrammar.END, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_comandoComposto;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterComandoComposto) {
	 		listener.enterComandoComposto(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitComandoComposto) {
	 		listener.exitComandoComposto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitComandoComposto) {
			return visitor.visitComandoComposto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoComposto_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PONTO_VIRGULA(): TerminalNode {
		return this.getToken(LALGGrammar.PONTO_VIRGULA, 0);
	}
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
	public comandoComposto_aux(): ComandoComposto_auxContext {
		return this.getTypedRuleContext(ComandoComposto_auxContext, 0) as ComandoComposto_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_comandoComposto_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterComandoComposto_aux) {
	 		listener.enterComandoComposto_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitComandoComposto_aux) {
	 		listener.exitComandoComposto_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitComandoComposto_aux) {
			return visitor.visitComandoComposto_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
    	return LALGGrammar.RULE_comando;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterComando) {
	 		listener.enterComando(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitComando) {
	 		listener.exitComando(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitComando) {
			return visitor.visitComando(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtribuicaoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variavel(): VariavelContext {
		return this.getTypedRuleContext(VariavelContext, 0) as VariavelContext;
	}
	public ATRIBUICAO(): TerminalNode {
		return this.getToken(LALGGrammar.ATRIBUICAO, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_atribuicao;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterAtribuicao) {
	 		listener.enterAtribuicao(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitAtribuicao) {
	 		listener.exitAtribuicao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitAtribuicao) {
			return visitor.visitAtribuicao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChamadaProcedimentoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chamadaProcedimento_aux(): ChamadaProcedimento_auxContext {
		return this.getTypedRuleContext(ChamadaProcedimento_auxContext, 0) as ChamadaProcedimento_auxContext;
	}
	public ID(): TerminalNode {
		return this.getToken(LALGGrammar.ID, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(LALGGrammar.READ, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(LALGGrammar.WRITE, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_chamadaProcedimento;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterChamadaProcedimento) {
	 		listener.enterChamadaProcedimento(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitChamadaProcedimento) {
	 		listener.exitChamadaProcedimento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitChamadaProcedimento) {
			return visitor.visitChamadaProcedimento(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChamadaProcedimento_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABRE_PARENTESES(): TerminalNode {
		return this.getToken(LALGGrammar.ABRE_PARENTESES, 0);
	}
	public listaExpressao(): ListaExpressaoContext {
		return this.getTypedRuleContext(ListaExpressaoContext, 0) as ListaExpressaoContext;
	}
	public FECHA_PARENTESES(): TerminalNode {
		return this.getToken(LALGGrammar.FECHA_PARENTESES, 0);
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_chamadaProcedimento_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterChamadaProcedimento_aux) {
	 		listener.enterChamadaProcedimento_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitChamadaProcedimento_aux) {
	 		listener.exitChamadaProcedimento_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitChamadaProcedimento_aux) {
			return visitor.visitChamadaProcedimento_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoCondicionalContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(LALGGrammar.IF, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(LALGGrammar.THEN, 0);
	}
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
	public comandoCondicional_aux(): ComandoCondicional_auxContext {
		return this.getTypedRuleContext(ComandoCondicional_auxContext, 0) as ComandoCondicional_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_comandoCondicional;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterComandoCondicional) {
	 		listener.enterComandoCondicional(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitComandoCondicional) {
	 		listener.exitComandoCondicional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitComandoCondicional) {
			return visitor.visitComandoCondicional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoCondicional_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(LALGGrammar.ELSE, 0);
	}
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_comandoCondicional_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterComandoCondicional_aux) {
	 		listener.enterComandoCondicional_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitComandoCondicional_aux) {
	 		listener.exitComandoCondicional_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitComandoCondicional_aux) {
			return visitor.visitComandoCondicional_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoRepetitivoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(LALGGrammar.WHILE, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public DO(): TerminalNode {
		return this.getToken(LALGGrammar.DO, 0);
	}
	public comando(): ComandoContext {
		return this.getTypedRuleContext(ComandoContext, 0) as ComandoContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_comandoRepetitivo;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterComandoRepetitivo) {
	 		listener.enterComandoRepetitivo(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitComandoRepetitivo) {
	 		listener.exitComandoRepetitivo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitComandoRepetitivo) {
			return visitor.visitComandoRepetitivo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaExpressaoContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
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
    	return LALGGrammar.RULE_listaExpressao;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterListaExpressao) {
	 		listener.enterListaExpressao(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitListaExpressao) {
	 		listener.exitListaExpressao(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitListaExpressao) {
			return visitor.visitListaExpressao(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListaExpressao_auxContext extends ParserRuleContext {
	constructor(parser?: LALGGrammar, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VIRGULA(): TerminalNode {
		return this.getToken(LALGGrammar.VIRGULA, 0);
	}
	public expressao(): ExpressaoContext {
		return this.getTypedRuleContext(ExpressaoContext, 0) as ExpressaoContext;
	}
	public listaExpressao_aux(): ListaExpressao_auxContext {
		return this.getTypedRuleContext(ListaExpressao_auxContext, 0) as ListaExpressao_auxContext;
	}
    public get ruleIndex(): number {
    	return LALGGrammar.RULE_listaExpressao_aux;
	}
	public enterRule(listener: LALGGrammarListener): void {
	    if(listener.enterListaExpressao_aux) {
	 		listener.enterListaExpressao_aux(this);
		}
	}
	public exitRule(listener: LALGGrammarListener): void {
	    if(listener.exitListaExpressao_aux) {
	 		listener.exitListaExpressao_aux(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LALGGrammarVisitor<Result>): Result {
		if (visitor.visitListaExpressao_aux) {
			return visitor.visitListaExpressao_aux(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
