import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import GenericService from '../generic.service';

@Injectable()
export class TurmaService extends GenericService<any> {

  constructor(private http: HttpClient) {
    super(http, environment.apiUrl + '/turma');
  }
}
