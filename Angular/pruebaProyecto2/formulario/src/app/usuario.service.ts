import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost/serviciosCliente';

  constructor(private http: HttpClient) {}

  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post(`http://localhost/serviciosCliente/insertarUsuario.php`, usuario);
  }

  obtenerUsuarios(): Observable<any> {
    return this.http.get(`http://localhost/serviciosCliente/listadoUsuarios.php`);
  }
}
