import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

const routes: Routes = [
  { path: 'agregar-usuario', component: AgregarUsuarioComponent },
  { path: 'listado-usuarios', component: ListadoUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
