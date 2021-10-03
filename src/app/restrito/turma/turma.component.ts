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
export class TurmaComponent implements OnInit, IGrid {

  constructor(public service: TurmaService, private route: ActivatedRoute) { }

  gridConfig: any;

  turmaSelecionada: any;

  ngOnInit(): void {

    this.service.get()
      .subscribe(e => {
        this.gridConfig = this.montarGrid(e);
      });

    if(this.route.snapshot.params.id != null) {
      let number = this.route.snapshot.params.id;
      this.service.getById(number)
        .subscribe(e => {
          console.log(e);
        });
    }
  }

  montarGrid(itens: Array<any>) : GridDto {
    let colunas = ['ID', 'Matricula', 'Qtde. Alunos'];
    let valores = [];

    for(let item of itens) {
      let valoresNested = [];

      valoresNested.push(item.id);
      valoresNested.push(item.matricula);
      valoresNested.push(item.alunos.length + ' <i class="fas fa-user"></i>');

      valores.push(valoresNested);
    }

    return new GridDto(colunas, valores, 'novo', 'editar');
  }

}
