import { CustomIconDto } from './custom-icon.dto';
import { GridDto } from './grid.dto';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import GenericService from 'src/app/service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  ITENS_POR_PAGINA = 20;
  PAGINA_SELECIONADA!: number;

  constructor(private toastrService: ToastrService) { }

  keyword!: string;
  config!: GridDto;

  @Input() service!: GenericService<any>;
  @Input() addVisible: boolean = true;
  @Input() customIcons!: CustomIconDto[];
  @Output() customEvent = new EventEmitter();

  ngOnInit(): void {
    this.consultar(1, '');
  }

  consultar(pagina: number, keyword: string) {
    this.service.paginate(pagina, this.ITENS_POR_PAGINA, keyword)
      .subscribe((e: any) => {
        this.config = new GridDto(e.itens.columns, 'novo', 'editar', e, e.itens.results);
        this.PAGINA_SELECIONADA = pagina;
      })
  }

  emitCustomEvent(id: number) {
    this.customEvent.emit(id);
  }

  deleteRegister(id: number, i: number) {
    let resultado = confirm('Deseja excluir o registro selecionado?')
    if(resultado) {
      this.service.delete(id)
        .subscribe(e => {
          this.config.valores.splice(i, 1);
          this.consultar(1, '');
        });
    }
  }

  get pagesArray() {
    return Array(this.config.paginateConfig.totalPages).fill(0).map((x, i) => i);
  }

  getId(item: Array<any>) {
    return item[0];
  }

  changePage(page: number) {
    this.consultar(page, this.keyword);
  }

  pesquisarKeyword() {
    this.consultar(1, this.keyword);
  }
}
