import { AlunoService } from './../../../service/aluno/aluno.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-consulta-responsavel-detail',
  templateUrl: './consulta-responsavel-detail.component.html',
  styleUrls: ['./consulta-responsavel-detail.component.css']
})
export class ConsultaResponsavelDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: AlunoService, private location: Location) { }

  alunos!: Array<any>;

  ngOnInit(): void {
    let matricula = this.route.snapshot.params['matricula'];

    this.service.alunosPorMatriculaResponsavel(matricula)
      .subscribe((e: any) => this.alunos = e);
  }

  voltar() {
    this.location.back();
  }

}
