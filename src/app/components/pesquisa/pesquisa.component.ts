import { Component, OnInit } from '@angular/core';
import { PesquisaService } from './pesquisa.service';
import { PesquisaDataService } from './pesquisa-data.service';
import { Pesquisa } from './pesquisa';
import { data } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  pesquisa!: Pesquisa;
  key: string = '';

  constructor(private _pesquisaService: PesquisaService, private _pesquisaDataService: PesquisaDataService, private router:Router) {

  }

  ngOnInit(): void {
    this.pesquisa = new Pesquisa();
    this._pesquisaDataService.pesquisaAtual.subscribe(data => { 
      if(data.pesquisa && data.key) {
        this.pesquisa = new Pesquisa();
        this.pesquisa.nome = data.pesquisa.nome;
        this.pesquisa.voluntario = data.pesquisa.voluntario;
        this.pesquisa.skills = data.pesquisa.skills;
        this.pesquisa.servicos = data.pesquisa.servicos;
        this.pesquisa.empresa = data.pesquisa.empresa;
        this.pesquisa.contato = data.pesquisa.contato;
      }
    })
  }

  onSubmit() {
    this._pesquisaService.insert(this.pesquisa);
    this.pesquisa = new Pesquisa();
    this.key = '';
    this.router.navigate(['obrigado']);
  }
}

