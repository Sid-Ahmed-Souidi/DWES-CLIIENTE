import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-listado-provincias',
  templateUrl: './listado-provincias.component.html',
  styleUrls: ['./listado-provincias.component.css']
})
export class ListadoProvinciasComponent implements OnInit {

  provincias: any[] = [];

  constructor(private apiService: ServiciosService) { }

  ngOnInit(): void {
    this.apiService.getProvincias().subscribe(data => {
      this.provincias = data;
    });
  }



}


