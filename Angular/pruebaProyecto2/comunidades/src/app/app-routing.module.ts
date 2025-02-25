import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'andalucia', loadChildren: () => import('./andalucia/andalucia.module').then(m => m.AndaluciaModule) },
{ path: 'extremadura', loadChildren: () => import('./extremadura/extremadura.module').then(m => m.ExtremaduraModule) },
{ path: 'castilla-leon', loadChildren: () => import('./castilla-leon/castilla-leon.module').then(m => m.CastillaLeonModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
