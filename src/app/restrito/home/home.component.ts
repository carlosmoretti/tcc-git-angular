import { InternoService } from 'src/app/service/interno/interno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private internoService: InternoService) { }

  cardsInfo: any[] = [];

  dashboardDados: any;

  ngOnInit(): void {
    this.internoService.dashboard().subscribe((e: any) => {
      this.cardsInfo = e;
    });
  }

}
