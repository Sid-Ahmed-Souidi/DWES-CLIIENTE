import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-listado-mensajes',
  templateUrl: './listado-mensajes.component.html',
  styleUrls: ['./listado-mensajes.component.css']
})
export class ListadoMensajesComponent implements OnInit {


  mensajes: any[] = [];

  constructor(private apiService: ServiciosService) { }

  ngOnInit(): void {
    this.apiService.getMensajes().subscribe(data => {
      this.mensajes = data;
    });
  }
}

