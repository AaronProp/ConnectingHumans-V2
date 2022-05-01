import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResp,Sesion,Candidato,CatGenero, CatEstadoCivil, CatEscolaridad, Cliente, Laboratorio, UsuarioSistema, CatPaquete } from '../app/interfaces/global.interface'

@Injectable({
  providedIn: 'root'
})
export class CentralDatosService {

  constructor(private http: HttpClient) { }
  urlBase: string = 'http://localhost:8080/';
  urlBaseWeb:string = 'http://localhost:4200/'
  sesionActual!:Sesion;

  // Getters de Catalogos
  getCatGenero(){
    return this.http.get<CatGenero[]>(`${this.urlBase}cat_genero/_R`)
  }

  getCatEstadoCivil(){
    return this.http.get<CatEstadoCivil[]>(`${this.urlBase}cat_estado_civil/_R`)
  }

  getCatEscolaridad(){
    return this.http.get<CatEscolaridad[]>(`${this.urlBase}cat_escolaridad/_R`)
  }

  getCatPaquetes(){
    return this.http.get<CatPaquete[]>(`${this.urlBase}paquete/_R`)
  }
  
  //Getters de tipos de usuarios
  getCandidatos(){
    return this.http.get<Candidato[]>(`${this.urlBase}candidato/As_R`)
  }

  getClientes(){
    return this.http.get<Cliente[]>(`${this.urlBase}cliente/As_R`)
  }

  getLaboratorios(){
    return this.http.get<Laboratorio[]>(`${this.urlBase}laboratorio/As_R`)
  }

  getUsuarios(){
    return this.http.get<UsuarioSistema[]>(`${this.urlBase}usuario_sistema/As_R`)
  }

  //POSTS CREAR
  postCandidato(nuevoCandidato:any){
    this.http.post<any>(`${this.urlBase}candidato/_C`,nuevoCandidato)
  }

  postCliente(nuevoCliente:any){
    this.http.post<any>(`${this.urlBase}cliente/_C`,nuevoCliente)
  }

  //POSTS DE EDITAR
  editarCandidato(nuevoCandidato:any){
    this.http.post<any>(`${this.urlBase}cliente/_U`,nuevoCandidato)
  }

  iniciarSesion(user:string,password:string){
    return this.http.post<AuthResp>(`${this.urlBase}autenticacion/login`,{"Usuario": `${user}`,"Password": `${password}`})
  }

  //Getters funcionales
  getSesiones(){
    return this.http.get<Sesion[]>(`${this.urlBase}sesiones/_R`)
  }
}

