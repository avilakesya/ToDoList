import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './tarefa/lista/lista.component';
import { CadastrarComponent } from './tarefa/cadastrar/cadastrar.component';

const routes: Routes = [
  {
    path: "",
    component: ListaComponent
  },
  {
    path: "",
    component: CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
