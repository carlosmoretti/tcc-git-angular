import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PreenchimnetoComponent } from './preenchimneto/preenchimneto.component';
import { QuillModule } from 'ngx-quill';

let routes: Routes = [
  { path: '', component: MasterComponent },
  { path: 'preencher/:id', component: PreenchimnetoComponent }
];

@NgModule({
  declarations: [
    MasterComponent,
    PreenchimnetoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot(),
    FormsModule,
  ]
})
export class AgendaModule { }
