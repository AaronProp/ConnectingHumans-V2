import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResp,Sesion,Candidato,CatGenero, CatEstadoCivil, CatEscolaridad, Cliente, Laboratorio, UsuarioSistema, CatPaquete, catPermisos } from '../app/interfaces/global.interface'
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CentralDatosService {

  private _refresh$ = new Subject<void>();

  httpHeaders = new HttpHeaders({
    //'content-type': 'application/json',
    'Authorization': 'Bearer key',
    'token-api-ch': `${localStorage.getItem('token')}`
  })

  constructor(private http: HttpClient) { }
  urlBase: string = 'http://localhost:8080/';
  urlBaseWeb:string = 'http://localhost:4200/'
  sesionActual!:Sesion;


  get refresh$(){
    return this._refresh$
  }

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
  getCatPermisos(){
    return this.http.get<catPermisos[]>(`${this.urlBase}cat_permisos/_R`)
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
    return this.http.get<UsuarioSistema[]>(`${this.urlBase}usuario_sistema/As_R`,{headers:this.httpHeaders})
  }

  //POSTS CREAR
  postCandidato(nuevoCandidato:any): Observable<any>{
   return this.http.post<any>(`${this.urlBase}candidato/_C`,nuevoCandidato)
   .pipe(
     tap(()=>{
       this._refresh$.next();
     })
   )
  }

  postCliente(nuevoCliente:any): Observable<any>{
    return this.http.post<any>(`${this.urlBase}cliente/_C`,nuevoCliente)
    .pipe(
      tap(()=>{
        this._refresh$.next();
      })
    )
  }

  postLaboratorio(nuevoLaboratorio:any): Observable<any>{
    return this.http.post<any>(`${this.urlBase}laboratorio/_C`,nuevoLaboratorio)
    .pipe(
      tap(()=>{
        this._refresh$.next();
      })
    )
  }

  postUsrSis(nuevoUsr:any): Observable<any>{
    return this.http.post<any>(`${this.urlBase}usuario_sistema/_C`,nuevoUsr,{headers:this.httpHeaders})
    .pipe(
      tap(()=>{
        this._refresh$.next();
      })
    )
  }

  //POSTS DE EDITAR
  editarCandidato(candidato:any): Observable<any>{
    console.log(JSON.stringify(candidato))
    return this.http.post<any>(`${this.urlBase}candidato/_U`,candidato,{headers:this.httpHeaders})
  }

//POSTS DE ELIMINAR
eliminarCandidato(elimCandidato:any): Observable<any>{
  console.log(elimCandidato)
  return this.http.post<any>(`${this.urlBase}candidato/_D`,{"idUsuario": elimCandidato})
}

eliminarCliente(elimCliente:any): Observable<any>{
  console.log(elimCliente)
  return this.http.post<any>(`${this.urlBase}cliente/_D`,{"idUsuario": elimCliente})
}

eliminarUsuario(elimUsuario:any): Observable<any>{
  console.log(elimUsuario)
  return this.http.post<any>(`${this.urlBase}usuario_sistema/_D`,{"idUsuario": elimUsuario})
}

eliminarLab(elimLab:any): Observable<any>{
  console.log(elimLab)
  return this.http.post<any>(`${this.urlBase}laboratorio/_D`,{"idUsuario": elimLab})
}

//POSTS FUNCIONALES
  iniciarSesion(user:string,password:string){
    return this.http.post<AuthResp>(`${this.urlBase}autenticacion/login`,{"Usuario": `${user}`,"Password": `${password}`})
  }

  //Getters funcionales
  getSesiones(){
    return this.http.get<Sesion[]>(`${this.urlBase}sesiones/_R`)
  }
}

