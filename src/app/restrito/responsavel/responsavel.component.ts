import { GridDto } from './../../shared/grid/grid.dto';
import { ResponsavelService } from './../../service/responsavel/responsavel.service';
import { Component, OnInit } from '@angular/core';
import IGrid from 'src/app/shared/grid/grid.interface';

@Component({
  selector: 'app-responsavel',
  templateUrl: './responsavel.component.html',
  styleUrls: ['./responsavel.component.css']
})
export class ResponsavelComponent {
  constructor(public service: ResponsavelService) { }
}
