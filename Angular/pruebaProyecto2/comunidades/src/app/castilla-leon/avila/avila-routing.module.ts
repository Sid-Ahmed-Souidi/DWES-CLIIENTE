import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvilaComponent } from './avila.component';

const routes: Routes = [{ path: '', component: AvilaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvilaRoutingModule { }
