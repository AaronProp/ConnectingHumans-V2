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
  candidatos:Candidato[] = []
  usuarioSeleccionado!: Candidato;
  
  
  constructor( private servicio:CentralDatosService, private fb:FormBuilder) { }
  
  ngOnInit(): void {
    if(this.urlAct == `${this.servicio.urlBaseWeb}usuario/candidatos`){
        this.servicio.getCandidatos()
          .subscribe(resp => {
            console.log(resp)
            this.candidatos = resp;
        }
      )
    }
  }

  //Estructura de formulario de edicion
  miFormulario = this.fb.group({
    nombre:['Aaron']
  })

  detRegistro(registro:any){
    this.candidatos.forEach(element => {
      if(element.idCandidato == registro){
        this.usuarioSeleccionado = element
      }
    });
  }

  elimRegistro(registro:any){
    this.candidatos.forEach(element => {
      if(element.idCandidato == registro){
        this.usuarioSeleccionado = element
      }
    });
  }

}