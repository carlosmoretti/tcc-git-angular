import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PreenchimnetoComponent } from './preenchimneto/preenchimneto.component';
import { QuillModule } from 'ngx-quill';
import { AlunosComponent } from './alunos/alunos.component';

let routes: Routes = [
  { path: '', component: MasterComponent },
  { path: 'preencher/:id', component: PreenchimnetoComponent },
  { path: 'editar/:id', component: AlunosComponent }
];

@NgModule({
  declarations: [
    MasterComponent,
    PreenchimnetoComponent,
    AlunosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot(),
    FormsModule,
    SharedModule
  ]
})
export class AgendaModule { }
