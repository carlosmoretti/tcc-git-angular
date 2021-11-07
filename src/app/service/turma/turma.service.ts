import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import GenericService from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class TurmaService extends GenericService<any> {

  constructor(public http: HttpClient) {
    super(http, environment.apiUrl + '/turma');
  }

  getByCurrentUser() {
    return this.http.get(environment.apiUrl + '/turma/professor');
  }
}
