import { Component, OnInit } from '@angular/core';

const LIMITE_MAXIMO_CARACTERES = 40;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  constructor() {}

  feedbacks = [
    {
      responsavel: 'Carlos Moretti',
      aluno: 'Benício Rodrigues Sampaio Moretti',
      mensagem: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ',
    },
    {
      responsavel: 'Carlos Moretti',
      aluno: 'Benício da Silva',
      mensagem: 'Obrigado, professor.',
    },
    {
      responsavel: 'Carlos Moretti',
      aluno: 'Benício da Silva',
      mensagem: 'Obrigado, professor.',
    },
    {
      responsavel: 'Carlos Moretti',
      aluno: 'Benício da Silva',
      mensagem: 'Obrigado, professor.',
    },
    {
      responsavel: 'Carlos Moretti',
      aluno: 'Benício da Silva',
      mensagem: 'Obrigado, professor.',
    },
  ];

  reduzirCaracteres(msg: string) {
    let mensagem = msg.substring(0, LIMITE_MAXIMO_CARACTERES);

    if(mensagem.length == LIMITE_MAXIMO_CARACTERES)
      mensagem += ' [...]';

    return mensagem;
  }

  ngOnInit(): void {}
}
