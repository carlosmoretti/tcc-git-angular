import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TurmaService } from './../../../service/turma/turma.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private turmaService: TurmaService, private route: Router) { }

  turmas$!: Observable<any>;

  ngOnInit(): void {
    this.turmas$ = this.turmaService.getByCurrentUser();
  }
}
