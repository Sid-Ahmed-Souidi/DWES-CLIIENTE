import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalamancaComponent } from './salamanca.component';

const routes: Routes = [{ path: '', component: SalamancaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalamancaRoutingModule { }
