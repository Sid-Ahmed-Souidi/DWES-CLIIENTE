import { Component } from '@angular/core';

@Component({
  selector: 'app-sevilla',
  templateUrl: './sevilla.component.html',
  styleUrls: ['./sevilla.component.css']
})
export class SevillaComponent {
  ciudades = [
    { nombre: 'Coria', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) },
    { nombre: 'Camas', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) }
  ];
}
