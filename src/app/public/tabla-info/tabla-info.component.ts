import { Component, OnInit } from '@angular/core';
import { CentralDatosService } from 'src/app/central-datos.service';
import { Candidato } from 'src/app/interfaces/global.interface'

@Component({
  selector: 'app-tabla-info',
  templateUrl: './tabla-info.component.html',
  styleUrls: ['./tabla-info.component.css']
})
export class TablaInfoComponent implements OnInit {

  constructor( private servicio:CentralDatosService) { }

  ngOnInit(): void {
    this.servicio.getCandidatos()
    .subscribe(resp => {
      console.log(resp)
      this.candidatos = resp;
    }
    )
  }

  candidatos:Candidato[] = []

  detCandidato(){
    
  }

}
