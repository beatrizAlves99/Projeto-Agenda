import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  contatos: Array<any>;
  constructor(private conection: AgendaService ) { }

  ngOnInit() {
    this.listarContatos();
  }

  listarContatos() {
    this.conection.listarContatos().subscribe(resposta => this.contatos = resposta);
  }
}
