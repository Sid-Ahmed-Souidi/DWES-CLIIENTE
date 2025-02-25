import { Component } from '@angular/core';

@Component({
  selector: 'app-cadiz',
  templateUrl: './cadiz.component.html',
  styleUrls: ['./cadiz.component.css']
})
export class CadizComponent {

  ciudades = [
    { nombre: 'Puerto', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) },
    { nombre: 'Jerez', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) }
  ];


}
