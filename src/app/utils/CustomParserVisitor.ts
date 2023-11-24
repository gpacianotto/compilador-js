import {ParseTreeVisitor} from 'antlr4';

import LALGParserVisitor from "../../../antlr/LALGParserVisitor";
import { NumeroContext } from "../../../antlr/LALGParser";
import { TermoContext } from "../../../antlr/LALGParser";
import { Termo_auxContext } from "../../../antlr/LALGParser";
import { ExpressaoSimplesContext } from "../../../antlr/LALGParser";
import { ExpressaoSimples_auxContext } from "../../../antlr/LALGParser";
import { ExpressaoContext } from "../../../antlr/LALGParser";
import { Expressao_auxContext } from "../../../antlr/LALGParser";
import { FatorContext } from "../../../antlr/LALGParser";
import { VariavelContext } from "../../../antlr/LALGParser";
import { Variavel1Context } from "../../../antlr/LALGParser";
import { DeclaracaoVariavelContext } from "../../../antlr/LALGParser";
import { ListaIDContext } from "../../../antlr/LALGParser";
import { ListaID_auxContext } from "../../../antlr/LALGParser";
import { ParteDeclaracaoVariavelContext } "../../../antlr/LALGParser";
import { ParteDeclaracaoVariavel_auxContext } from "../../../antlr/LALGParser";
import { TipoContext } from "../../../antlr/LALGParser";
import { ProgramaContext } from "../../../antlr/LALGParser";
import { BlocoContext } from "../../../antlr/LALGParser";
import { ParteDeclaracaoSubRotinaContext } from "../../../antlr/LALGParser";
import { ParteDeclaracaoSubRotina_auxContext } from "../../../antlr/LALGParser";
import { DeclaracaoProcedimentoContext } from "../../../antlr/LALGParser";
import { DeclaracaoProcedimento_auxContext } from "../../../antlr/LALGParser";
import { ParametrosContext } from "../../../antlr/LALGParser";
import { Parametros_auxContext } from "../../../antlr/LALGParser";
import { SecaoParametrosContext } from "../../../antlr/LALGParser";
import { SecaoParametrosFormais_auxContext } from "../../../antlr/LALGParser";
import { ComandoCompostoContext } from "../../../antlr/LALGParser";
import { ComandoComposto_auxContext } from "../../../antlr/LALGParser";
import { ComandoContext } from "../../../antlr/LALGParser";
import { AtribuicaoContext } from "../../../antlr/LALGParser";
import { ChamadaProcedimentoContext } from "../../../antlr/LALGParser";
import { ChamadaProcedimento_auxContext } from "../../../antlr/LALGParser";
import { ComandoCondicionalContext } from "../../../antlr/LALGParser";
import { ComandoCondicional_auxContext } from "../../../antlr/LALGParser";
import { ComandoRepetitivoContext } from "../../../antlr/LALGParser";
import { ListaExpressaoContext } from "../../../antlr/LALGParser";
import { ListaExpressao_auxContext } from "../../../antlr/LALGParser";


export default class CustomParserVisitor extends ParseTreeVisitor<any> implements LALGParserVisitor<any> {
    
    escope = new Scope("global");

    public visitProgrma(ctx: ProgramaContext) {
        return super.visitChildren(ctx);
    }

}