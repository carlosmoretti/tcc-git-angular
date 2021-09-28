import { GridDto } from './../../shared/grid/grid.dto';
import { ResponsavelService } from './../../service/responsavel/responsavel.service';
import { Component, OnInit } from '@angular/core';
import IGrid from 'src/app/shared/grid/grid.interface';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.component.html',
  styleUrls: ['./responsavel.component.css']
})
export class ResponsavelComponent
  implements OnInit, IGrid {

  constructor(public service: ResponsavelService) { }

  grid!: GridDto;

  ngOnInit(): void {
    this.service.get()
      .subscribe(e => {
        this.grid = this.montarGrid(e);
      });
  }

  montarGrid(itens: Array<any>) : GridDto {
    let colunas = ['ID', 'Nome', 'Sobrenome', 'Nome de Usuário', 'Matrícula', 'Alunos Atrelados'];
    let valores = [];

    for(let item of itens) {
      let valoresNested = [];

      valoresNested.push(item.id);
      valoresNested.push(item.nome);
      valoresNested.push(item.sobrenome);
      valoresNested.push(item.login);
      valoresNested.push(item.matricula);
      valoresNested.push(item.alunos.length + ' <i class="fas fa-user"></i>');

      valores.push(valoresNested);
    }

    return new GridDto(colunas, valores, 'novo', 'editar');
  }

}
