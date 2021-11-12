import { Location } from '@angular/common';
import { ConfiguracaoService } from './../../../service/configuracao/configuracao.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuracao-detail',
  templateUrl: './configuracao-detail.component.html',
  styleUrls: ['./configuracao-detail.component.css']
})
export class ConfiguracaoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private configuracaoService: ConfiguracaoService, private location: Location, private toastrService: ToastrService) { }

  parametro: any = {};
  labelTela!: string;
  id!: number;

  isConteudoHtml: boolean = true;

  alteraEditor(e: any) {
    console.log(e);
    let toolbar = e.getModule('toolbar');
    toolbar.addHandler('image', console.log());
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    if(this.id != null) {
      this.labelTela = 'Editar Configuração'
      this.configuracaoService.getById(this.id)
        .subscribe(x => this.parametro = x);
    } else {
      this.labelTela = 'Nova Configuração'
    }
  }

  salvar() {
    if(this.id != null) {
      this.configuracaoService.post(this.parametro)
        .subscribe(x => {
          this.location.back()
          this.toastrService.success("Configuração cadastrada com sucesso.")
        });
    } else {
      this.configuracaoService.post(this.parametro)
        .subscribe(x => {
          this.location.back()
          this.toastrService.success("Configuração alterada com sucesso.")
        });
    }
  }

}
