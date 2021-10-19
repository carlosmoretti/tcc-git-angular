import { TrocasenhaService } from './../../service/trocasenha/trocasenha.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trocasenha',
  templateUrl: './trocasenha.component.html',
  styleUrls: ['./trocasenha.component.css']
})
export class TrocasenhaComponent implements OnInit {

  constructor(private service: TrocasenhaService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private navigate: Router) { }

  trocaSenha: any = {};
  itemBanco: any;

  ngOnInit(): void {
  }

  enviar() {
    this.service.enviar(this.route.snapshot.params.id, this.trocaSenha)
      .subscribe((x: any) => {
        this.toastrService.success("Troca de senha efetuada com sucesso.");
        this.navigate.navigate(['publico', 'auth', x.modulo]);
      });
  }

}
