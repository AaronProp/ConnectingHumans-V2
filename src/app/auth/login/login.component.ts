import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm!: NgForm;

  url: string = 'localhost:8080/sesiones/_R';
  resp:any=[];
  error=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
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
    this.http.get("localhost:8080/sesiones/_R").subscribe(data => {
      this.resp = data
      console.log(data);
    });
    console.log(this.resp);
  }
}
