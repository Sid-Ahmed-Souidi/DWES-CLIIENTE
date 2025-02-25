import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadizRoutingModule } from './cadiz-routing.module';
import { CadizComponent } from './cadiz.component';


@NgModule({
  declarations: [
    CadizComponent
  ],
  imports: [
    CommonModule,
    CadizRoutingModule
  ]
})
export class CadizModule { }
