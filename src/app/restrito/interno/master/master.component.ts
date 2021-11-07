import { InternoService } from './../../../service/interno/interno.service';
import { Component, OnInit } from '@angular/core';
import IGrid from 'src/app/shared/grid/grid.interface';
import { GridDto } from 'src/app/shared/grid/grid.dto';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit, IGrid {

  constructor(public service: InternoService) { }

  grid!: GridDto;

  montarGrid(itens: Array<any>) : GridDto {
    let colunas = ['ID', 'Nome', 'Sobrenome','Nome de Usuário', 'Matrícula',];
    let valores = [];

    for(let item of itens) {
      let valoresNested = [];

      valoresNested.push(item.id);
      valoresNested.push(item.nome);
      valoresNested.push(item.sobrenome);
      valoresNested.push(item.login);
      valoresNested.push(item.matricula);
      valores.push(valoresNested);
    }

    return new GridDto(colunas, valores, 'novo', 'editar');
  }

  ngOnInit(): void {
    this.service.get()
      .subscribe(e => {
        this.grid = this.montarGrid(e);
      });
  }

}
