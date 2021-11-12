import { GridDto } from './../../shared/grid/grid.dto';
import { TurmaService } from './../../service/turma/turma.service';
import { Component, OnInit } from '@angular/core';
import IGrid from 'src/app/shared/grid/grid.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent {

  constructor(public service: TurmaService, private route: ActivatedRoute) { }
  turmaSelecionada: any;
}
