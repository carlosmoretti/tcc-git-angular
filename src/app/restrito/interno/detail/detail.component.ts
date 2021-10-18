import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  labelTela!: string;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    if(id != null) {
      this.labelTela = 'Editar Professor'
    } else {
      this.labelTela = 'Novo Professor'
    }
  }

}
