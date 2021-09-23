import { GridDto } from './grid.dto';
import { Component, Input, OnInit } from '@angular/core';
import GenericService from 'src/app/service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  @Input() config!: GridDto;
  @Input() service!: GenericService<any>;

  deleteRegister(id: number, i: number) {
    this.service.delete(id)
      .subscribe(e => {
        this.config.valores.splice(i, 1);
      });
  }

  getId(item: Array<any>) {
    return item[0];
  }

}
