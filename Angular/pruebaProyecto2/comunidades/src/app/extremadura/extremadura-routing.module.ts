import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtremaduraComponent } from './extremadura.component';

const routes: Routes = [{ path: '', component: ExtremaduraComponent }, { path: 'caceres', loadChildren: () => import('./caceres/caceres.module').then(m => m.CaceresModule) }, { path: 'badajoz', loadChildren: () => import('./badajoz/badajoz.module').then(m => m.BadajozModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtremaduraRoutingModule { }
