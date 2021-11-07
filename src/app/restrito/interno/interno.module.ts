import { SharedModule } from './../../shared/shared.module';
import { InternoService } from './../../service/interno/interno.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

let route: Routes = [
  { path: '', component: MasterComponent },
  { path: 'teste', component: MasterComponent },
  { path: 'editar/:id', component: DetailComponent },
  { path: 'novo', component: DetailComponent }
]

@NgModule({
  declarations: [
    MasterComponent,
    DetailComponent
  ],
  providers: [
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class InternoModule { }
