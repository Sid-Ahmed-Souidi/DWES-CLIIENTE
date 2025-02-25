import { Component } from '@angular/core';

@Component({
  selector: 'app-caceres',
  templateUrl: './caceres.component.html',
  styleUrls: ['./caceres.component.css']
})
export class CaceresComponent {
  ciudades = [
    { nombre: 'Coria', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) },
    { nombre: 'Moraleja', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) }
  ];
}
