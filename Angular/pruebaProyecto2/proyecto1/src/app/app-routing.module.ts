import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListadoProvinciasComponent } from './listado-provincias/listado-provincias.component';
import { ListadoAlturasComponent } from './listado-alturas/listado-alturas.component';
import { ListadoMensajesComponent } from './listado-mensajes/listado-mensajes.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'provincias', component: ListadoProvinciasComponent },
  { path: 'alturas', component: ListadoAlturasComponent },
  { path: 'mensajes', component: ListadoMensajesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
