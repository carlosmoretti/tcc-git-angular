
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

  alunosPorMatriculaResponsavel(matricula: string) {
    return this.httpClient.get(environment.apiUrl + '/consulta-responsavel/' + matricula);
  }

  private getDataAsString(data: Date) {
    return "'" + new Date(data).toISOString().split('T')[0] + "'";
  }

  agendaPorAlunoFiltroData(matriculaAluno: string, dataInicio: Date, dataFim: Date) {
    let params = new HttpParams();
    params = params.append('dataInicio', this.getDataAsString(dataInicio));
    params = params.append('dataFim', this.getDataAsString(dataFim));
    return this.httpClient.get(environment.apiUrl + '/consulta-responsavel/agenda/' + matriculaAluno, { params });
  }
}
