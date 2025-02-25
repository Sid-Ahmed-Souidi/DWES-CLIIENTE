import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SevillaComponent } from './sevilla.component';

const routes: Routes = [{ path: '', component: SevillaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevillaRoutingModule { }
