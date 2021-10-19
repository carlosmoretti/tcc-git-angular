import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
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
