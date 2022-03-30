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
  _sesiones!:Sesion[];
  _sesionAct!:Sesion;

  ngOnInit() {
/* 
    this.servicio.getPaquetes()
    .subscribe(resp => console.log(resp))
*/
  }

  getUsuario(){
    return {...this._usuario};
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

  guardar(){
    let inputUsr = this.loginForm?.controls["usuario"]?.value;
    let inputPass = this.loginForm?.controls["pass"]?.value;

    this.servicio.getSesiones()
    .subscribe(resp => {
      this._sesiones = resp
    })

    this.servicio.iniciarSesion(inputUsr,inputPass)
    .subscribe(resp => {
      if(resp.token == undefined){
        console.log(resp.msg)
      }else{
        console.log("Ok")
        this._usuario = {
          usuario: resp.usuario!,
          token: resp.token! 
        }
        localStorage.setItem(`${resp.usuario}`, `${resp.token}`);
        this.router.navigateByUrl('/admin')
        console.log(this._usuario)
      }
    })
  }
}