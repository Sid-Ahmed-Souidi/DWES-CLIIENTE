import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalamancaRoutingModule } from './salamanca-routing.module';
import { SalamancaComponent } from './salamanca.component';


@NgModule({
  declarations: [
    SalamancaComponent
  ],
  imports: [
    CommonModule,
    SalamancaRoutingModule
  ]
})
export class SalamancaModule { }
