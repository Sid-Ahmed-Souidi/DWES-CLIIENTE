import { Component } from '@angular/core';

@Component({
  selector: 'app-huelva',
  templateUrl: './huelva.component.html',
  styleUrls: ['./huelva.component.css']
})
export class HuelvaComponent {
  ciudades = [
    { nombre: 'Aracena', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) },
    { nombre: 'Moguer', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) }
  ];
}
