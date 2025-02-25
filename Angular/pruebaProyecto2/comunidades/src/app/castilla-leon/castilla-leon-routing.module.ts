import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastillaLeonComponent } from './castilla-leon.component';

const routes: Routes = [{ path: '', component: CastillaLeonComponent }, { path: 'salamanca', loadChildren: () => import('./salamanca/salamanca.module').then(m => m.SalamancaModule) }, { path: 'avila', loadChildren: () => import('./avila/avila.module').then(m => m.AvilaModule) }, { path: 'valladolid', loadChildren: () => import('./valladolid/valladolid.module').then(m => m.ValladolidModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CastillaLeonRoutingModule { }
