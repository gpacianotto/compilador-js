// Generated from ./antlr/LALG.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import LALGListener from './LALGListener.js';
const serializedATN = [4,1,36,215,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,
1,5,1,58,8,1,10,1,12,1,61,9,1,1,1,1,1,1,1,3,1,66,8,1,1,1,1,1,1,2,1,2,1,2,
1,3,1,3,1,4,1,4,1,4,5,4,78,8,4,10,4,12,4,81,9,4,1,5,5,5,84,8,5,10,5,12,5,
87,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,99,8,7,10,7,12,7,102,
9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,5,9,114,8,9,10,9,12,9,117,9,
9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,126,8,10,1,11,1,11,1,11,1,11,1,12,
1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,143,8,13,1,14,1,14,
1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,154,8,15,1,16,1,16,1,17,3,17,159,
8,17,1,17,1,17,1,17,5,17,164,8,17,10,17,12,17,167,9,17,1,18,1,18,1,18,5,
18,172,8,18,10,18,12,18,175,9,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
3,19,185,8,19,1,20,1,20,1,20,1,20,1,20,1,20,3,20,193,8,20,1,21,1,21,1,21,
5,21,198,8,21,10,21,12,21,201,9,21,1,22,1,22,5,22,205,8,22,10,22,12,22,208,
9,22,1,23,4,23,211,8,23,11,23,12,23,212,1,23,0,0,24,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,6,1,0,4,5,1,0,19,24,1,0,25,
26,1,0,25,27,1,0,28,30,1,0,34,35,212,0,48,1,0,0,0,2,59,1,0,0,0,4,69,1,0,
0,0,6,72,1,0,0,0,8,74,1,0,0,0,10,85,1,0,0,0,12,88,1,0,0,0,14,94,1,0,0,0,
16,105,1,0,0,0,18,109,1,0,0,0,20,125,1,0,0,0,22,127,1,0,0,0,24,131,1,0,0,
0,26,136,1,0,0,0,28,144,1,0,0,0,30,149,1,0,0,0,32,155,1,0,0,0,34,158,1,0,
0,0,36,168,1,0,0,0,38,184,1,0,0,0,40,192,1,0,0,0,42,194,1,0,0,0,44,202,1,
0,0,0,46,210,1,0,0,0,48,49,5,1,0,0,49,50,3,44,22,0,50,51,5,2,0,0,51,52,3,
2,1,0,52,53,5,3,0,0,53,1,1,0,0,0,54,55,3,4,2,0,55,56,5,2,0,0,56,58,1,0,0,
0,57,54,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,65,1,0,0,0,
61,59,1,0,0,0,62,63,3,10,5,0,63,64,5,2,0,0,64,66,1,0,0,0,65,62,1,0,0,0,65,
66,1,0,0,0,66,67,1,0,0,0,67,68,3,18,9,0,68,3,1,0,0,0,69,70,3,6,3,0,70,71,
3,8,4,0,71,5,1,0,0,0,72,73,7,0,0,0,73,7,1,0,0,0,74,79,3,44,22,0,75,76,5,
6,0,0,76,78,3,44,22,0,77,75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,
0,0,0,80,9,1,0,0,0,81,79,1,0,0,0,82,84,3,12,6,0,83,82,1,0,0,0,84,87,1,0,
0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,11,1,0,0,0,87,85,1,0,0,0,88,89,5,7,0,
0,89,90,3,44,22,0,90,91,3,14,7,0,91,92,5,2,0,0,92,93,3,2,1,0,93,13,1,0,0,
0,94,95,5,8,0,0,95,100,3,16,8,0,96,97,5,2,0,0,97,99,3,16,8,0,98,96,1,0,0,
0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,103,1,0,0,0,102,100,
1,0,0,0,103,104,5,9,0,0,104,15,1,0,0,0,105,106,3,8,4,0,106,107,5,10,0,0,
107,108,3,44,22,0,108,17,1,0,0,0,109,110,5,11,0,0,110,115,3,20,10,0,111,
112,5,2,0,0,112,114,3,20,10,0,113,111,1,0,0,0,114,117,1,0,0,0,115,113,1,
0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,119,5,12,0,0,119,
19,1,0,0,0,120,126,3,22,11,0,121,126,3,24,12,0,122,126,3,18,9,0,123,126,
3,26,13,0,124,126,3,28,14,0,125,120,1,0,0,0,125,121,1,0,0,0,125,122,1,0,
0,0,125,123,1,0,0,0,125,124,1,0,0,0,126,21,1,0,0,0,127,128,3,40,20,0,128,
129,5,13,0,0,129,130,3,30,15,0,130,23,1,0,0,0,131,132,3,44,22,0,132,133,
5,8,0,0,133,134,3,42,21,0,134,135,5,9,0,0,135,25,1,0,0,0,136,137,5,14,0,
0,137,138,3,30,15,0,138,139,5,15,0,0,139,142,3,20,10,0,140,141,5,16,0,0,
141,143,3,20,10,0,142,140,1,0,0,0,142,143,1,0,0,0,143,27,1,0,0,0,144,145,
5,17,0,0,145,146,3,30,15,0,146,147,5,18,0,0,147,148,3,20,10,0,148,29,1,0,
0,0,149,153,3,34,17,0,150,151,3,32,16,0,151,152,3,34,17,0,152,154,1,0,0,
0,153,150,1,0,0,0,153,154,1,0,0,0,154,31,1,0,0,0,155,156,7,1,0,0,156,33,
1,0,0,0,157,159,7,2,0,0,158,157,1,0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,
160,165,3,36,18,0,161,162,7,3,0,0,162,164,3,36,18,0,163,161,1,0,0,0,164,
167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,35,1,0,0,0,167,165,1,0,0,
0,168,173,3,38,19,0,169,170,7,4,0,0,170,172,3,38,19,0,171,169,1,0,0,0,172,
175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,37,1,0,0,0,175,173,1,0,0,
0,176,185,3,40,20,0,177,185,3,46,23,0,178,179,5,8,0,0,179,180,3,30,15,0,
180,181,5,9,0,0,181,185,1,0,0,0,182,183,5,31,0,0,183,185,3,38,19,0,184,176,
1,0,0,0,184,177,1,0,0,0,184,178,1,0,0,0,184,182,1,0,0,0,185,39,1,0,0,0,186,
193,3,44,22,0,187,188,3,44,22,0,188,189,5,32,0,0,189,190,3,30,15,0,190,191,
5,33,0,0,191,193,1,0,0,0,192,186,1,0,0,0,192,187,1,0,0,0,193,41,1,0,0,0,
194,199,3,30,15,0,195,196,5,6,0,0,196,198,3,30,15,0,197,195,1,0,0,0,198,
201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,43,1,0,0,0,201,199,1,0,0,
0,202,206,5,35,0,0,203,205,7,5,0,0,204,203,1,0,0,0,205,208,1,0,0,0,206,204,
1,0,0,0,206,207,1,0,0,0,207,45,1,0,0,0,208,206,1,0,0,0,209,211,5,34,0,0,
210,209,1,0,0,0,211,212,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,47,1,
0,0,0,17,59,65,79,85,100,115,125,142,153,158,165,173,184,192,199,206,212];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LALGParser extends antlr4.Parser {

    static grammarFileName = "LALG.g4";
    static literalNames = [ null, "'program'", "';'", "'.'", "'int'", "'boolean'", 
                            "','", "'procedure'", "'('", "')'", "':'", "'begin'", 
                            "'end'", "':='", "'if'", "'then'", "'else'", 
                            "'while'", "'do'", "'='", "'<>'", "'<'", "'<='", 
                            "'>='", "'>'", "'+'", "'-'", "'or'", "'*'", 
                            "'div'", "'and'", "'not'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "DIGITO", "LETRA", "WS" ];
    static ruleNames = [ "programa", "bloco", "declaracao_variaveis", "tipo", 
                         "lista_identificadores", "declaracao_subrotinas", 
                         "declaracao_procedimento", "parametros_formais", 
                         "secao_parametros_formais", "comando_composto", 
                         "comando", "atribuicao", "chamada_procedimento", 
                         "comando_condicional", "comando_repetitivo", "expressao", 
                         "relacao", "expressao_simples", "termo", "fator", 
                         "variavel", "lista_expressoes", "identificador", 
                         "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LALGParser.ruleNames;
        this.literalNames = LALGParser.literalNames;
        this.symbolicNames = LALGParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LALGParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(LALGParser.T__0);
	        this.state = 49;
	        this.identificador();
	        this.state = 50;
	        this.match(LALGParser.T__1);
	        this.state = 51;
	        this.bloco();
	        this.state = 52;
	        this.match(LALGParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloco() {
	    let localctx = new BlocoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LALGParser.RULE_bloco);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 54;
	            this.declaracao_variaveis();
	            this.state = 55;
	            this.match(LALGParser.T__1);
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2 || _la===7) {
	            this.state = 62;
	            this.declaracao_subrotinas();
	            this.state = 63;
	            this.match(LALGParser.T__1);
	        }

	        this.state = 67;
	        this.comando_composto();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracao_variaveis() {
	    let localctx = new Declaracao_variaveisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LALGParser.RULE_declaracao_variaveis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.tipo();
	        this.state = 70;
	        this.lista_identificadores();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LALGParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===5)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_identificadores() {
	    let localctx = new Lista_identificadoresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LALGParser.RULE_lista_identificadores);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.identificador();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 75;
	            this.match(LALGParser.T__5);
	            this.state = 76;
	            this.identificador();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracao_subrotinas() {
	    let localctx = new Declaracao_subrotinasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LALGParser.RULE_declaracao_subrotinas);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 82;
	            this.declaracao_procedimento();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracao_procedimento() {
	    let localctx = new Declaracao_procedimentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LALGParser.RULE_declaracao_procedimento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(LALGParser.T__6);
	        this.state = 89;
	        this.identificador();
	        this.state = 90;
	        this.parametros_formais();
	        this.state = 91;
	        this.match(LALGParser.T__1);
	        this.state = 92;
	        this.bloco();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros_formais() {
	    let localctx = new Parametros_formaisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LALGParser.RULE_parametros_formais);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(LALGParser.T__7);
	        this.state = 95;
	        this.secao_parametros_formais();
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 96;
	            this.match(LALGParser.T__1);
	            this.state = 97;
	            this.secao_parametros_formais();
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 103;
	        this.match(LALGParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	secao_parametros_formais() {
	    let localctx = new Secao_parametros_formaisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LALGParser.RULE_secao_parametros_formais);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.lista_identificadores();
	        this.state = 106;
	        this.match(LALGParser.T__9);
	        this.state = 107;
	        this.identificador();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando_composto() {
	    let localctx = new Comando_compostoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LALGParser.RULE_comando_composto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(LALGParser.T__10);
	        this.state = 110;
	        this.comando();
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 111;
	            this.match(LALGParser.T__1);
	            this.state = 112;
	            this.comando();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
	        this.match(LALGParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LALGParser.RULE_comando);
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120;
	            this.atribuicao();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.chamada_procedimento();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
	            this.comando_composto();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 123;
	            this.comando_condicional();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 124;
	            this.comando_repetitivo();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atribuicao() {
	    let localctx = new AtribuicaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LALGParser.RULE_atribuicao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.variavel();
	        this.state = 128;
	        this.match(LALGParser.T__12);
	        this.state = 129;
	        this.expressao();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chamada_procedimento() {
	    let localctx = new Chamada_procedimentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LALGParser.RULE_chamada_procedimento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.identificador();
	        this.state = 132;
	        this.match(LALGParser.T__7);
	        this.state = 133;
	        this.lista_expressoes();
	        this.state = 134;
	        this.match(LALGParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando_condicional() {
	    let localctx = new Comando_condicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LALGParser.RULE_comando_condicional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(LALGParser.T__13);
	        this.state = 137;
	        this.expressao();
	        this.state = 138;
	        this.match(LALGParser.T__14);
	        this.state = 139;
	        this.comando();
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 140;
	            this.match(LALGParser.T__15);
	            this.state = 141;
	            this.comando();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando_repetitivo() {
	    let localctx = new Comando_repetitivoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LALGParser.RULE_comando_repetitivo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(LALGParser.T__16);
	        this.state = 145;
	        this.expressao();
	        this.state = 146;
	        this.match(LALGParser.T__17);
	        this.state = 147;
	        this.comando();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressao() {
	    let localctx = new ExpressaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LALGParser.RULE_expressao);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.expressao_simples();
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 33030144) !== 0)) {
	            this.state = 150;
	            this.relacao();
	            this.state = 151;
	            this.expressao_simples();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relacao() {
	    let localctx = new RelacaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LALGParser.RULE_relacao);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33030144) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressao_simples() {
	    let localctx = new Expressao_simplesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LALGParser.RULE_expressao_simples);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25 || _la===26) {
	            this.state = 157;
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 160;
	        this.termo();
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 161;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 162;
	            this.termo();
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LALGParser.RULE_termo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.fator();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0)) {
	            this.state = 169;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 170;
	            this.fator();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fator() {
	    let localctx = new FatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LALGParser.RULE_fator);
	    try {
	        this.state = 184;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.variavel();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.numero();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 178;
	            this.match(LALGParser.T__7);
	            this.state = 179;
	            this.expressao();
	            this.state = 180;
	            this.match(LALGParser.T__8);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 182;
	            this.match(LALGParser.T__30);
	            this.state = 183;
	            this.fator();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variavel() {
	    let localctx = new VariavelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LALGParser.RULE_variavel);
	    try {
	        this.state = 192;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 186;
	            this.identificador();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.identificador();
	            this.state = 188;
	            this.match(LALGParser.T__31);
	            this.state = 189;
	            this.expressao();
	            this.state = 190;
	            this.match(LALGParser.T__32);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista_expressoes() {
	    let localctx = new Lista_expressoesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LALGParser.RULE_lista_expressoes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.expressao();
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 195;
	            this.match(LALGParser.T__5);
	            this.state = 196;
	            this.expressao();
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LALGParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(LALGParser.LETRA);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34 || _la===35) {
	            this.state = 203;
	            _la = this._input.LA(1);
	            if(!(_la===34 || _la===35)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LALGParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 209;
	            this.match(LALGParser.DIGITO);
	            this.state = 212; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===34);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LALGParser.EOF = antlr4.Token.EOF;
LALGParser.T__0 = 1;
LALGParser.T__1 = 2;
LALGParser.T__2 = 3;
LALGParser.T__3 = 4;
LALGParser.T__4 = 5;
LALGParser.T__5 = 6;
LALGParser.T__6 = 7;
LALGParser.T__7 = 8;
LALGParser.T__8 = 9;
LALGParser.T__9 = 10;
LALGParser.T__10 = 11;
LALGParser.T__11 = 12;
LALGParser.T__12 = 13;
LALGParser.T__13 = 14;
LALGParser.T__14 = 15;
LALGParser.T__15 = 16;
LALGParser.T__16 = 17;
LALGParser.T__17 = 18;
LALGParser.T__18 = 19;
LALGParser.T__19 = 20;
LALGParser.T__20 = 21;
LALGParser.T__21 = 22;
LALGParser.T__22 = 23;
LALGParser.T__23 = 24;
LALGParser.T__24 = 25;
LALGParser.T__25 = 26;
LALGParser.T__26 = 27;
LALGParser.T__27 = 28;
LALGParser.T__28 = 29;
LALGParser.T__29 = 30;
LALGParser.T__30 = 31;
LALGParser.T__31 = 32;
LALGParser.T__32 = 33;
LALGParser.DIGITO = 34;
LALGParser.LETRA = 35;
LALGParser.WS = 36;

LALGParser.RULE_programa = 0;
LALGParser.RULE_bloco = 1;
LALGParser.RULE_declaracao_variaveis = 2;
LALGParser.RULE_tipo = 3;
LALGParser.RULE_lista_identificadores = 4;
LALGParser.RULE_declaracao_subrotinas = 5;
LALGParser.RULE_declaracao_procedimento = 6;
LALGParser.RULE_parametros_formais = 7;
LALGParser.RULE_secao_parametros_formais = 8;
LALGParser.RULE_comando_composto = 9;
LALGParser.RULE_comando = 10;
LALGParser.RULE_atribuicao = 11;
LALGParser.RULE_chamada_procedimento = 12;
LALGParser.RULE_comando_condicional = 13;
LALGParser.RULE_comando_repetitivo = 14;
LALGParser.RULE_expressao = 15;
LALGParser.RULE_relacao = 16;
LALGParser.RULE_expressao_simples = 17;
LALGParser.RULE_termo = 18;
LALGParser.RULE_fator = 19;
LALGParser.RULE_variavel = 20;
LALGParser.RULE_lista_expressoes = 21;
LALGParser.RULE_identificador = 22;
LALGParser.RULE_numero = 23;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_programa;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class BlocoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_bloco;
    }

	comando_composto() {
	    return this.getTypedRuleContext(Comando_compostoContext,0);
	};

	declaracao_variaveis = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Declaracao_variaveisContext);
	    } else {
	        return this.getTypedRuleContext(Declaracao_variaveisContext,i);
	    }
	};

	declaracao_subrotinas() {
	    return this.getTypedRuleContext(Declaracao_subrotinasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterBloco(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitBloco(this);
		}
	}


}



class Declaracao_variaveisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_declaracao_variaveis;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	lista_identificadores() {
	    return this.getTypedRuleContext(Lista_identificadoresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterDeclaracao_variaveis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitDeclaracao_variaveis(this);
		}
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitTipo(this);
		}
	}


}



class Lista_identificadoresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_lista_identificadores;
    }

	identificador = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadorContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterLista_identificadores(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitLista_identificadores(this);
		}
	}


}



class Declaracao_subrotinasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_declaracao_subrotinas;
    }

	declaracao_procedimento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Declaracao_procedimentoContext);
	    } else {
	        return this.getTypedRuleContext(Declaracao_procedimentoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterDeclaracao_subrotinas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitDeclaracao_subrotinas(this);
		}
	}


}



class Declaracao_procedimentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_declaracao_procedimento;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	parametros_formais() {
	    return this.getTypedRuleContext(Parametros_formaisContext,0);
	};

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterDeclaracao_procedimento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitDeclaracao_procedimento(this);
		}
	}


}



class Parametros_formaisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_parametros_formais;
    }

	secao_parametros_formais = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Secao_parametros_formaisContext);
	    } else {
	        return this.getTypedRuleContext(Secao_parametros_formaisContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterParametros_formais(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitParametros_formais(this);
		}
	}


}



class Secao_parametros_formaisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_secao_parametros_formais;
    }

	lista_identificadores() {
	    return this.getTypedRuleContext(Lista_identificadoresContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterSecao_parametros_formais(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitSecao_parametros_formais(this);
		}
	}


}



class Comando_compostoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_comando_composto;
    }

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterComando_composto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitComando_composto(this);
		}
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_comando;
    }

	atribuicao() {
	    return this.getTypedRuleContext(AtribuicaoContext,0);
	};

	chamada_procedimento() {
	    return this.getTypedRuleContext(Chamada_procedimentoContext,0);
	};

	comando_composto() {
	    return this.getTypedRuleContext(Comando_compostoContext,0);
	};

	comando_condicional() {
	    return this.getTypedRuleContext(Comando_condicionalContext,0);
	};

	comando_repetitivo() {
	    return this.getTypedRuleContext(Comando_repetitivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitComando(this);
		}
	}


}



class AtribuicaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_atribuicao;
    }

	variavel() {
	    return this.getTypedRuleContext(VariavelContext,0);
	};

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterAtribuicao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitAtribuicao(this);
		}
	}


}



class Chamada_procedimentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_chamada_procedimento;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	lista_expressoes() {
	    return this.getTypedRuleContext(Lista_expressoesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterChamada_procedimento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitChamada_procedimento(this);
		}
	}


}



class Comando_condicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_comando_condicional;
    }

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterComando_condicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitComando_condicional(this);
		}
	}


}



class Comando_repetitivoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_comando_repetitivo;
    }

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterComando_repetitivo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitComando_repetitivo(this);
		}
	}


}



class ExpressaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_expressao;
    }

	expressao_simples = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expressao_simplesContext);
	    } else {
	        return this.getTypedRuleContext(Expressao_simplesContext,i);
	    }
	};

	relacao() {
	    return this.getTypedRuleContext(RelacaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterExpressao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitExpressao(this);
		}
	}


}



class RelacaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_relacao;
    }


	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterRelacao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitRelacao(this);
		}
	}


}



class Expressao_simplesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_expressao_simples;
    }

	termo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermoContext);
	    } else {
	        return this.getTypedRuleContext(TermoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterExpressao_simples(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitExpressao_simples(this);
		}
	}


}



class TermoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_termo;
    }

	fator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FatorContext);
	    } else {
	        return this.getTypedRuleContext(FatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterTermo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitTermo(this);
		}
	}


}



class FatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_fator;
    }

	variavel() {
	    return this.getTypedRuleContext(VariavelContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	fator() {
	    return this.getTypedRuleContext(FatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterFator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitFator(this);
		}
	}


}



class VariavelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_variavel;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	expressao() {
	    return this.getTypedRuleContext(ExpressaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterVariavel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitVariavel(this);
		}
	}


}



class Lista_expressoesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_lista_expressoes;
    }

	expressao = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressaoContext);
	    } else {
	        return this.getTypedRuleContext(ExpressaoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterLista_expressoes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitLista_expressoes(this);
		}
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LALGParser.LETRA);
	    } else {
	        return this.getToken(LALGParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LALGParser.DIGITO);
	    } else {
	        return this.getToken(LALGParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitIdentificador(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LALGParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LALGParser.DIGITO);
	    } else {
	        return this.getToken(LALGParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LALGListener ) {
	        listener.exitNumero(this);
		}
	}


}




LALGParser.ProgramaContext = ProgramaContext; 
LALGParser.BlocoContext = BlocoContext; 
LALGParser.Declaracao_variaveisContext = Declaracao_variaveisContext; 
LALGParser.TipoContext = TipoContext; 
LALGParser.Lista_identificadoresContext = Lista_identificadoresContext; 
LALGParser.Declaracao_subrotinasContext = Declaracao_subrotinasContext; 
LALGParser.Declaracao_procedimentoContext = Declaracao_procedimentoContext; 
LALGParser.Parametros_formaisContext = Parametros_formaisContext; 
LALGParser.Secao_parametros_formaisContext = Secao_parametros_formaisContext; 
LALGParser.Comando_compostoContext = Comando_compostoContext; 
LALGParser.ComandoContext = ComandoContext; 
LALGParser.AtribuicaoContext = AtribuicaoContext; 
LALGParser.Chamada_procedimentoContext = Chamada_procedimentoContext; 
LALGParser.Comando_condicionalContext = Comando_condicionalContext; 
LALGParser.Comando_repetitivoContext = Comando_repetitivoContext; 
LALGParser.ExpressaoContext = ExpressaoContext; 
LALGParser.RelacaoContext = RelacaoContext; 
LALGParser.Expressao_simplesContext = Expressao_simplesContext; 
LALGParser.TermoContext = TermoContext; 
LALGParser.FatorContext = FatorContext; 
LALGParser.VariavelContext = VariavelContext; 
LALGParser.Lista_expressoesContext = Lista_expressoesContext; 
LALGParser.IdentificadorContext = IdentificadorContext; 
LALGParser.NumeroContext = NumeroContext; 
