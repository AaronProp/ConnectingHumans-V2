import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CentralDatosService } from 'src/app/central-datos.service';
import { CatPaquete } from 'src/app/interfaces/global.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  urlAct = String(location.href)
  verAddCandidato = true;
  verAddCliente = true;
  verAddUsuario = true;
  verAddLab = true;
  constructor( private servicio:CentralDatosService, private fb:FormBuilder, private router:Router) {
    if(this.urlAct == "http://localhost:4200/usuario/clientes"){
      this.verAddCliente = false
    }
  }

  miFormulario:FormGroup = this.fb.group({
    idUsuario: [],
    idCliente: [],
    idCandidato: [],
    idLaboratorio: [],
    idUsuarioSistema:[],
    idPaquete: [,Validators.required],
    nombreEmpresa: [,Validators.required],
    nombre: [,Validators.required],
    apellidoPaterno: [,Validators.required],
    apellidoMaterno: [],
    telefono: [,Validators.required],
    telefonoAlternativo: [],
    correo: [],
    calle: [],
    numInterior: [],
    numExterior: [,Validators.required],
    calleCruza1: [],
    calleCruza2: [],
    estado: [,Validators.required],
    municipio: [,Validators.required],
    cp: [,Validators.required]
})

//Se recuperan los Cats para usarlos en los formularios
catPaquetes: CatPaquete[] = [];

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigateByUrl('/')
    }

    this.servicio.getCatPaquetes()
          .subscribe(resp => {
            this.catPaquetes = resp;
        }
      )
  }

  formularioValido(){
    return this.miFormulario.valid && this.miFormulario.touched
  }

  crearCliente(){
    if(this.miFormulario.invalid){
      console.log('Faltan campos por llenar')
    }else{
      this.servicio.postCliente(this.miFormulario.value).subscribe( res => (console.log(`Respuesta API -> ${res.msj}`)))
      console.log(this.miFormulario.value)
      //this.miFormulario.reset();
    }
  }

}
