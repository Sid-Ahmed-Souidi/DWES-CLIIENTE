import { Component } from '@angular/core';

@Component({
  selector: 'app-salamanca',
  templateUrl: './salamanca.component.html',
  styleUrls: ['./salamanca.component.css']
})
export class SalamancaComponent {
  ciudades = [
    { nombre: 'Bejar', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) },
    { nombre: 'Peñaranda', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) }
  ];
}
