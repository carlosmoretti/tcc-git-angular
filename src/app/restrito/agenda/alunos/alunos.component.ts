import { AgendaService } from './../../../service/agenda/agenda.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  agenda: any;
  alunos!: Array<any>;
  alunosFaltantes!: Array<any>;
  registroSelecionadoModal: any;

  constructor(private route: ActivatedRoute,
    private agendaService: AgendaService,
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.agendaService.getById(id)
      .subscribe(e => {
        this.agenda = e

        this.agendaService.alunosPorAgenda(this.agenda.id)
          .subscribe((e: any) => {
            this.alunos = e.filter((x: any) => x.alunoPresente);
            this.alunosFaltantes = e.filter((x: any) => !x.alunoPresente);
          })
      });
  }

  abrirModalEdicao(content: any, registro: any) {
    this.registroSelecionadoModal = registro;
    console.log(this.registroSelecionadoModal);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(x => {
        this.agendaService.atualizarRegistro(this.registroSelecionadoModal)
          .subscribe(x => {
            this.toastrService.success("Registro alterado com sucesso.");
            this.ngOnInit();
          })
      });
  }

  backLocation() {
    this.location.back();
  }

  removerAgenda() {
    const confirmResult = confirm("Deseja realmente remover a agenda?");

    if(confirmResult)
      this.agendaService.delete(this.agenda.id)
        .subscribe(x => {
          this.toastrService.success("Agenda removida com sucesso.");
          this.location.back();
        });
  }

}
