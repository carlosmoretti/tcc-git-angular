import { AlunoService } from './../../../service/aluno/aluno.service';
import { ResponsavelService } from './../../../service/responsavel/responsavel.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private service: ResponsavelService, private route: ActivatedRoute, private toastrService: ToastrService, private alunoService: AlunoService, private location: Location) { }

  responsavel: any;
  visaoInclusao!: boolean;

  usuarioSelecionado: any;

  labelTela!: string;
  idUsuario!: number;

  alunoCarregadoAlteracao!: number;

  ngOnInit(): void {
    this.idUsuario = this.route.snapshot.params.id;

    if(this.idUsuario != null) {
      this.labelTela = 'Editar Responsável'
      this.service.getById(this.idUsuario).subscribe(e =>  {
        this.responsavel = e

        this.service.alunosPorResponsavel(this.idUsuario)
          .subscribe(e => this.responsavel.alunos = e);
      });
    } else {
      this.labelTela = 'Cadastrar Responsável'
      this.responsavel = {
        matricula: this.criarMatricula()
      };
    }
  }

  criarMatricula() {
    const data = new Date();
    let retorno = data.getFullYear() + data.toLocaleTimeString() + data.getMilliseconds() + 'R';
    retorno = retorno.split(':').join('');
    return retorno;
  }

  removerAluno(i: number) {
    this.responsavel.alunos.splice(i, 1);
  }

  salvar() {
    if(this.idUsuario == null) {
      return this.service.post(this.responsavel)
      .subscribe(e => {
        this.toastrService.success("Informações do responsável salvas com sucesso.")
        this.location.back();
      });
    } else {
      return this.service.put(this.responsavel)
      .subscribe(e => {
        this.toastrService.success("Informações do responsável salvas com sucesso.")
        this.location.back();
      });
    }
  }

  adicionarAlunoHandler(e: any) {
    console.log(e);
    this.visaoInclusao = false;

    if(this.responsavel.alunos == null)
      this.responsavel.alunos = [];

    this.responsavel.alunos.push(e);
    this.usuarioSelecionado = null;
  }

  editarUsuario(item: any, i: number) {
    this.usuarioSelecionado = JSON.parse(JSON.stringify(item));
    this.alunoCarregadoAlteracao = i;
    this.visaoInclusao = true;
  }
}
