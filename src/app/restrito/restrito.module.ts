import { SharedModule } from './../shared/shared.module';
import { GridComponent } from './../shared/grid/grid.component';
import { RestritoComponent } from './restrito/restrito.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AgendasComponent } from './agendas/agendas.component';
import { ResponsavelComponent } from './responsavel/responsavel.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './responsavel/editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncluiralunoComponent } from './responsavel/incluiraluno/incluiraluno.component';

let routes: Routes = [
  { path: '', component: RestritoComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'responsavel', component: ResponsavelComponent, },
    { path: 'responsavel/editar/:id', component: EditarComponent },
    { path: 'responsavel/novo', component: EditarComponent },
  ]}
]

@NgModule({
  declarations: [
    HomeComponent,
    RestritoComponent,
    FeedbackComponent,
    AgendasComponent,
    ResponsavelComponent,
    EditarComponent,
    IncluiralunoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ]
})
export class RestritoModule { }
