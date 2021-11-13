import { ConfiguracaoService } from './service/configuracao/configuracao.service';
import { AutenticacaoService } from './service/autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private service: AutenticacaoService) {
  }

}
