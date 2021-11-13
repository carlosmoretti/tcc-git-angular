import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecadoService } from './../../../service/recado/recado.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-notificacao-master',
  templateUrl: './notificacao-master.component.html',
  styleUrls: ['./notificacao-master.component.css']
})
export class NotificacaoMasterComponent implements OnInit {

  recados$!: Observable<any>;
  recado!: string;

  @ViewChild('content') modal: any;

  constructor(public recadoService: RecadoService, private route: ActivatedRoute, private modalService: NgbModal, private location: Location) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    if(id != null) {
      this.consultar(id)
    }

    this.recados$ = this.recadoService.get();
  }

  consultar(id: number) {

    this.recadoService.getById(id)
      .subscribe((e: any) => {
        this.recado = e.mensagem

        this.recadoService.visualizar(id)
          .subscribe(x => {
            this.modalService.open(this.modal, { size: 'lg' })
              .result.then((result) => {
              }, (reason) => {
              });
          })
      })
  }

}
