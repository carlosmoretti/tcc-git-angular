import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AutenticacaoService } from './../service/autenticacao/autenticacao.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private isRefreshing = false;


  constructor(private service: AutenticacaoService, private route: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.service.getToken() != null) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.service.getToken()
        }
      })
    }

    return next.handle(req).pipe(catchError(err => {
      if (err.status === 403) {
        this.route.navigate(['/forbidden'])
      } else if(err.status === 401) {
        let usuarioLogado = this.service.getUsuarioLogado();
        this.service.limparToken();
        this.route.navigate(['/publico', 'auth', usuarioLogado.role])
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
  }))
  }
}
