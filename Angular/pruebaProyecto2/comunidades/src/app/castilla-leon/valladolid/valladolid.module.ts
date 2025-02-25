import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValladolidRoutingModule } from './valladolid-routing.module';
import { ValladolidComponent } from './valladolid.component';


@NgModule({
  declarations: [
    ValladolidComponent
  ],
  imports: [
    CommonModule,
    ValladolidRoutingModule
  ]
})
export class ValladolidModule { }
