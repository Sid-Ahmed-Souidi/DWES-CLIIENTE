import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuelvaRoutingModule } from './huelva-routing.module';
import { HuelvaComponent } from './huelva.component';


@NgModule({
  declarations: [
    HuelvaComponent
  ],
  imports: [
    CommonModule,
    HuelvaRoutingModule
  ]
})
export class HuelvaModule { }
