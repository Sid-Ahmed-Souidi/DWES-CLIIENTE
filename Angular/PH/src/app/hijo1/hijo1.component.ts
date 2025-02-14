import { Component, EventEmitter, INJECTOR, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {

numero:number=0;

enviarMensaje() {

  this.mensajeDeSalidaPadreHijo1.emit({mensaje:this.mensajeDeHijoParaPadre});
}

generarNumero() :void{
  this.numero=Math.floor(Math.random()*100);
}





enviarRandom() {
  this.mensajeDeSalidaPadreHijoR.emit({mensaje:this.mensajeDeHijoParaPadre});
}


@Input()
mensajeParaHijo1: string="";
@Output()
mensajeDeSalidaPadreHijo1 = new EventEmitter();


mensajeDeSalidaPadreHijoR = new EventEmitter();

mensajeDeHijoParaPadre: any;
}
