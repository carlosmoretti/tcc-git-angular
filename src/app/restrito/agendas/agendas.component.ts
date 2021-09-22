import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.css']
})
export class AgendasComponent implements OnInit {

  ultimosPreenchimentos = [
    { professor: 'Andréa Rodrigues da Silva', aluno: 'Bernardo Rodrigues da Silva Moretti', dataHora: new Date() },
    { professor: 'Andréa Rodrigues da Silva', aluno: 'Bernardo Rodrigues da Silva Moretti', dataHora: new Date() },
    { professor: 'Andréa Rodrigues da Silva', aluno: 'Bernardo Rodrigues da Silva Moretti', dataHora: new Date() },
    { professor: 'Andréa Rodrigues da Silva', aluno: 'Bernardo Rodrigues da Silva Moretti', dataHora: new Date() },
    { professor: 'Andréa Rodrigues da Silva', aluno: 'Bernardo Rodrigues da Silva Moretti', dataHora: new Date() }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
