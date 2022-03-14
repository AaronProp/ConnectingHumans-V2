import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentralDatosService {

  constructor(private http: HttpClient) { }
  urlBase: string = 'http://localhost:8080/';
  

  getPaquetes(){
    return this.http.get(`${this.urlBase}paquete/_R`)
  }

  getSesiones(){
    return this.http.get(`${this.urlBase}sesiones/_R`)
  }

  iniciarSesion(user:string,password:string){
    return this.http.post(`${this.urlBase}autenticacion/login`,{"Usuario": `${user}`,"Password": `${password}`})
  }
}

