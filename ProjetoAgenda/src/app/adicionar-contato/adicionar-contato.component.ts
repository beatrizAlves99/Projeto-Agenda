import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.css']
})
export class AdicionarContatoComponent implements OnInit {
  contatos: Array<any>;
  contato: any;
  atualizar: boolean;
  constructor(private conection: AgendaService, private router: Router, private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.contato = {};
    this.atualizar = false;
    const par = this.routeActive.snapshot.params;
    if (par.id) {
      this.conection.pegarContato(par.id).subscribe(resposta => {
        console.log(resposta);
        this.contato = resposta;
        this.atualizar = true;
      });
    }
  }

  criarContato(formulario: FormGroup) {
    this.conection.criarContato(this.contato).subscribe(resposta => {

      this.router.navigate(['/agenda']);


    });
    formulario.reset();
  }

  atualizarContato(formulario: FormGroup) {
    this.conection.atualizarContato(this.contato.id, this.contato).subscribe(resposta => {
      console.log(resposta);
      this.router.navigate(['/agenda']);
    });
    formulario.reset();

  }

}
