import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MchatModule } from '../mchat/mchat.module';
import { SchatService } from '../schat.service';

@Component({
  selector: 'app-cchat',
  templateUrl: './cchat.component.html',
  styleUrls: ['./cchat.component.css'],
})
export class CchatComponent {
  textoBotonS1: string = 'Servidor 1';
  textoBotonS2: string = 'Servidor 2';
  textoBotonS3: string = 'Servidor 3';
  activo1: boolean = false;
  activo2: boolean = false;
  activo3: boolean = false;
  borrarTodo() {
    throw new Error('Method not implemented.');
  }

  opcion: number = 0;

  elegirServ1() {
    this.textoBotonS2='Servidor 2';
    this.textoBotonS3='Servidor 3';
    this.activo1 = !this.activo1; 
    this.textoBotonS1 = this.activo1 ? 'Servidor 1' : 'selecionado';
    this.opcion = 1;
  }
  elegirServ2() {
    this.textoBotonS3='Servidor 3';
    this.textoBotonS1='Servidor 1';
    this.activo2 = !this.activo2; 
    this.textoBotonS2 = this.activo2 ? 'Servidor 2' : 'selecionado';
    this.opcion = 2;
  }
  elegirServ3() {
    this.textoBotonS1='Servidor 1';
    this.textoBotonS2='Servidor 2';
    this.activo3 = !this.activo3; 
    this.textoBotonS3 = this.activo3 ? 'Servidor 3' : 'selecionado';
    this.opcion = 3;
  }

  mensjaes: MchatModule[] = [];
  mens!: MchatModule;


  mens2!: MchatModule;

  
  mens3!: MchatModule;

  constructor(private http: SchatService) {}

  mensajeSeleccionado: MchatModule = {
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
  };
  leerMensajes() {
    this.mensjaes = [];
    switch (this.opcion) {
      case 1:
        this.http.leerMensajes().subscribe((mensaje: MchatModule[]) => {
          this.mensjaes = mensaje;
        });
        break;
      case 2:
        this.http.leerMensajes2().subscribe((mensaje: MchatModule[]) => {
          this.mensjaes = mensaje;
        });
        break;

      case 3:
        this.http.leerMensajes3().subscribe((mensaje: MchatModule[]) => {
          this.mensjaes = mensaje;
        });
        break;
      default:
        this.http.leerMensajes().subscribe((mensaje: MchatModule[]) => {
          this.mensjaes = mensaje;
        });
        break;
    }
  }

  escribirMensajes(form: { value: MchatModule }) {
    switch (this.opcion) {
      case 1:
        this.http
          .escribirMensajes(form.value)
          .subscribe((mensaje: MchatModule) => {
            this.mens = mensaje;
          });
        break;
      case 2:
        this.http
          .escribirMensajes2(form.value)
          .subscribe((mensaje: MchatModule) => {
            this.mens = mensaje;
          });
        break;

      case 3:
        this.http
          .escribirMensajes3(form.value)
          .subscribe((mensaje: MchatModule) => {
            this.mens = mensaje;
          });
        break;
      default:
        this.http
          .escribirMensajes(form.value)
          .subscribe((mensaje: MchatModule) => {
            this.mens = mensaje;
          });

        break;
    }
  }

  eliminarPorId(id: number) {
    switch (this.opcion) {
      case 1:
        this.http.eliminarMensajesPorId(id).subscribe((x: MchatModule) => {
          this.mens = x;
        });
        break;
      case 2:
        this.http.eliminarMensajesPorId2(id).subscribe((x: MchatModule) => {
          this.mens = x;
        });
        break;

      case 3:
        this.http.eliminarMensajesPorId3(id).subscribe((x: MchatModule) => {
          this.mens = x;
        });
        break;
      default:
        this.http.eliminarMensajesPorId(id).subscribe((x: MchatModule) => {
          this.mens = x;
        });
        break;
    }
  }

  eliminarTodo() {
    switch (this.opcion) {
      case 1:
        this.http.eliminarTodo().subscribe((x: MchatModule) => {
          this.mens = x;
          this.http.leerMensajes().subscribe((mensaje: MchatModule[]) => {
            this.mensjaes = mensaje;
          })
        });
        break;
      case 2:
        this.http.eliminarTodo2().subscribe((x: MchatModule) => {
          this.mens = x;
        });
        break;
      case 3:
        this.http.eliminarTodo3().subscribe((x: MchatModule) => {
          this.mens = x;
        });
        break;
      default:
        this.http.eliminarTodo().subscribe((x: MchatModule) => {
          this.mens = x;
        });
        break;
    }
  }
}
