import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  API_URL = environment.apiUrl + '/aluno';

  constructor(private httpClient: HttpClient) { }

  getAlunoByMatricula(matricula: string) {
    let params = new HttpParams();
    params = params.append('matricula', matricula);

    return this.httpClient.get(this.API_URL + '/matricula', { params });
  }
}
