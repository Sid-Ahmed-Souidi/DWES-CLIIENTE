import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  mensajeParaHijo1: string = '';
  mensajeDeHijo1: string = '';
  mensajeDeHijo2: string = '';
  mensajeParaHijo2: string = '';
  randomHijo1: number = 0;
  //recibir el valor mensjae que sale del hijo1

  recibirMensaje1(event: any) {
    this.mensajeDeHijo1 = event;
  }
  recibirMensaje2(event: any) {
    this.mensajeDeHijo2 = event;
  }

  recibirRandom(event: any) {
    this.randomHijo1 = event;
  }
}
