import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'restrito', loadChildren: () => import('./restrito/restrito.module').then(e => e.RestritoModule) },
  { path: 'publico', loadChildren: () => import('./publico/publico.module').then(e => e.PublicoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
