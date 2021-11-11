import { GridDto } from './../../../shared/grid/grid.dto';
import { AgendaService } from './../../../service/agenda/agenda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TurmaService } from './../../../service/turma/turma.service';
import { Component, OnInit } from '@angular/core';
import IGrid from 'src/app/shared/grid/grid.interface';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit, IGrid {

  constructor(private turmaService: TurmaService, private route: Router, public agendaService: AgendaService) { }

  turmas$!: Observable<any>;
  grid!: GridDto;
  turmaSelecionada: any;

  montarGrid(dados: any): GridDto {
    let colunas = ['ID', 'Data', 'Turma'];
    let valores = [];

    for(let item of dados) {
      let valoresNested = [];

      valoresNested.push(item.id);
      valoresNested.push(new Date(item.dataEscrita).toLocaleDateString());
      valoresNested.push(item.turma.matricula);
      valores.push(valoresNested);
    }

    return new GridDto(colunas, valores, 'preencher/' + this.turmaSelecionada, 'editar');
  }

  ngOnInit(): void {
    this.turmas$ = this.turmaService.getByCurrentUser();
  }

  agendaPorTurma(turma: number) {
    this.turmaSelecionada = turma;
    this.agendaService.agendaPorTurma(turma)
      .subscribe((e: any) => {
        this.grid = this.montarGrid(e);
      });
  }
}
