import { SharedService } from './../../../service/shared.service';
import { AlunoService } from './../../../service/aluno/aluno.service';
import { TurmaService } from '../../../service/turma/turma.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar',
  templateUrl: './editarTurma.component.html',
  styleUrls: ['./editarTurma.component.css']
})
export class EditarTurmaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: TurmaService,
    private modalService: NgbModal,
    private alunoService: AlunoService,
    private toastr: ToastrService,
    private sharedService: SharedService) { }

  item: any = {};
  labelTela: string = 'Incluir Turma';
  matriculaAlunoModal!: string;

  ngOnInit(): void {
    if(this.route.snapshot.params.id != null) {
      this.service.getById(this.route.snapshot.params.id)
        .subscribe(e => this.item = e);

      this.labelTela = 'Editar Turma'
    } else {
      this.item.matricula = this.sharedService.criarMatricula();
    }
  }

  inclurAluno(e: any) {
    if(this.item.alunos == null)
      this.item.alunos = [];

    this.item.alunos.push(e);
  }

  abrirModal(content: any) {
    this.matriculaAlunoModal = '';
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.alunoService.getAlunoByMatricula(this.matriculaAlunoModal)
        .subscribe(e => {
          this.inclurAluno(e)
        }, j => {
          this.toastr.error(j.error.message);
        });
    }, (reason) => {
      console.log(reason);
    });
  }

  removerAluno(i: number) {
    this.item.alunos.splice(i, 1);
  }

  salvar() {
    if(this.route.snapshot.params.id != null) {
      this.service.put(this.item)
        .subscribe(e => this.toastr.success("Turma salva com sucesso!"));
    } else {
      this.service.post(this.item)
        .subscribe(e => this.toastr.success("Turma salva com sucesso!"));
    }
  }

}
