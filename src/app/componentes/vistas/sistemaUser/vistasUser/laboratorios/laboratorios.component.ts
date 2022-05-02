import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CentralDatosService } from 'src/app/central-datos.service';
import { Cliente, UsuarioSistema } from 'src/app/interfaces/global.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.css']
})
export class LaboratoriosComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
        idCliente: ["17",Validators.required],
        idCandidato: ["5",Validators.required],
        idUsuarioSistema:[1,Validators.required],
        idUsuario: [,Validators.required],
        idLaboratorio: [,Validators.required],
        nombreEmpresa: [,Validators.required],
        cedula: [,Validators.required],
        firma: [,Validators.required],
        encabezado: [0,Validators.required],
        pieDePagina: [,Validators.required],
        nombre: [,Validators.required],
        apellidoPaterno: [,Validators.required],
        apellidoMaterno: [,Validators.required],
        telefono: [,Validators.required],
        telefonoAlternativo: [,Validators.required],
        correo: [,Validators.required],
        calle: [,Validators.required],
        numInterior: [,Validators.required],
        numExterior: [,Validators.required],
        calleCruza1: [,Validators.required],
        calleCruza2: [,Validators.required],
        estado: [,Validators.required],
        municipio: [,Validators.required],
        cp: [,Validators.required]
})

clientes:Cliente[]=[]
usuarios:UsuarioSistema[]=[]
  constructor(private servicio:CentralDatosService, private fb:FormBuilder, private router:Router) {   
  }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigateByUrl('/')
    }
    
    this.servicio.getClientes()
    .subscribe( res => {
      this.clientes = res;
    })

    this.servicio.getUsuarios()
    .subscribe( res => {
      this.usuarios = res;
    })
  }

  formularioValido(){
    return this.miFormulario.valid && this.miFormulario.touched
  }

  crearLaboratorio(){
    if(this.miFormulario.invalid){
      console.log('Faltan campos por llenar')
    }else{
      this.servicio.postLaboratorio(this.miFormulario.value).subscribe(res =>console.log(`Respuesta de API ->${res.msj}`))
      console.log(this.miFormulario.value)
      //this.miFormulario.reset();
    }
  }

}
