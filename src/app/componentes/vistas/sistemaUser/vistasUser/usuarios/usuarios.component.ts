import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CentralDatosService } from 'src/app/central-datos.service';
import { catPermisos } from 'src/app/interfaces/global.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

        miFormulario:FormGroup = this.fb.group({
          permiso: [,Validators.required],
          idUsuario: ["",],
          idCliente: ["",],
          idCandidato: ["",],
          idLaboratorio: ["",],
          idUsuarioSistema: ["",],
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
catPermisos: catPermisos[] = [];

  constructor(private servicio:CentralDatosService, private fb:FormBuilder) {
  }

  ngOnInit(): void {

    this.servicio.getCatPermisos()
    .subscribe( res => {
      this.catPermisos = res;
    })
  }

  formularioValido(){
    return this.miFormulario.valid && this.miFormulario.touched
  }

  crearUsrSis(){
    if(this.miFormulario.invalid){
      console.log('Faltan campos por llenar')
    }else{
      this.servicio.postUsrSis(this.miFormulario.value).subscribe(res =>console.log(`Respuesta de API ->${res.msj}`))
      console.log(this.miFormulario.value)
      this.miFormulario.reset();
    }
  }
}
