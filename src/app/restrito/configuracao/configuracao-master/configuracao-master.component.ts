import { ConfiguracaoService } from './../../../service/configuracao/configuracao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracao-master',
  templateUrl: './configuracao-master.component.html',
  styleUrls: ['./configuracao-master.component.css']
})
export class ConfiguracaoMasterComponent implements OnInit {

  constructor(public configuracaoService: ConfiguracaoService) { }

  ngOnInit(): void {
  }

}
