import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaceresComponent } from './caceres.component';

const routes: Routes = [{ path: '', component: CaceresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaceresRoutingModule { }
