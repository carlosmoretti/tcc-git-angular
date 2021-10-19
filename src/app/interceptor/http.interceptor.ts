import { AutenticacaoService } from './../service/autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService, private route: Router, private service: AutenticacaoService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {

        req = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + this.service.getToken()
          }
        })

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                  return event;
              }

              return;
            }),
            catchError((err: any) => {
              if(err instanceof HttpErrorResponse) {

                if (err.status === 403) {
                  this.route.navigate(['/forbidden'])
                } else if(err.status === 401) {
                  let usuarioLogado = this.service.getUsuarioLogado();
                  this.service.limparToken();
                  this.route.navigate(['/publico', 'auth', usuarioLogado.role])
                }

                try {
                    this.toasterService.error(err.error.message);
                } catch(e) {
                    this.toasterService.error('Encontramos um erro. Entre em contato com o Administrador.');
                }
              }

              return of(err);
            }));

      }

}
