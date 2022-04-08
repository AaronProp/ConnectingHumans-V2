import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //Atributos de Clase
  user_name:string;

  constructor(private router:Router) {
    //Obteneniendo el nombre del usuario
    this.user_name = String(localStorage.getItem('user_name'))
   }

  ngOnInit(): void {

  }

  cerrarSesion(){
    //Eliminando variables de sesion que no estan en el local sesion
    localStorage.removeItem('user_name');
    localStorage.removeItem('token');
    //Redireccionando
    this.router.navigateByUrl('/')
  }

}
