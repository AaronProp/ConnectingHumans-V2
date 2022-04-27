import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CentralDatosService } from 'src/app/central-datos.service';
import { Candidato } from 'src/app/interfaces/global.interface'

@Component({
  selector: 'app-tabla-info',
  templateUrl: './tabla-info.component.html',
  styleUrls: ['./tabla-info.component.css']
})
export class TablaInfoComponent implements OnInit {

  urlAct = String(location.href)
  candidatos!:Candidato[];
  usuarioSeleccionado!: Candidato;

  miFormulario:any;
  
  constructor( private servicio:CentralDatosService, private fb:FormBuilder) { }
  
  ngOnInit() {
    if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/candidatos`){
        this.servicio.getCandidatos()
          .subscribe(resp => {
            console.log('Llenado de candidatos[]')
            this.candidatos = resp;
        }
      )
    }
  }

   detRegistro(registro:number){ 
    this.candidatos.forEach(element => {
      if(element.idCandidato == registro){
        this.usuarioSeleccionado = element

        //Estructura de formulario de edicion
        this.miFormulario = this.fb.group({
        })
      }
    });
    
  }

  editRegistro(registro:number){
    this.candidatos.forEach(element => {
      if(element.idCandidato == registro){
        this.usuarioSeleccionado = element
      }
    });
  }

  elimRegistro(registro:number){
    this.candidatos.forEach(element => {
      if(element.idCandidato == registro){
        this.usuarioSeleccionado = element
      }
    });
  }

}