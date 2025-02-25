import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
imagen: String ="";
width: number=0;
height: number=0;
numAleatorio: number=0;
temporizador1: any;
activado: boolean = false;

  generarImagenes(){
      if(!this.activado){
        this.activado=true;
      this.temporizador1=setInterval(()=>{
        this.numAleatorio= Math.ceil(Math.random()*4);
        this.imagen="assets/img/"+this.numAleatorio+".png";
        this.width= Math.ceil(Math.random()*300);
        this.height= Math.ceil(Math.random()*300);

      },1000)

    }else{
      this.activado = false;
      if (this.temporizador1) {
        clearInterval(this.temporizador1);
        this.temporizador1 = null;
      }

    }
    }


    // parar(){
    //   if(this.temporizador1){
    //     clearInterval(this.temporizador1);
    //     this.temporizador1= null;  
          
    //     }
    //   }

}
