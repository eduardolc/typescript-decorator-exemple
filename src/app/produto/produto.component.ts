import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoResponse } from '../models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  produto: Produto = new Produto();
  produtoResp: ProdutoResponse = new ProdutoResponse();

  ngOnInit(): void {
    this.produto.nome = "bolacha";
    this.produto.descricao = "Sem gluten";

    console.log("Info criptografada ==>>>", this.produto.nome, this.produto.descricao);

    this.produtoResp.nome = this.produto.nome;
    this.produtoResp.descricao = this.produto.descricao;

    console.log("Info Descriptografada ===>>>", this.produtoResp.nome, this.produtoResp.descricao);
  }

}


