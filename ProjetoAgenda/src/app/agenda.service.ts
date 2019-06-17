import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  URL_SERVIDOR = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  listarContatos() {
    return this.http.get<Array<any>>(`${this.URL_SERVIDOR}`);
  }

  criarContato(contato: any) {
    return this.http.post(this.URL_SERVIDOR, contato);
  }

  deletarContato(i: any) {

    console.log(i);
    return this.http.delete(this.URL_SERVIDOR + '/' + i);

  }

  pegarContato(id: any) {
    return this.http.get(`${this.URL_SERVIDOR}/${id}`);
  }

  atualizarContato(id: any, update: any): Observable<any> {
    return this.http.put(`${this.URL_SERVIDOR}`, update);
  }
}
