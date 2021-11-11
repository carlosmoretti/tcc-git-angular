import { QuillModule } from 'ngx-quill';
import { ConsultaResponsavelDetailComponent } from './consulta-aluno/consulta-responsavel-detail/consulta-responsavel-detail.component';
import { ConfiguracaoService } from './../service/configuracao/configuracao.service';
import { TrocasenhaService } from './../service/trocasenha/trocasenha.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicoComponent } from './publico/publico.component';
import { FormsModule } from '@angular/forms';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { NaoencontradoComponent } from './naoencontrado/naoencontrado.component';
import { TrocasenhaComponent } from './trocasenha/trocasenha.component';
import { ConsultaResponsavelComponent } from './consulta-aluno/consulta-responsavel/consulta-responsavel.component';
import { ConsultaResponsavelEditorComponent } from './consulta-aluno/consulta-responsavel-editor/consulta-responsavel-editor.component';

let routes: Routes = [
  { path: '', component: PublicoComponent, children: [
    { path: 'auth/:perfil', component: AutenticacaoComponent },
    { path: 'trocasenha/:id', component: TrocasenhaComponent },
    { path: 'consulta/agenda', component: ConsultaResponsavelComponent },
    { path: 'consulta/agenda/:matricula', component: ConsultaResponsavelDetailComponent },
    { path: 'consulta/agenda/:matricula/:matriculaAluno', component: ConsultaResponsavelEditorComponent },
  ]}
]

@NgModule({
  declarations: [
    PublicoComponent,
    AutenticacaoComponent,
    NaoencontradoComponent,
    TrocasenhaComponent,
    ConsultaResponsavelComponent,
    ConsultaResponsavelDetailComponent,
    ConsultaResponsavelEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    QuillModule
  ],
  providers: []
})
export class PublicoModule { }
