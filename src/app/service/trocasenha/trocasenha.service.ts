import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrocasenhaService {

  constructor(private http: HttpClient) { }

  obter(id: number) {
    let url = environment.apiUrl + '/auth/trocasenha/' + id;
    return this.http.get(url);
  }

  enviar(id: number, obj: any) {
    let url= environment.apiUrl + '/auth/trocasenha/' + id + '/confirmar';
    return this.http.post(url, obj);
  }
}
