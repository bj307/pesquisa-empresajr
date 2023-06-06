import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Pesquisa } from './pesquisa';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  constructor(private _angularFireDataBase: AngularFireDatabase) { }

  insert(pesquisa: Pesquisa) {
    this._angularFireDataBase.list("pesquisas").push(pesquisa).then((result: any) => {
      console.log(result.key);
    })
  }
}
