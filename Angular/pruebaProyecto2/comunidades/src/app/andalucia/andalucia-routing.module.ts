import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaComponent } from './andalucia.component';

const routes: Routes = [{ path: '', component: AndaluciaComponent }, {
path: 'huelva', loadChildren: () => import('./huelva/huelva.module').then(m => m.HuelvaModule) },
 { path: 'sevilla', loadChildren: () => import('./sevilla/sevilla.module').then(m => m.SevillaModule) },
 { path: 'cadiz', loadChildren: () => import('./cadiz/cadiz.module').then(m => m.CadizModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AndaluciaRoutingModule { }
