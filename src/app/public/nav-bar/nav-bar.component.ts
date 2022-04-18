import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentralDatosService } from 'src/app/central-datos.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //Atributos de Clase
  user_name:string;

  constructor(private router:Router, private servicio:CentralDatosService) {
    //Obteneniendo el nombre del usuario
    this.user_name = String(localStorage.getItem('user_name'))
   }

  ngOnInit(): void {

  }
  usuarioActual = this.servicio.sesionActual;

  cerrarSesion(){
    //Eliminando variables de sesion que no estan en el local sesion
    localStorage.removeItem('user_name');
    localStorage.removeItem('token');
    //Redireccionando
    this.router.navigateByUrl('/')
  }

  rutaCandidatos(){
    switch(this.servicio.sesionActual.idCatPermisos){
      case 1:
        this.router.navigate(['admin/candidatos'])
      break;
      case 2:
        this.router.navigate(['admin/candidatos'])
      break;
      case 3:
        this.router.navigate(['usuario/candidatos'])
      break;
      case 4:
        this.router.navigate(['cliente/candidatos'])
      break;
    }
  }
  rutaClientes(){
    switch(this.servicio.sesionActual.idCatPermisos){
      case 1:
        this.router.navigate(['admin/clientes'])
      break;
      case 2:
        this.router.navigate(['admin/clientes'])
      break;
      case 3:
        this.router.navigate(['usuario/clientes'])
      break;
      case 4:
        this.router.navigate(['cliente/clientes'])
      break;
    }
  }
  rutaUsuarios(){
    switch(this.servicio.sesionActual.idCatPermisos){
      case 1:
        this.router.navigate(['admin/usuarios'])
      break;
      case 2:
        this.router.navigate(['admin/usuarios'])
      break;
      case 3:
        this.router.navigate(['usuario/usuarios'])
      break;
      case 4:
        this.router.navigate(['cliente/usuarios'])
      break;
    }
  }
  rutaLabs(){
    switch(this.servicio.sesionActual.idCatPermisos){
      case 1:
        this.router.navigate(['admin/laboratorios'])
      break;
      case 2:
        this.router.navigate(['admin/laboratorios'])
      break;
      case 3:
        this.router.navigate(['usuario/laboratorios'])
      break;
      case 4:
        this.router.navigate(['cliente/laboratorios'])
      break;
    }
  }

}
