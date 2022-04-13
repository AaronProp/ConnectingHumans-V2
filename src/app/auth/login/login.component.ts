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

  getSesiones(){
    return {...this._sesiones};
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
    let posAct = 0;

     this.servicio.getSesiones()
     .subscribe(resp => {
       this._sesiones = resp
       
       this._sesiones.forEach(element => {
        if(element.usuario == inputUsr && element.clave == inputPass){
          this._sesionAct = element;

        this.servicio.iniciarSesion(inputUsr,inputPass)
        .subscribe(resp => {
          if(resp.token == undefined){
            //Es necesario que lancemos un mensaje cuando la sesion no se haya podido iniciar
            //IDEA
            //Crear un alert dentro de un ngIf, con una bandera abajo hacemos que nunca se muestre,
            //luego si da error al iniciar sesion, entonces levantas la bandera logrando que se muestre el mensaje de error
            //despues con un setTimeOut de 5s vuelves a bajar la bandera y se ocultara
            console.log(resp.msg)
          }else{
            this._usuario = {
              usuario: resp.usuario!,
              token: resp.token! 
            }
            localStorage.setItem('token', `${resp.token}`);
            localStorage.setItem('user_name',`${resp.usuario}`);

            this.servicio.sesionActual = element;
            console.log(this.servicio.sesionActual)

            switch(element.idCatPermisos){
              case 1:
                this.router.navigateByUrl('/admin')
                break;
              case 2:
                this.router.navigateByUrl('/admin')
                break;
              case 3:
                this.router.navigateByUrl('/usuario')
                break;
              case 4:
                this.router.navigateByUrl('/cliente')
                break;
            }
          }
        })
        return;
         }else{
          posAct++
          if( posAct == this._sesiones.length){
            this.errInicioSesion = true
            setTimeout(this.cambioBandera,5000)
          }
         }
       });
     })
  }
}