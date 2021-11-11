import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from './../../../service/aluno/aluno.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApexYAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-consulta-responsavel-editor',
  templateUrl: './consulta-responsavel-editor.component.html',
  styleUrls: ['./consulta-responsavel-editor.component.css']
})
export class ConsultaResponsavelEditorComponent implements OnInit {

  constructor(private location: Location, private alunoService: AlunoService, private route: ActivatedRoute, private modalService: NgbModal) { }

  aluno!: any;
  dataInicial!: Date;
  dataFinal!: Date;

  resultado: any;
  agendaModal!: string;

  ngOnInit() : void {
    this.alunoService.getAlunoByMatricula(this.route.snapshot.params['matriculaAluno'])
      .subscribe(e => this.aluno = e);
  }

  consultar() {
    this.alunoService.agendaPorAlunoFiltroData(this.aluno.matricula, this.dataInicial, this.dataFinal)
      .subscribe(e => this.resultado = e);
  }

  voltar() {
    this.location.back();
  }

  abrirAgenda(content: any, item: any) {
    this.agendaModal = item.registros[0].conteudo;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    });
  }

}
