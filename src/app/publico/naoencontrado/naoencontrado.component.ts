import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naoencontrado',
  templateUrl: './naoencontrado.component.html',
  styleUrls: ['./naoencontrado.component.css']
})
export class NaoencontradoComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  voltar() {
    this.location.back();
  }

}
