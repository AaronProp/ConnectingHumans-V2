import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CentralDatosService } from 'src/app/central-datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor( private servicio: CentralDatosService) { }

  ngOnInit() {
/* 
    this.servicio.getPaquetes()
    .subscribe(resp => console.log(resp))

    this.servicio.getSesiones()
    .subscribe(resp => console.log(resp))
*/
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

    this.servicio.iniciarSesion(inputUsr,inputPass)
    .subscribe(resp => {
      console.log(resp)
    })
  }
}

interface auth{
  usuario:string,
  token:string
}