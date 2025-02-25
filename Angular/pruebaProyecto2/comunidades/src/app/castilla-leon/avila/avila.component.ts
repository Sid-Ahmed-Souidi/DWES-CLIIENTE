import { Component } from '@angular/core';

@Component({
  selector: 'app-avila',
  templateUrl: './avila.component.html',
  styleUrls: ['./avila.component.css']
})
export class AvilaComponent {

  ciudades = [
    { nombre: 'Piedrahita', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) },
    { nombre: 'Hoyos', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) }
  ];

}
