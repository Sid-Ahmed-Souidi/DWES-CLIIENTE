import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
actulizarRandom($event: Event) {
throw new Error('Method not implemented.');
}
actualizarMensajedeHijo1(event:Event) {
this.mensajeParaHijo1=event;
}
mensajeParaHijo1:string="";
mensajeDeHijo1:string="";
mensajeParaHijo2:string="";


//recibir el valor mensaje que sale hijo1


}
