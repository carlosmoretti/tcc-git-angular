import { ConfiguracaoService } from './service/configuracao/configuracao.service';
import { AutenticacaoService } from './service/autenticacao/autenticacao.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'frontend';

  toogle:boolean = true;

  constructor(private service: AutenticacaoService) {
  }

  ngAfterViewInit(): void {
    this.toogle = false;
  }

}
