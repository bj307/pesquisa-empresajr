import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { LoadComponent } from './components/load/load.component';


const routes: Routes = [
  {path: '', component: LoadComponent},
  {path: "home", component: HomeComponent},
  {path: "pesquisa", component: PesquisaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
