import { Component } from '@angular/core';

@Component({
  selector: 'app-badajoz',
  templateUrl: './badajoz.component.html',
  styleUrls: ['./badajoz.component.css']
})
export class BadajozComponent {
  ciudades = [
    { nombre: 'Villanueva', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) },
    { nombre: 'Zafra', habitantes: Math.floor(Math.random() * 10000), superficie: Math.floor(Math.random() * 1000) }
  ];
}
