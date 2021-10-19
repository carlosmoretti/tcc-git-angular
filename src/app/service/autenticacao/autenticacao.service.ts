import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  autenticar(login: string, senha: string, modulo: string) {
    return this.http.post(environment.apiUrl + '/auth/' + modulo, {
      login, senha
    });
  }

  refresh() {
    let usuarioLogado = this.getUsuarioLogado()
    return this.http.put(environment.apiUrl + '/auth/refresh/' + usuarioLogado.role, null);
  }

  armazenarToken(token: string) {
    localStorage.setItem('user', token);
  }

  getToken() {
    return localStorage.getItem('user');
  }

  limparToken() {
    localStorage.removeItem('user');
  }

  getUsuarioLogado() : any {
    let token = this.getToken();

    if(token != null)
      return jwt_decode(token);

    return null;
  }

  executaRefreshToken() {
    setInterval(() => {
      if(this.getUsuarioLogado() != null) {
        this.refresh()
          .subscribe((x: any) => this.armazenarToken(x.refresh_token))
      }
    }, 300000)
  }
}
