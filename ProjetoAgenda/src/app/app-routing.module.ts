import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaContatosComponent } from './agenda-contatos/agenda-contatos.component';
import { AdicionarContatoComponent } from './adicionar-contato/adicionar-contato.component';


const routes: Routes = [
  { path: 'agenda', component: AgendaContatosComponent },
  {path: 'add', component: AdicionarContatoComponent},
  {path: 'edit/:id', component: AdicionarContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

