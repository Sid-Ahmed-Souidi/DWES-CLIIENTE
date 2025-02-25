import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadajozRoutingModule } from './badajoz-routing.module';
import { BadajozComponent } from './badajoz.component';


@NgModule({
  declarations: [
    BadajozComponent
  ],
  imports: [
    CommonModule,
    BadajozRoutingModule
  ]
})
export class BadajozModule { }
