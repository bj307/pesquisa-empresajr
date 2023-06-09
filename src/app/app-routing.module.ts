import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { LoadComponent } from './components/load/load.component';
import { TyPageComponent } from './components/ty-page/ty-page.component';


const routes: Routes = [
  {path: '', component: LoadComponent},
  {path: "home", component: HomeComponent},
  {path: "pesquisa", component: PesquisaComponent},
  {path: "obrigado", component: TyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
