import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ResponsavelService } from './../../../service/responsavel/responsavel.service';
import { RecadoService } from './../../../service/recado/recado.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from './../../../service/aluno/aluno.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApexYAxis } from 'ng-apexcharts';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-consulta-responsavel-editor',
  templateUrl: './consulta-responsavel-editor.component.html',
  styleUrls: ['./consulta-responsavel-editor.component.css']
})
export class ConsultaResponsavelEditorComponent implements OnInit {

  constructor(private location: Location, private alunoService: AlunoService,
    private route: ActivatedRoute, private modalService: NgbModal,
    private responsavelService: ResponsavelService,
    private recadoService: RecadoService,
    private toastrService: ToastrService) { }

  aluno!: any;
  responsavel: any;

  dataInicial!: Date;
  dataFinal!: Date;

  resultado: any;
  agendaModal!: string;

  recadoResponsavel!: string;

  ngOnInit() : void {
    this.alunoService.getAlunoByMatricula(this.route.snapshot.params['matriculaAluno'])
      .subscribe(e => this.aluno = e);

    this.responsavelService.responsavelPorMatricula(this.route.snapshot.params['matricula'])
      .subscribe(e => this.responsavel = e);
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
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
    });
  }

  abrirEnviarRecado(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.recadoResponsavel = '';
    }, () => {
      this.recadoResponsavel = '';
    });
  }

  salvarRecado() {
    this.recadoService.post({
      mensagem: this.recadoResponsavel,
      aluno: this.aluno,
      responsavel: this.responsavel,
      data: new Date()
    }).subscribe(e => {
      this.toastrService.success('Recado enviado com sucesso para a instituição.');
      this.recadoResponsavel = '';
      this.modalService.dismissAll();
    })
  }

}
