import { AutenticacaoService } from './../service/autenticacao/autenticacao.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {
  constructor(private service: AutenticacaoService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.service.getToken() != null) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.service.getToken()
        }
      })
    }

    return next.handle(req);
  }
}
