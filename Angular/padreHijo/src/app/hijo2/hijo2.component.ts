import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css'],
})
export class Hijo2Component {
  @Input()
  mensajeParaHijo2: string = '';
  mensjaeDeHIJO2ParaPadre: string = '';
  @Output()
  mensajeDeSalidaHijo2 = new EventEmitter();
  enviarMensjae() {
    this.mensajeDeSalidaHijo2.emit(this.mensjaeDeHIJO2ParaPadre);
  }
}
