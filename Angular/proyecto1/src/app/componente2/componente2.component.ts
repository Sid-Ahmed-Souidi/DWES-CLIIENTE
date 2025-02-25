import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
contador: any;
intervalo: any;

//inicia el contador

reanudar(){
  if(!this.intervalo){
    this.intervalo = setInterval(() =>{
      this.contador++;
    }, 1000);
  }
}


//para el contador

parar(){
if(this.intervalo){
  clearInterval(this.intervalo);
  this.intervalo= null;  
    
  }
}

//resetea  el contador  0s

resetear(){
  this.parar();
  this.contador = 0;
}


}




