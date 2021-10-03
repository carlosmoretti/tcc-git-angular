import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import GenericService from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends GenericService<any> {

  API_URL = environment.apiUrl + '/aluno';

  constructor(public httpClient: HttpClient) {
    super(httpClient, environment.apiUrl + '/aluno');
  }

  getAlunoByMatricula(matricula: string) {
    let params = new HttpParams();
    params = params.append('matricula', matricula);

    return this.httpClient.get(this.API_URL + '/matricula', { params });
  }
}
