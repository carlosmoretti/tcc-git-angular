import { AlunoService } from './../../../service/aluno/aluno.service';
import { ResponsavelService } from './../../../service/responsavel/responsavel.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-incluiraluno',
  templateUrl: './incluiraluno.component.html',
  styleUrls: ['./incluiraluno.component.css']
})
export class IncluiralunoComponent implements OnInit {

  constructor(private service: AlunoService) { }

  @Input() aluno: any = {};
  matriculaBusca!: string;

  @Output() alunoHandler = new EventEmitter();

  consultarExistente: boolean = false;

  ngOnInit(): void {
    if(this.aluno == null) {
      const data = new Date();
      this.aluno = {};
      this.aluno.matricula = data.getFullYear() + data.toLocaleTimeString() + data.getMilliseconds();
      this.aluno.matricula = this.aluno.matricula.replace(':', '');
      this.aluno.matricula = this.aluno.matricula.replace(':', '');
      this.aluno.matricula = this.aluno.matricula.replace('/', '');
    } else {
      console.log(this.aluno.dataNascimento)
      this.aluno.dataNascimento = new Date(this.aluno.dataNascimento).toISOString().split('T')[0]
    }
  }

  getAlunoByMatricula() {
    return this.service.getAlunoByMatricula(this.matriculaBusca)
      .subscribe(e => {
        if(e != null) {
          this.aluno = e;
          this.consultarExistente = false;
        }
      });
  }

  concluirAssociacao() {
    return this.alunoHandler.emit(this.aluno);
  }

}
