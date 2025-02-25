import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadajozComponent } from './badajoz.component';

const routes: Routes = [{ path: '', component: BadajozComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadajozRoutingModule { }
