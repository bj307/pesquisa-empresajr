import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pesquisa } from './pesquisa';

@Injectable({
  providedIn: 'root'
})
export class PesquisaDataService {

  constructor() { }
  private pesquisaSource = new BehaviorSubject({pesquisa: null, key: ''});
  pesquisaAtual = this.pesquisaSource.asObservable();

  obtemPesquisa(pesquisa: Pesquisa, key: string) {
    this.pesquisaSource.next({pesquisa: pesquisa, key: key});
  }
}
