import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AndaluciaRoutingModule } from './andalucia-routing.module';
import { AndaluciaComponent } from './andalucia.component';


@NgModule({
  declarations: [
    AndaluciaComponent
  ],
  imports: [
    CommonModule,
    AndaluciaRoutingModule
  ]
})
export class AndaluciaModule { }
