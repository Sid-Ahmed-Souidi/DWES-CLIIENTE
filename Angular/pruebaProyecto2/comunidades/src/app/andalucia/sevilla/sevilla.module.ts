import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SevillaRoutingModule } from './sevilla-routing.module';
import { SevillaComponent } from './sevilla.component';


@NgModule({
  declarations: [
    SevillaComponent
  ],
  imports: [
    CommonModule,
    SevillaRoutingModule
  ]
})
export class SevillaModule { }
