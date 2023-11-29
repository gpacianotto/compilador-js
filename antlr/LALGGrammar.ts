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
	public static readonly DIV_INT = 27;
	public static readonly IGUAL = 28;
	public static readonly DIFERENTE = 29;
	public static readonly MAIOR_IGUAL = 30;
	public static readonly MENOR_IGUAL = 31;
	public static readonly MAIOR = 32;
	public static readonly MENOR = 33;
	public static readonly ABRE_PARENTESES = 34;
	public static readonly FECHA_PARENTESES = 35;
	public static readonly ABRE_COLCHETES = 36;
	public static readonly FECHA_COLCHETES = 37;
	public static readonly VIRGULA = 38;
	public static readonly PONTO_VIRGULA = 39;
	public static readonly DOIS_PONTOS = 40;
	public static readonly PONTO = 41;
	public static readonly AND = 42;
	public static readonly OR = 43;
	public static readonly ID = 44;
	public static readonly INT = 45;
	public static readonly FLOAT = 46;
	public static readonly INVALID_TOKEN = 47;
	public static readonly INVALID = 48;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_numero = 0;
	public static readonly RULE_termo = 1;
	public static readonly RULE_termo_aux = 2;
	public static readonly RULE_expressaoSimples = 3;
	public static readonly RULE_expressaoSimples_aux = 4;
	public static readonly RULE_expressao = 5;
	public static readonly RULE_expressao_aux = 6;
	public static readonly RULE_relacao = 7;
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
                                                            "'/'", "'div'", 
                                                            "'='", "'<>'", 
                                                            "'>='", "'<='", 
                                                            "'>'", "'<'", 
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
                                                             "DIV_INT", 
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
		"expressao", "expressao_aux", "relacao", "fator", "variavel", "variavel_aux", 
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
			if(!(_la===45 || _la===46)) {
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
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 131077) !== 0)) {
				{
				this.state = 81;
				_la = this._input.LA(1);
				if(!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 131077) !== 0))) {
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
			_la = this._input.LA(1);
			if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 1048579) !== 0)) {
				{
				this.state = 93;
				_la = this._input.LA(1);
				if(!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 1048579) !== 0))) {
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
	public expressao_aux(): Expressao_auxContext {
		let localctx: Expressao_auxContext = new Expressao_auxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LALGGrammar.RULE_expressao_aux);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 63) !== 0)) {
				{
				this.state = 102;
				this.relacao();
				this.state = 103;
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
	public relacao(): RelacaoContext {
		let localctx: RelacaoContext = new RelacaoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LALGGrammar.RULE_relacao);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 107;
			_la = this._input.LA(1);
			if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 63) !== 0))) {
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
	public fator(): FatorContext {
		let localctx: FatorContext = new FatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LALGGrammar.RULE_fator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
				{
				this.state = 109;
				this.variavel();
				}
				break;
			case 45:
			case 46:
				{
				this.state = 110;
				this.numero();
				}
				break;
			case 34:
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 27312128) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 7169) !== 0)) {
				{
				this.state = 123;
				this.expressao();
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
	public declaracaoVariavel(): DeclaracaoVariavelContext {
		let localctx: DeclaracaoVariavelContext = new DeclaracaoVariavelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LALGGrammar.RULE_declaracaoVariavel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.tipo();
			this.state = 127;
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
			this.state = 129;
			this.match(LALGGrammar.ID);
			this.state = 130;
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
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 132;
				this.match(LALGGrammar.VIRGULA);
				this.state = 133;
				this.match(LALGGrammar.ID);
				this.state = 134;
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
			this.state = 137;
			this.declaracaoVariavel();
			this.state = 138;
			this.parteDeclaracaoVariavel_aux();
			this.state = 139;
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
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 141;
				this.match(LALGGrammar.PONTO_VIRGULA);
				this.state = 142;
				this.declaracaoVariavel();
				this.state = 143;
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
			this.state = 147;
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
			this.state = 149;
			this.match(LALGGrammar.PROGRAM);
			this.state = 150;
			this.match(LALGGrammar.ID);
			this.state = 151;
			this.match(LALGGrammar.PONTO_VIRGULA);
			this.state = 152;
			this.bloco();
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 153;
				this.match(LALGGrammar.PONTO);
				}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===41);
			this.state = 158;
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
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9 || _la===11) {
				{
				this.state = 160;
				this.parteDeclaracaoVariavel();
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 163;
				this.parteDeclaracaoSubRotina();
				}
			}

			this.state = 166;
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
			this.state = 168;
			this.declaracaoProcedimento();
			this.state = 169;
			this.match(LALGGrammar.PONTO_VIRGULA);
			this.state = 170;
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
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 172;
				this.declaracaoProcedimento();
				this.state = 173;
				this.parteDeclaracaoSubRotina_aux();
				this.state = 174;
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
			this.state = 178;
			this.match(LALGGrammar.PROCEDURE);
			this.state = 179;
			this.match(LALGGrammar.ID);
			this.state = 180;
			this.declaracaoProcedimento_aux();
			this.state = 181;
			this.match(LALGGrammar.PONTO_VIRGULA);
			this.state = 182;
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
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 184;
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
			this.state = 187;
			this.match(LALGGrammar.ABRE_PARENTESES);
			this.state = 188;
			this.secaoParametros();
			this.state = 189;
			this.parametros_aux();
			this.state = 190;
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
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 192;
				this.match(LALGGrammar.PONTO_VIRGULA);
				this.state = 193;
				this.secaoParametros();
				this.state = 194;
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
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 198;
				this.match(LALGGrammar.VAR);
				}
			}

			this.state = 201;
			this.listaID();
			this.state = 202;
			this.match(LALGGrammar.DOIS_PONTOS);
			this.state = 203;
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
			this.state = 207;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 44:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 205;
				this.match(LALGGrammar.ID);
				}
				break;
			case 9:
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 206;
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
			this.state = 209;
			this.match(LALGGrammar.BEGIN);
			this.state = 210;
			this.comando();
			this.state = 211;
			this.comandoComposto_aux();
			this.state = 212;
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
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 214;
				this.match(LALGGrammar.PONTO_VIRGULA);
				this.state = 215;
				this.comando();
				this.state = 216;
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
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 220;
				this.atribuicao();
				}
				break;
			case 2:
				{
				this.state = 221;
				this.chamadaProcedimento();
				}
				break;
			case 3:
				{
				this.state = 222;
				this.comandoComposto();
				}
				break;
			case 4:
				{
				this.state = 223;
				this.comandoCondicional();
				}
				break;
			case 5:
				{
				this.state = 224;
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
			this.state = 227;
			this.variavel();
			this.state = 228;
			this.match(LALGGrammar.ATRIBUICAO);
			this.state = 229;
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
			this.state = 231;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===13 || _la===44)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 232;
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
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 234;
				this.match(LALGGrammar.ABRE_PARENTESES);
				this.state = 235;
				this.listaExpressao();
				this.state = 236;
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
			this.state = 240;
			this.match(LALGGrammar.IF);
			this.state = 241;
			this.expressao();
			this.state = 242;
			this.match(LALGGrammar.THEN);
			this.state = 243;
			this.comando();
			this.state = 244;
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
			this.state = 248;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 246;
				this.match(LALGGrammar.ELSE);
				this.state = 247;
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
			this.state = 250;
			this.match(LALGGrammar.WHILE);
			this.state = 251;
			this.expressao();
			this.state = 252;
			this.match(LALGGrammar.DO);
			this.state = 253;
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
			this.state = 255;
			this.expressao();
			this.state = 256;
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
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 258;
				this.match(LALGGrammar.VIRGULA);
				this.state = 259;
				this.expressao();
				this.state = 260;
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

	public static readonly _serializedATN: number[] = [4,1,48,265,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,1,0,1,1,
	1,1,1,1,1,2,1,2,1,2,1,2,3,2,86,8,2,1,3,3,3,89,8,3,1,3,1,3,1,3,1,4,1,4,1,
	4,1,4,3,4,98,8,4,1,5,1,5,1,5,1,6,1,6,1,6,3,6,106,8,6,1,7,1,7,1,8,1,8,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,120,8,8,1,9,1,9,1,10,3,10,125,8,10,1,
	11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,3,13,136,8,13,1,14,1,14,1,14,
	1,14,1,15,1,15,1,15,1,15,3,15,146,8,15,1,16,1,16,1,17,1,17,1,17,1,17,1,
	17,4,17,155,8,17,11,17,12,17,156,1,17,1,17,1,18,3,18,162,8,18,1,18,3,18,
	165,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,3,20,177,8,20,
	1,21,1,21,1,21,1,21,1,21,1,21,1,22,3,22,186,8,22,1,23,1,23,1,23,1,23,1,
	23,1,24,1,24,1,24,1,24,3,24,197,8,24,1,25,3,25,200,8,25,1,25,1,25,1,25,
	1,25,1,26,1,26,3,26,208,8,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,
	28,3,28,219,8,28,1,29,1,29,1,29,1,29,1,29,3,29,226,8,29,1,30,1,30,1,30,
	1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,32,3,32,239,8,32,1,33,1,33,1,33,1,
	33,1,33,1,33,1,34,1,34,3,34,249,8,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,
	1,36,1,37,1,37,1,37,1,37,3,37,263,8,37,1,37,0,0,38,0,2,4,6,8,10,12,14,16,
	18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
	66,68,70,72,74,0,7,1,0,45,46,3,0,25,25,27,27,42,42,1,0,23,24,2,0,23,24,
	43,43,1,0,28,33,2,0,9,9,11,11,2,0,12,13,44,44,254,0,76,1,0,0,0,2,78,1,0,
	0,0,4,85,1,0,0,0,6,88,1,0,0,0,8,97,1,0,0,0,10,99,1,0,0,0,12,105,1,0,0,0,
	14,107,1,0,0,0,16,119,1,0,0,0,18,121,1,0,0,0,20,124,1,0,0,0,22,126,1,0,
	0,0,24,129,1,0,0,0,26,135,1,0,0,0,28,137,1,0,0,0,30,145,1,0,0,0,32,147,
	1,0,0,0,34,149,1,0,0,0,36,161,1,0,0,0,38,168,1,0,0,0,40,176,1,0,0,0,42,
	178,1,0,0,0,44,185,1,0,0,0,46,187,1,0,0,0,48,196,1,0,0,0,50,199,1,0,0,0,
	52,207,1,0,0,0,54,209,1,0,0,0,56,218,1,0,0,0,58,225,1,0,0,0,60,227,1,0,
	0,0,62,231,1,0,0,0,64,238,1,0,0,0,66,240,1,0,0,0,68,248,1,0,0,0,70,250,
	1,0,0,0,72,255,1,0,0,0,74,262,1,0,0,0,76,77,7,0,0,0,77,1,1,0,0,0,78,79,
	3,16,8,0,79,80,3,4,2,0,80,3,1,0,0,0,81,82,7,1,0,0,82,83,3,16,8,0,83,84,
	3,4,2,0,84,86,1,0,0,0,85,81,1,0,0,0,85,86,1,0,0,0,86,5,1,0,0,0,87,89,7,
	2,0,0,88,87,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,3,2,1,0,91,92,3,8,
	4,0,92,7,1,0,0,0,93,94,7,3,0,0,94,95,3,2,1,0,95,96,3,8,4,0,96,98,1,0,0,
	0,97,93,1,0,0,0,97,98,1,0,0,0,98,9,1,0,0,0,99,100,3,6,3,0,100,101,3,12,
	6,0,101,11,1,0,0,0,102,103,3,14,7,0,103,104,3,6,3,0,104,106,1,0,0,0,105,
	102,1,0,0,0,105,106,1,0,0,0,106,13,1,0,0,0,107,108,7,4,0,0,108,15,1,0,0,
	0,109,120,3,18,9,0,110,120,3,0,0,0,111,112,5,34,0,0,112,113,3,10,5,0,113,
	114,5,35,0,0,114,120,1,0,0,0,115,116,5,21,0,0,116,120,3,16,8,0,117,120,
	5,14,0,0,118,120,5,15,0,0,119,109,1,0,0,0,119,110,1,0,0,0,119,111,1,0,0,
	0,119,115,1,0,0,0,119,117,1,0,0,0,119,118,1,0,0,0,120,17,1,0,0,0,121,122,
	5,44,0,0,122,19,1,0,0,0,123,125,3,10,5,0,124,123,1,0,0,0,124,125,1,0,0,
	0,125,21,1,0,0,0,126,127,3,32,16,0,127,128,3,24,12,0,128,23,1,0,0,0,129,
	130,5,44,0,0,130,131,3,26,13,0,131,25,1,0,0,0,132,133,5,38,0,0,133,134,
	5,44,0,0,134,136,3,26,13,0,135,132,1,0,0,0,135,136,1,0,0,0,136,27,1,0,0,
	0,137,138,3,22,11,0,138,139,3,30,15,0,139,140,5,39,0,0,140,29,1,0,0,0,141,
	142,5,39,0,0,142,143,3,22,11,0,143,144,3,30,15,0,144,146,1,0,0,0,145,141,
	1,0,0,0,145,146,1,0,0,0,146,31,1,0,0,0,147,148,7,5,0,0,148,33,1,0,0,0,149,
	150,5,4,0,0,150,151,5,44,0,0,151,152,5,39,0,0,152,154,3,36,18,0,153,155,
	5,41,0,0,154,153,1,0,0,0,155,156,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,
	0,157,158,1,0,0,0,158,159,5,0,0,1,159,35,1,0,0,0,160,162,3,28,14,0,161,
	160,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,165,3,38,19,0,164,163,1,
	0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,167,3,54,27,0,167,37,1,0,0,0,
	168,169,3,42,21,0,169,170,5,39,0,0,170,171,3,40,20,0,171,39,1,0,0,0,172,
	173,3,42,21,0,173,174,3,40,20,0,174,175,5,39,0,0,175,177,1,0,0,0,176,172,
	1,0,0,0,176,177,1,0,0,0,177,41,1,0,0,0,178,179,5,8,0,0,179,180,5,44,0,0,
	180,181,3,44,22,0,181,182,5,39,0,0,182,183,3,36,18,0,183,43,1,0,0,0,184,
	186,3,46,23,0,185,184,1,0,0,0,185,186,1,0,0,0,186,45,1,0,0,0,187,188,5,
	34,0,0,188,189,3,50,25,0,189,190,3,48,24,0,190,191,5,35,0,0,191,47,1,0,
	0,0,192,193,5,39,0,0,193,194,3,50,25,0,194,195,3,48,24,0,195,197,1,0,0,
	0,196,192,1,0,0,0,196,197,1,0,0,0,197,49,1,0,0,0,198,200,5,7,0,0,199,198,
	1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,202,3,24,12,0,202,203,5,40,
	0,0,203,204,3,52,26,0,204,51,1,0,0,0,205,208,5,44,0,0,206,208,3,32,16,0,
	207,205,1,0,0,0,207,206,1,0,0,0,208,53,1,0,0,0,209,210,5,5,0,0,210,211,
	3,58,29,0,211,212,3,56,28,0,212,213,5,6,0,0,213,55,1,0,0,0,214,215,5,39,
	0,0,215,216,3,58,29,0,216,217,3,56,28,0,217,219,1,0,0,0,218,214,1,0,0,0,
	218,219,1,0,0,0,219,57,1,0,0,0,220,226,3,60,30,0,221,226,3,62,31,0,222,
	226,3,54,27,0,223,226,3,66,33,0,224,226,3,70,35,0,225,220,1,0,0,0,225,221,
	1,0,0,0,225,222,1,0,0,0,225,223,1,0,0,0,225,224,1,0,0,0,226,59,1,0,0,0,
	227,228,3,18,9,0,228,229,5,22,0,0,229,230,3,10,5,0,230,61,1,0,0,0,231,232,
	7,6,0,0,232,233,3,64,32,0,233,63,1,0,0,0,234,235,5,34,0,0,235,236,3,72,
	36,0,236,237,5,35,0,0,237,239,1,0,0,0,238,234,1,0,0,0,238,239,1,0,0,0,239,
	65,1,0,0,0,240,241,5,16,0,0,241,242,3,10,5,0,242,243,5,17,0,0,243,244,3,
	58,29,0,244,245,3,68,34,0,245,67,1,0,0,0,246,247,5,18,0,0,247,249,3,58,
	29,0,248,246,1,0,0,0,248,249,1,0,0,0,249,69,1,0,0,0,250,251,5,19,0,0,251,
	252,3,10,5,0,252,253,5,20,0,0,253,254,3,58,29,0,254,71,1,0,0,0,255,256,
	3,10,5,0,256,257,3,74,37,0,257,73,1,0,0,0,258,259,5,38,0,0,259,260,3,10,
	5,0,260,261,3,74,37,0,261,263,1,0,0,0,262,258,1,0,0,0,262,263,1,0,0,0,263,
	75,1,0,0,0,21,85,88,97,105,119,124,135,145,156,161,164,176,185,196,199,
	207,218,225,238,248,262];

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
	public DIV_INT(): TerminalNode {
		return this.getToken(LALGGrammar.DIV_INT, 0);
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
