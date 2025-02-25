import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

  // colores = ['red', 'green', 'blue', 'yellow', 'white'];
  // color: string[] = [];
  // ngOnInit(): void {
  //   this.color[1] =
  //     this.colores[Math.floor(Math.random() * this.colores.length)];
  //   this.color[2] =
  //     this.colores[Math.floor(Math.random() * this.colores.length)];
  //   this.color[3] =
  //     this.colores[Math.floor(Math.random() * this.colores.length)];
  //   this.color[4] =
  //     this.colores[Math.floor(Math.random() * this.colores.length)];
  // }

  // btn1() {
  //   const colorRandom =
  //     this.colores[Math.floor(Math.random() * this.colores.length)];
  //   this.color[1] = colorRandom;
  //   this.color[2] = colorRandom;
  //   this.color[3] = colorRandom;
  //   this.color[4] = colorRandom;
  // }
  colores = ['red', 'green', 'blue', 'yellow', 'white'];
  color: string = 'white';  // Usamos una sola variable de color

  ngOnInit(): void {
    this.cambiarColorAleatorio();  // Inicializamos con un color aleatorio
  }

  cambiarColorAleatorio() {
    this.color = this.colores[Math.floor(Math.random() * this.colores.length)];
  }


}
