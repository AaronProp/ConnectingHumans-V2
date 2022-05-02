import { Component, OnInit } from '@angular/core';
import { CentralDatosService } from 'src/app/central-datos.service';
import { CatGenero, CatEstadoCivil, CatEscolaridad } from 'src/app/interfaces/global.interface'
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla-info',
  templateUrl: './tabla-info.component.html',
  styleUrls: ['./tabla-info.component.css']
})
export class TablaInfoComponent implements OnInit {

  suscription!:Subscription;
  page!:number; // Paginacion en la tabla

  urlAct = String(location.href)
  registros!:any[];
  usuarioSeleccionado!: any;

  catGenero: CatGenero[] = [];
  catEstadoCivil:CatEstadoCivil[] = [];
  catEscolaridad:CatEscolaridad[] = [];

  
  constructor( private servicio:CentralDatosService) {

    //DATOS DE CANDIDATOS ASIGNADOS a usuarioSeleccionado
   if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/candidatos`){
    this.usuarioSeleccionado = 
    {
      idUsuario: 0,
      idCliente: 0,
      idCandidato: 0,
      idLaboratorio: null,
      idUsuarioSistema: 0,
      fechaNacimiento: '',
      lugarNacimiento: '',
      genero: '',
      estadoCivil: '',
      edad: 0,
      gradoMaxEstudios: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      telefonoAlternativo: '',
      correo: '',
      calle: '',
      numInterior: 0,
      numExterior: 0,
      calleCruza1: '',
      calleCruza2: '',
      estado: '',
      municipio: '',
      cp: '',
      estatus: 0,
      tieneHistorialAcademico: 0,
      idAntecedentesSociales: 0,
      idReferenciasPersonales: null,
      tieneAntecedentesLaborales: 0,
      idInvestigacionLegal: 0,
      tieneTrabajosNoMencionados: 0
  };
    }

   if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/clientes`){
    this.usuarioSeleccionado = 
    {
        idUsuario: 0,
        idCliente: 0,
        nombreEmpresa: "",
        nombre_paquete: "",
        descripcion_paquete: "",
        precio_paquete: 0,
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        telefono: "",
        telefonoAlternativo: "",
        correo: "",
        calle: "",
        numInterior: 0,
        numExterior: 0,
        calleCruza1: "",
        calleCruza2: "",
        estado: "",
        municipio: "",
        cp: "",
        estatus: 0
  };
   }

   if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/laboratorios`){
    this.usuarioSeleccionado = 
    {
        idUsuario: 0,
        idLaboratorio: 0,
        nombreEmpresa: "",
        cedula: "",
        firma: "",
        encabezado: 0,
        pieDePagina: "",
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        telefono: "",
        telefonoAlternativo: "",
        correo: "",
        calle: "",
        numInterior: 0,
        numExterior: 0,
        calleCruza1: "",
        calleCruza2: "",
        estado: "",
        municipio: "",
        cp: "",
        estatus: 0
  };
   }

   if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/usuarios`){
    this.usuarioSeleccionado = 
    {
      idUsuario: 0,
      idUsuarioSistema: 0,
      idPermiso: 0,
      nombre_permiso: '',
      descripcion: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      telefonoAlternativo: '',
      correo: '',
      calle: '',
      numInterior: 0,
      numExterior: 0,
      calleCruza1: '',
      calleCruza2: '',
      estado: '',
      municipio: '',
      cp: 0,
      estatus: 0
  };
   }
 }

  
  ngOnInit() {
//Inicializacion del arreglo para mostrar los datos en la tabla
    if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/candidatos`){
        this.servicio.getCandidatos()
          .subscribe(resp => {
            this.registros = resp;
        }
      )
    }else if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/clientes`){
      this.servicio.getClientes()
          .subscribe(resp => {
            this.registros = resp;
        }
      )
    }else if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/laboratorios`){
      this.servicio.getLaboratorios()
          .subscribe(resp => {
            this.registros = resp;
        }
      )
    }
    else if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/usuarios`){
      this.servicio.getUsuarios()
          .subscribe(resp => {
            this.registros = resp;
        }
      )
    }

    //Observable del arreglo para actualizar los datos en la tabla
    this.suscription = this.servicio.refresh$.subscribe(()=>{
      if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/candidatos`){
        this.servicio.getCandidatos()
          .subscribe(resp => {
            this.registros = resp;
        }
      )
    }else if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/clientes`){
      this.servicio.getClientes()
          .subscribe(resp => {
            this.registros = resp;
        }
      )
    }else if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/laboratorios`){
      this.servicio.getLaboratorios()
          .subscribe(resp => {
            this.registros = resp;
        }
      )
    }
    else if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/usuarios`){
      this.servicio.getUsuarios()
          .subscribe(resp => {
            this.registros = resp;
        }
      )
    }
        
    })

    //Recuperacion de catalogos para formularios
    this.servicio.getCatGenero()
          .subscribe(resp => {
            this.catGenero = resp;
        }
      )

      this.servicio.getCatEstadoCivil()
          .subscribe(resp => {
            this.catEstadoCivil = resp;
        }
      )

      this.servicio.getCatEscolaridad()
          .subscribe(resp => {
            this.catEscolaridad = resp;
        }
      )
  }


//DETALLES REGISTROS
   detRegistro(registro:any){
    this.usuarioSeleccionado = registro;
   }


   //EDITAR REGISTRO
   editRegistro(registro:any){
     this.usuarioSeleccionado= registro;
   }

   //EDITAR REGISTROS
   editarRegistro(){
     if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/candidatos`){
      //console.log(`Candidato seleccionado ->`,this.usuarioSeleccionado)
      //ARMAR EL OBJETO CON ESTE FORMATO EN EL SERVICIO, OMITIENDO LOS DATOS INNECESARIOS
      this.servicio.editarCandidato(this.usuarioSeleccionado).subscribe(res => (console.log(res.msj)))
     }
  }


  //ELIMINAR REGISTROS
  elimRegistro(registro:any){
    this.usuarioSeleccionado = registro;
    console.log(this.usuarioSeleccionado)
  }

  elimRegistroModal(){
    if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/candidatos`){
      this.servicio.eliminarCandidato(this.usuarioSeleccionado.idUsuario).subscribe( res => ( console.log(res.msj)) )
     }
     if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/clientes`){
      this.servicio.eliminarCliente(this.usuarioSeleccionado.idUsuario).subscribe( res => ( console.log(res.msj)) )
    }
    if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/usuarios`){
      this.servicio.eliminarUsuario(this.usuarioSeleccionado.idUsuario).subscribe( res => ( console.log(res.msj)) )
    }
    if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/laboratorios`){
      this.servicio.eliminarLab(this.usuarioSeleccionado.idUsuario).subscribe( res => ( console.log(res.msj)) )
    }
    
  }

}