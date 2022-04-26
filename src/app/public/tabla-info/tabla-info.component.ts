import { Component, OnInit, ViewChild } from '@angular/core';
import { CentralDatosService } from 'src/app/central-datos.service';
import { Candidato } from 'src/app/interfaces/global.interface'

@Component({
  selector: 'app-tabla-info',
  templateUrl: './tabla-info.component.html',
  styleUrls: ['./tabla-info.component.css']
})
export class TablaInfoComponent implements OnInit {

  candidatos:Candidato[] = []
  usuarioSeleccionado!:Candidato;

  constructor( private servicio:CentralDatosService) { }

  ngOnInit(): void {
    this.servicio.getCandidatos()
    .subscribe(resp => {
      console.log(resp)
      this.candidatos = resp;
    }
    )
  }


  detCandidato(registro:any){
    this.candidatos.forEach(element => {
      if(element.idCandidato == registro){
        this.usuarioSeleccionado = element
      }
    });
  }
}
