import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MchatModule } from './mchat/mchat.module';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SchatService {
  locale: string = 'es';

  constructor(private http: HttpClient) {}
  //servidor 1
  leerMensajes(): Observable<MchatModule[]> {
    return this.http.get<MchatModule[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php'
    );
  }

  escribirMensajes(message: MchatModule): Observable<MchatModule> {
    message.fecha = formatDate(Date.now(), 'HH:mm:ss / dd-MM-yy', this.locale);
    return this.http.post<MchatModule>(
      ' http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',
      message
    );
  }

  eliminarMensajesPorId(id: number) {
    return this.http.delete<MchatModule>(
      ' http://moralo.atwebpages.com/menuAjax/chat/BajaMensaje.php/?id=' + id
    );
  }
  eliminarTodo(): Observable<any> {
    return this.http.get<any>('  http://moralo.atwebpages.com/menuAjax/chat/truncate.php');
  }

  //servidor 2
  leerMensajes2(): Observable<MchatModule[]> {
    return this.http.get<MchatModule[]>(
      ' http://daw2025.atwebpages.com/chat/ObtenerMensajes.php'
    );
  }
  escribirMensajes2(message: MchatModule): Observable<MchatModule> {
    message.fecha = formatDate(Date.now(), 'HH:mm:ss / dd-MM-yy', this.locale);
    return this.http.post<MchatModule>(
      ' http://daw2025.atwebpages.com/chat/AltaMensaje.php',
      message
    );
  }
  eliminarMensajesPorId2(id: number) {
    return this.http.delete<MchatModule>(
      ' http://moralo.atwebpages.com/menuAjax/chat/BajaMensaje.php/?id=' + id
    );
  }
  eliminarTodo2(): Observable<any> {
    return this.http.get<any>(' http://daw2025.atwebpages.com/chat/truncate.php');
  }
  //servidor 3
  leerMensajes3(): Observable<MchatModule[]> {
    return this.http.get<MchatModule[]>(
      'http://camacho.atwebpages.com/chat/ObtenerMensajes.php'
    );
  }
  escribirMensajes3(message: MchatModule): Observable<MchatModule> {
    message.fecha = formatDate(Date.now(), 'HH:mm:ss / dd-MM-yy', this.locale);
    return this.http.post<MchatModule>(
      ' http://camacho.atwebpages.com/chat/AltaMensaje.php',
      message
    );
  }
  eliminarMensajesPorId3(id: number) {
    return this.http.delete<MchatModule>(
      ' http://camacho.atwebpages.com/chat/EliminarMensaje.php/?id=' + id
    );
  }
  eliminarTodo3(): Observable<any> {
    return this.http.get<any>('http://camacho.atwebpages.com/chat/truncate.php');
  }
}
