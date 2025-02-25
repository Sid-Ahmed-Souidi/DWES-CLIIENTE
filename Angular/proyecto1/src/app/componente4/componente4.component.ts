import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {
  numeros: number[] = [];
    indiceEditando: number | null = null;  // índice del número en edición
  numeroTemporal: number | null = null;  // valor temporal para el input
  constructor() {
    this.generarNumerosAleatorios();
  }

  generarNumerosAleatorios() {
    this.numeros = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
  }

  agregarNumero() {
    const nuevoNumero = Math.floor(Math.random() * 100) + 1;
    this.numeros.push(nuevoNumero);
  }



  modificarNumero(index: number) {
    const nuevoValor = Math.floor(Math.random() * 100) + 1;
    this.numeros[index] = nuevoValor;
  }

  eliminarNumero(index: number) {
    this.numeros.splice(index, 1);
  }




  // Al hacer clic en "Modificar"
  editarNumero(index: number): void {
    this.indiceEditando = index; // Marca el índice que se está editando
    this.numeroTemporal = this.numeros[index];  // Guarda el valor actual en numeroTempora
  }

  // Al salir del input o presionar Enter, se guarda el valor automáticamente
    // Cuando el usuario confirma el cambio (Enter o perder foco)
  guardarNumero(): void {
    if (this.indiceEditando !== null && this.numeroTemporal !== null) {
      this.numeros[this.indiceEditando] = this.numeroTemporal;// Actualiza el array
      this.indiceEditando = null; // Sale del modo edición
      this.numeroTemporal = null; // Resetea el valor temporal
    }
  }

}
