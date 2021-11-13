import { ConfiguracaoService } from './../../../service/configuracao/configuracao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-responsavel',
  templateUrl: './consulta-responsavel.component.html',
  styleUrls: ['./consulta-responsavel.component.css']
})
export class ConsultaResponsavelComponent implements OnInit {

  matricula!: any;
  armazenarMatricula!: boolean;
  linkLogo!: string;

  constructor(private configuracaoService: ConfiguracaoService) { }

  ngOnInit(): void {

    this.configuracaoService.getByNome('url_logo_escola')
      .subscribe((e: any) => this.linkLogo = e.valor);

    this.matricula = localStorage.getItem('matricula');
    this.armazenarMatricula = localStorage.getItem('armazenarMatricula') == 'true';
  }

  onChangeArmazenarMatricula(e: boolean) {
    if(e) {
      localStorage.setItem('matricula', this.matricula);
      localStorage.setItem('armazenarMatricula', 'true');
    } else {
      localStorage.removeItem('matricula');
      localStorage.removeItem('armazenarMatricula');
    }
  }

}
