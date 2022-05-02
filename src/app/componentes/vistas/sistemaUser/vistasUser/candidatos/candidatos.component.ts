import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CentralDatosService } from 'src/app/central-datos.service';
import { CatGenero, CatEstadoCivil, CatEscolaridad, Cliente } from 'src/app/interfaces/global.interface'

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {


  miFormulario:FormGroup = this.fb.group({
        idUsuario: [],
        idCliente: [,Validators.required],
        idCandidato: [],
        idLaboratorio: ["null",Validators.required],
        idUsuarioSistema:[3,Validators.required],
        fechaNacimiento: [,Validators.required],
        lugarNacimiento: [,Validators.required],
        genero: [,Validators.required],
        estadoCivil: [,Validators.required],
        edad: [,Validators.required],
        gradoMaxEstudios: [,Validators.required],
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

  //Se recuperan los Cats para usarlos en los formularios
  catGenero: CatGenero[] = [];
  catEstadoCivil:CatEstadoCivil[] = [];
  catEscolaridad:CatEscolaridad[] = [];
  clientes:Cliente[]=[]
 
  constructor(private servicio:CentralDatosService, private fb:FormBuilder) {}

  ngOnInit(): void {

    this.servicio.getClientes()
    .subscribe( res => {
      this.clientes = res;
    })

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

  formularioValido(){
    return this.miFormulario.valid && this.miFormulario.touched
  }

  crearCandidato(){
    if(this.miFormulario.invalid){
      console.log('Faltan campos por llenar')
    }else{
      this.servicio.postCandidato(this.miFormulario.value).subscribe(res =>console.log(`Respuesta de API ->${res.msj}`))
      console.log(this.miFormulario.value)
      this.miFormulario.reset();
    }
  }


}