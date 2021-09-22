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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  autenticar() {
    this.router.navigateByUrl('/restrito/home');
  }

}
