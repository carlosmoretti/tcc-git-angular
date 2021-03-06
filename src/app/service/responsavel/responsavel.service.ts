import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import GenericService from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService extends GenericService<any> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, environment.apiUrl + 'responsavel');
  }

  alunosPorResponsavel(id: number) {
    return this.httpClient.get(environment.apiUrl + 'responsavel/' + id + '/alunos');
  }

  responsavelPorMatricula(matricula: string) {
    return this.httpClient.get(environment.apiUrl + 'responsavel/matricula/' + matricula);
  }
}
