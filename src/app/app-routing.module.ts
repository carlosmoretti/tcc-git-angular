import { AutenticadoGuardService } from './guards/autenticado.guard';
import { NaoencontradoComponent } from './publico/naoencontrado/naoencontrado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'restrito', loadChildren: () => import('./restrito/restrito.module').then(e => e.RestritoModule), canActivate: [AutenticadoGuardService] },
  { path: 'publico', loadChildren: () => import('./publico/publico.module').then(e => e.PublicoModule) },
  { path: 'forbidden', component: NaoencontradoComponent },
  { path: '**', component: NaoencontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
