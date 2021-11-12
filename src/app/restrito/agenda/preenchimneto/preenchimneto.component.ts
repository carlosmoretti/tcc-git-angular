import { Location } from '@angular/common';
import { AgendaService } from './../../../service/agenda/agenda.service';
import { ConfiguracaoService } from './../../../service/configuracao/configuracao.service';
import { TurmaService } from './../../../service/turma/turma.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-preenchimneto',
  templateUrl: './preenchimneto.component.html',
  styleUrls: ['./preenchimneto.component.css']
})
export class PreenchimnetoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private turmaService: TurmaService,
    private configuracaoService: ConfiguracaoService,
    private agendaService: AgendaService,
    private toastrService: ToastrService,
    private location: Location) { }

  turma: any;
  layoutAgenda: any;

  alunosBackup!: Array<any>;
  modoVisualizacao: boolean = false;

  ngOnInit(): void {

    this.configuracaoService.getByNome('layout')
      .subscribe((e: any) => {

        this.turmaService.getById(this.activatedRoute.snapshot.params.id).subscribe(data => {
          this.turma = data;
          this.inicializaHtml(this.turma.alunos, e.valor);
          this.inicializaVariaveis(this.turma.alunos);
          this.alunosBackup = JSON.parse(JSON.stringify(this.turma.alunos))
        })
      });
  }

  inicializaHtml(alunos: Array<any>, valor: string) {
    alunos.forEach((z: any) => {
      if(z.html == null)
        z.html = valor;
    })
  }

  reiniciarAluno(indexAluno: number) {
    this.turma.alunos[indexAluno].html = this.alunosBackup[indexAluno].html;
  }

  salvarInformacoesAluno(indexAluno: number) {
    this.reiniciarAluno(indexAluno);
    let alunoHtml = this.turma.alunos[indexAluno].html;
    let variaveisAluno = this.turma.alunos[indexAluno].variaveis;

    variaveisAluno.forEach((e: any) => {
      alunoHtml = alunoHtml.replace(e.original, e.selecionado == null ? '-' : e.selecionado);
    })

    this.turma.alunos[indexAluno].html = alunoHtml;
    this.turma.alunos[indexAluno].status = true;
    this.turma.alunos[indexAluno].visivel = false;
  }

  salvar() {
    this.agendaService.salvarComTurma(this.activatedRoute.snapshot.params.id, this.turma.alunos)
      .subscribe(x => {
        this.location.back();
        this.toastrService.success("Agenda salva com sucesso para a turma.")
      });
  }

  inicializaVariaveis(alunos: Array<any>) {
    let modeloDefault = JSON.parse(JSON.stringify(this.turma.alunos[0].html));
    const regexPattern = /{(.|\n)*?}/gm;

    alunos.forEach(e => {
      e.variaveis = [];
      let opcoes = modeloDefault.match(regexPattern);

      opcoes.forEach((x: any) => {
        let cases = x
          .replace("{", "")
          .replace("}", "");

        let titulo = cases.split("|")[0];
        let opcoesVariavel = cases.split("|");
        opcoesVariavel.shift();

        e.variaveis.push({
          original: x,
          titulo,
          opcoes: opcoesVariavel
        })
      })
    })
  }

  get existeAlunoPendente() {
    return this.turma.alunos.some((e: any) => !e.status);
  }
}
