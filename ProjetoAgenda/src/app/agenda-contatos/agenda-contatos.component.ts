import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-contatos',
  templateUrl: './agenda-contatos.component.html',
  styleUrls: ['./agenda-contatos.component.css']
})
export class AgendaContatosComponent implements OnInit {
  contatos: Array<any>;
  contato: any;
  constructor(private conection: AgendaService) { }

  ngOnInit() {
    this.contato = {};
    this.listarContatos();
  }

  listarContatos() {
    this.conection.listarContatos().subscribe(resposta => this.contatos = resposta);
  }

  deletarContato(i: any) {
    this.conection.deletarContato(i).subscribe(resposta => {

      this.listarContatos();
    });

  }
  atualizarContatto(id: any) {
    console.log(id);
  }



}
