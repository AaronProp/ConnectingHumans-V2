import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CentralDatosService } from 'src/app/central-datos.service';
import { AuthResp } from 'src/app/interfaces/global.interface'
import { Sesion } from '../../interfaces/global.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor( private servicio: CentralDatosService, private router:Router) { }
  _usuario!: AuthResp;
  _sesionAct!:Sesion;

  errInicioSesion:boolean = false;

  cambioBandera(){
    this.errInicioSesion = false;
    console.log(this.errInicioSesion)
    console.log("Cerrar mensaje de error")
  }

  ngOnInit() {}

  getUsuario(){
    return {...this._usuario};
  }

  getSesionAct(){
    return {...this._sesionAct};
  }

  usuarioValido():boolean{
    return this.loginForm?.controls["usuario"]?.touched && this.loginForm.controls["usuario"]?.invalid;
  }

  passValido():boolean{
    return this.loginForm?.controls["pass"]?.touched && this.loginForm.controls["pass"]?.invalid;
  }

  validForm(){
    return this.loginForm?.valid
  }

  iniciarSesion(){
    let inputUsr = this.loginForm?.controls["usuario"]?.value;
    let inputPass = this.loginForm?.controls["pass"]?.value;

        this.servicio.iniciarSesion(inputUsr,inputPass)
        .subscribe(resp => {
          if(resp.token == undefined){
            console.log(resp.msg)
            this.errInicioSesion = true
            setTimeout(this.cambioBandera,5000)
          }else{
            console.log(resp)
            this.servicio.sesionActual = resp;
            this._sesionAct = resp;

            localStorage.setItem('id',resp.id!)
            localStorage.setItem('usuario',resp.usuario!)
            localStorage.setItem('sesion',resp.sesion!)
            localStorage.setItem('cliente',resp.idCliente!)
            localStorage.setItem('candidato',resp.idCandidato!)
            localStorage.setItem('lab',resp.idLaboratorio!)
            localStorage.setItem('usr_sis',resp.idUsuarioSistema!)
            localStorage.setItem('permiso',resp.permiso!)
            localStorage.setItem('token',resp.token!)

            if(resp.idUsuarioSistema != null){
              this.router.navigate(['usuario/dashboard'])
            }else if (resp.idCandidato != null){
              this.router.navigate(['candidato/dashboard'])
            }else if (resp.idCliente != null){
              this.router.navigate(['cliente/dashboard'])
            }else if (resp.idLaboratorio != null){
              this.router.navigate(['laboratorio/dashboard'])
            }
          }
        })
  }
}