import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './tarefa/lista/lista.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabelaComponent } from './tarefa/tabela/tabela.component';
import { CadastrarComponent } from './tarefa/cadastrar/cadastrar.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    TabelaComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
