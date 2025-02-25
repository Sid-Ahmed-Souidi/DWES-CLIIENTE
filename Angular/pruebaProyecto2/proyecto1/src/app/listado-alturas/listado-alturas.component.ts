import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-listado-alturas',
  templateUrl: './listado-alturas.component.html',
  styleUrls: ['./listado-alturas.component.css']
})
export class ListadoAlturasComponent implements OnInit{


  alturas: any[] = [];

  constructor(private apiService: ServiciosService) { }

  ngOnInit(): void {
    this.apiService.getAlturas().subscribe(data => {
      this.alturas = data;
    });
  }


}
