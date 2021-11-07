import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import GenericService from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService extends GenericService<any> {

  constructor(public http: HttpClient) {
    super(http, environment.apiUrl + '/configuracao');
  }

  getByNome(nome: string) {
    return this.http.get(environment.apiUrl + '/configuracao/' + nome);
  }
}
