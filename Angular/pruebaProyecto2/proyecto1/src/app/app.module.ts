import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProvinciasComponent } from './listado-provincias/listado-provincias.component';
import { ListadoAlturasComponent } from './listado-alturas/listado-alturas.component';
import { ListadoMensajesComponent } from './listado-mensajes/listado-mensajes.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListadoProvinciasComponent,
    ListadoAlturasComponent,
    ListadoMensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
