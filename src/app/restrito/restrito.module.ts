import { SharedService } from './../service/shared.service';
import { TurmaService } from './../service/turma/turma.service';
import { SharedModule } from './../shared/shared.module';
import { InternoModule } from '../restrito/interno/interno.module';
import { GridComponent } from './../shared/grid/grid.component';
import { RestritoComponent } from './restrito/restrito.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ResponsavelComponent } from './responsavel/responsavel.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './responsavel/editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncluiralunoComponent } from './responsavel/incluiraluno/incluiraluno.component';
import { TurmaComponent } from './turma/turma.component';
import { EditarTurmaComponent } from './turma/editarTurma/editarTurma.component';
import { NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunoMasterComponent } from './aluno/aluno-master/aluno-master.component';

let routes: Routes = [
  { path: '', component: RestritoComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'aluno', component: AlunoMasterComponent },
    { path: 'responsavel', component: ResponsavelComponent, },
    { path: 'responsavel/editar/:id', component: EditarComponent },
    { path: 'responsavel/novo', component: EditarComponent },
    { path: 'turmas', component: TurmaComponent },
    { path: 'turmas/editar/:id', component: EditarTurmaComponent },
    { path: 'turmas/novo', component: EditarTurmaComponent },
    { path: 'interno', loadChildren: () => import('./interno/interno.module').then(x => x.InternoModule) },
    { path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(x => x.AgendaModule )}
  ]}
]

@NgModule({
  declarations: [
    HomeComponent,
    RestritoComponent,
    FeedbackComponent,
    ResponsavelComponent,
    EditarComponent,
    IncluiralunoComponent,
    TurmaComponent,
    EditarTurmaComponent,
    AlunoMasterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule,
    NgbModalModule,
    NgbTooltipModule,
    InternoModule
  ],
  providers: [
    SharedService
  ]
})
export class RestritoModule { }
