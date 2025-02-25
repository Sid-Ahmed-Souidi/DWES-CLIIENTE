import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaceresRoutingModule } from './caceres-routing.module';
import { CaceresComponent } from './caceres.component';


@NgModule({
  declarations: [
    CaceresComponent
  ],
  imports: [
    CommonModule,
    CaceresRoutingModule
  ]
})
export class CaceresModule { }
