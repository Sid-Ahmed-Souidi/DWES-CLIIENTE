import { Component } from '@angular/core';

@Component({
  selector: 'app-valladolid',
  templateUrl: './valladolid.component.html',
  styleUrls: ['./valladolid.component.css']
})
export class ValladolidComponent {
  ciudades = [
    { nombre: 'Dueñas', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) },
    { nombre: 'Arroyo', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) }
  ];
}
