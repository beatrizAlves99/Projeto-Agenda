import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaContatosComponent } from './agenda-contatos/agenda-contatos.component';
import { AdicionarContatoComponent } from './adicionar-contato/adicionar-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaContatosComponent,
    AdicionarContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
