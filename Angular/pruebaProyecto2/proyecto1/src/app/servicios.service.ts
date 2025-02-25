import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {


  constructor(private http: HttpClient) { }

  getProvincias(): Observable<any> {
    return this.http.get(`http://localhost/serviciosCliente/listadoProvincias.php`);
  }

  getAlturas(): Observable<any> {
    return this.http.get(`http://localhost/serviciosCliente/listadoAlturas.php`);
  }

  getMensajes(): Observable<any> {
    return this.http.get(`http://localhost/serviciosAdmin/listadoTodosMensajes.php`);
  }
}



