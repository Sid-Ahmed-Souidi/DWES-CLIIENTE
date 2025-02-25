import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuelvaComponent } from './huelva.component';

const routes: Routes = [{ path: '', component: HuelvaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuelvaRoutingModule { }
