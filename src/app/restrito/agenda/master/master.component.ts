import { Observable } from 'rxjs';
import { GridDto } from './../../../shared/grid/grid.dto';
import { AgendaService } from './../../../service/agenda/agenda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from './../../../service/turma/turma.service';
import { Component, OnInit } from '@angular/core';
import IGrid from 'src/app/shared/grid/grid.interface';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private turmaService: TurmaService, private route: Router, public agendaService: AgendaService) { }

  turmas$!: Observable<any>;
  grid!: GridDto;

  turmaSelecionada: any;
  agendas$!: Observable<any>;

  ngOnInit(): void {
    this.turmas$ = this.turmaService.getByCurrentUser();
  }

  agendaPorTurma(turma: number) {
    this.turmaSelecionada = turma;
    this.agendas$ = this.agendaService.agendaPorTurma(turma)
  }
}
