import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadizComponent } from './cadiz.component';

const routes: Routes = [{ path: '', component: CadizComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadizRoutingModule { }
