import {Decripter, Encripter} from './encripyt'

export class Produto {
    @Encripter
    nome: string;
    @Encripter
    descricao: string;
}

export class ProdutoResponse {
    @Decripter
    nome: string;
    @Decripter
    descricao: string;
}