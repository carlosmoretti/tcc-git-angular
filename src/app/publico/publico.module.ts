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

let routes: Routes = [
  { path: '', component: PublicoComponent, children: [
    { path: 'auth/:perfil', component: AutenticacaoComponent },
    { path: 'trocasenha/:id', component: TrocasenhaComponent }
  ]}
]

@NgModule({
  declarations: [
    PublicoComponent,
    AutenticacaoComponent,
    NaoencontradoComponent,
    TrocasenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ TrocasenhaService]
})
export class PublicoModule { }
