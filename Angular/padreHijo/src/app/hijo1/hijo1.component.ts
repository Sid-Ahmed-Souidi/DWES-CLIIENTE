import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css'],
})
export class Hijo1Component {
  @Input()
  mensajeParaHijo1: string = '';
  mensjaeDeHIJO1ParaPadre: string = '';
  numRAndom: number = 0;

  @Output()
  mensajeDeSalidaHijo1 = new EventEmitter();

  @Output()
  mensajeDeSalidaHijo1Random = new EventEmitter();

  enviarMensjae() {
    this.mensajeDeSalidaHijo1.emit(this.mensjaeDeHIJO1ParaPadre);
  }
  enviarNumeroRandom() {
    this.mensajeDeSalidaHijo1Random.emit(this.numRAndom);
  }

  generarNUmRandom() {
    this.numRAndom = Math.floor(Math.random() * 100);
  }
}
