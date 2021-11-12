import { AlunoService } from './../../../service/aluno/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-master',
  templateUrl: './aluno-master.component.html',
  styleUrls: ['./aluno-master.component.css']
})
export class AlunoMasterComponent implements OnInit {

  constructor(public service: AlunoService) { }

  ngOnInit(): void {
  }

}
