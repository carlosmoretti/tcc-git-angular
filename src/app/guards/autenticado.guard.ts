import { AutenticacaoService } from './../service/autenticacao/autenticacao.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AutenticadoGuardService implements CanActivate {

  constructor(private service: AutenticacaoService, private routeService: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let usuarioLogado = this.service.getUsuarioLogado();

    if(usuarioLogado == null) {
      this.routeService.navigate(['/forbidden']);
      return false;
    }

    return true;
  }

}
