import { AutenticacaoService } from './../../service/autenticacao/autenticacao.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  environment = environment;
  usuario: any = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: AutenticacaoService) { }

  redirect() {
    this.router.navigate(['/restrito', 'home']);
  }

  ngOnInit(): void {
    if(this.service.getToken() != null)
      this.redirect();
  }

  autenticar() {
    this.service.autenticar(this.usuario.login, this.usuario.senha, this.activatedRoute.snapshot.params.perfil)
      .subscribe((x: any) => {
        this.service.armazenarToken(x.token);
        this.redirect();
      });
  }

  get modulo() {
    return this.activatedRoute.snapshot.params.perfil;
  }

}
