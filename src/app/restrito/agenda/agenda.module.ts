import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PreenchimnetoComponent } from './preenchimneto/preenchimneto.component';

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
    RouterModule.forChild(routes)
  ]
})
export class AgendaModule { }
