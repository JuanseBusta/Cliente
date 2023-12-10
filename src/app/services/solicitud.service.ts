import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url = 'http://localhost:4000/api/solicitud/';

  constructor(private http:HttpClient) { }
  getSolicitudes(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarSolicitud(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarSolicitud(solicitud: Solicitud): Observable<any>{
    return this.http.post(this.url, solicitud)
  }

  obtenerSolicitud(id: string): Observable<any>{
    return this.http.get(this.url+id);
  }

  editarSolicitud(id: string, solicitud: Solicitud): Observable<any>{
    return this.http.put(this.url+id, solicitud);
  }
}
