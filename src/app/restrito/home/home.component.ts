import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cardsInfo = [
    { valor: 255, descricao: 'Responsáveis cadastrados'},
    { valor: 152, descricao: 'Agendas preenchidas'},
    { valor: 420, descricao: 'Alunos cadastrados'},
    { valor: 15, descricao: 'Dias de uso do sistema.'},
  ]

  ngOnInit(): void {
  }

}
