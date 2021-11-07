import { TurmaService } from './../../../service/turma/turma.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preenchimneto',
  templateUrl: './preenchimneto.component.html',
  styleUrls: ['./preenchimneto.component.css']
})
export class PreenchimnetoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private turmaService: TurmaService) { }

  turma: any;

  ngOnInit(): void {
    this.turmaService.getById(this.activatedRoute.snapshot.params.id).subscribe(data => {
      this.turma = data;
    });
  }

}
