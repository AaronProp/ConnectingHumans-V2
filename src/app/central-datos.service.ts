import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResp,Sesion } from '../app/interfaces/global.interface'

@Injectable({
  providedIn: 'root'
})
export class CentralDatosService {

  constructor(private http: HttpClient) { }
  urlBase: string = 'http://localhost:8080/';

  sesionActual!:Sesion;
  

  getPaquetes(){
    return this.http.get(`${this.urlBase}paquete/_R`)
  }

  getSesiones(){
    return this.http.get<Sesion[]>(`${this.urlBase}sesiones/_R`)
  }

  iniciarSesion(user:string,password:string){
    return this.http.post<AuthResp>(`${this.urlBase}autenticacion/login`,{"Usuario": `${user}`,"Password": `${password}`})
  }
}

