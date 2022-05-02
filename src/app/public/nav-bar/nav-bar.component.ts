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
  usuarioActual:any;
  permiso:string;


  constructor(private router:Router, private servicio:CentralDatosService) {
    //Obteneniendo el nombre del usuario
    this.user_name = String(localStorage.getItem('usuario'))
    this.usuarioActual = this.servicio.sesionActual;
    this.permiso = String(localStorage.getItem('permiso'))
   }

  ngOnInit(): void {}

   usr_sis = localStorage.getItem('usr_sis');
   usr_candidato = localStorage.getItem('candidato');
   usr_cliente = localStorage.getItem('cliente');
   usr_lab = localStorage.getItem('lab');
   sesion = localStorage.getItem('sesion');


  cerrarSesion(){
    //Eliminando variables de sesion que no estan en el local sesion
    localStorage.removeItem('idUsr');
    localStorage.removeItem('usuario');
    localStorage.removeItem('sesion');
    localStorage.removeItem('cliente');
    localStorage.removeItem('candidato');
    localStorage.removeItem('lab');
    localStorage.removeItem('usr_sis');
    localStorage.removeItem('token');
    //Redireccionando
    this.router.navigateByUrl('/')
  }

  irInicio(){
    if(this.usr_sis != null){
      this.router.navigate(['usuario/dashboard'])
    }else if (this.usr_candidato != null){
      this.router.navigate(['candidato/dashboard'])
    }else if (this.usr_cliente != null){
      this.router.navigate(['cliente/dashboard'])
    }else if (this.usr_lab != null){
      this.router.navigate(['laboratorio/dashboard'])
    }
  }
  rutaCandidatos(){
      if(this.usr_sis != null){
        this.router.navigate(['usuario/candidatos']);
      }
    }
  rutaClientes(){
    if(this.usr_sis != null){
      this.router.navigate(['usuario/clientes']);
    }
  }
  rutaUsuarios(){
    if(this.usr_sis != null){
      this.router.navigate(['usuario/usuarios']);
    }
  }
  rutaLabs(){
    if(this.usr_sis != null){
      this.router.navigate(['usuario/laboratorios']);
    }
  }

}
