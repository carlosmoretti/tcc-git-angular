import { InternoService } from './../../../service/interno/interno.service';
import { Component, OnInit } from '@angular/core';
import IGrid from 'src/app/shared/grid/grid.interface';
import { GridDto } from 'src/app/shared/grid/grid.dto';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent  {

  constructor(public service: InternoService) { }
}
