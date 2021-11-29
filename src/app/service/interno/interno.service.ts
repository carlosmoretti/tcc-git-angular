import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import GenericService from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class InternoService extends GenericService<any> {

  constructor(public http: HttpClient) {
    super(http, environment.apiUrl + 'interno')
  }

  niveis() {
    return this.httpClient.get(environment.apiUrl + 'interno/niveis');
  }

  dashboard() {
    return this.httpClient.get(environment.apiUrl + 'interno/dashboard');
  }
}
