import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicoComponent } from './publico/publico.component';
import { FormsModule } from '@angular/forms';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { NaoencontradoComponent } from './naoencontrado/naoencontrado.component';

let routes: Routes = [
  { path: '', component: PublicoComponent, children: [
    { path: 'auth', component: AutenticacaoComponent }
  ]}
]

@NgModule({
  declarations: [
    PublicoComponent,
    AutenticacaoComponent,
    NaoencontradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicoModule { }
