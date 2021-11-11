import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import GenericService from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService extends GenericService<any> {

  constructor(private http: HttpClient) {
    super(http, environment.apiUrl + 'agenda');
  }

  salvarComTurma(turma: number, obj: any) {
    return this.http.post(environment.apiUrl + 'agenda/turma/' + turma, obj);
  }

  agendaPorTurma(turma: number) {
    return this.http.get(environment.apiUrl + 'agenda/turma/' + turma);
  }

  alunosPorAgenda(agenda: number) {
    return this.http.get(environment.apiUrl + 'agenda/' + agenda + '/registros');
  }

  atualizarRegistro(obj: any) {
    return this.http.put(environment.apiUrl + 'agenda/registro', obj)
  }
}
