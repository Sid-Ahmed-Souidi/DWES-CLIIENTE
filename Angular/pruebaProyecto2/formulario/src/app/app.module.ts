import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Para hacer solicitudes HTTP

AppRoutingModule
@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule ,FormsModule ,AppRoutingModule ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
