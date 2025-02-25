import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvilaRoutingModule } from './avila-routing.module';
import { AvilaComponent } from './avila.component';


@NgModule({
  declarations: [
    AvilaComponent
  ],
  imports: [
    CommonModule,
    AvilaRoutingModule
  ]
})
export class AvilaModule { }
