import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InternoService } from 'src/app/service/interno/interno.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() internoHandler = new EventEmitter();

  constructor(
    private activatedRoute: ActivatedRoute,
    private service : InternoService,
    private toastrService : ToastrService,
    private location: Location
    ) { }

  labelTela!: string;
  model : any;
  id !: number;
  niveis$!: Observable<any>;

  compareNivel(nivel1: any, nivel2: any) {
    if(nivel1 != null && nivel2 != null)
      return nivel1.id == nivel2.id;

    return false;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.niveis$ = this.service.niveis();

    if(this.id != null) {
      this.labelTela = 'Editar Professor'
      this.service.getById(this.id).subscribe(e =>
        {
        this.model = e ;
        this.model.dataInclusao = new Date(this.model.dataInclusao).toISOString().split('T')[0];
      });
    } else {
      this.labelTela = 'Novo Professor'
      this.model = {}
      const data = new Date();
      this.model.matricula = data.getFullYear() + data.toLocaleTimeString() + data.getMilliseconds();
      this.model.matricula = data.getFullYear() + data.toLocaleTimeString() + data.getMilliseconds();
      this.model.matricula = this.model.matricula.replace(':', '');
      this.model.matricula = this.model.matricula.replace(':', '');
      this.model.matricula = this.model.matricula.replace('/', '');
    }
  }

  salvar() {
    if(this.id == null) {
      return this.service.post(this.model)
      .subscribe(e => {
        this.toastrService.success("Informações do professor salvas com sucesso.")
        this.location.back();
      });
    } else {
      return this.service.put(this.model)
      .subscribe(e => {
        this.toastrService.success("Informações do professor salvas com sucesso.")
        this.location.back();
      });
    }
  }

}
