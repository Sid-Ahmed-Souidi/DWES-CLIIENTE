import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {
  usuario = {
    email: '',
    nombre: '',
    pwd: ''
  };

  constructor(private usuarioService: UsuarioService) {}

  onSubmit() {
    this.usuarioService.agregarUsuario(this.usuario).subscribe(response => {
      console.log('Usuario añadido', response);
      // Puedes añadir lógica adicional aquí, como redireccionar o mostrar un mensaje
    });
  }
}
