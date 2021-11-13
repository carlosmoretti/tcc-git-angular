import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import GenericService from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class RecadoService extends GenericService<any> {
  constructor(private http: HttpClient) {
    super(http, environment.apiUrl + 'recado')
  }

  visualizar(id: number) {
    return this.http.put(environment.apiUrl + 'recado/visualizar/' + id, null);
  }
}
