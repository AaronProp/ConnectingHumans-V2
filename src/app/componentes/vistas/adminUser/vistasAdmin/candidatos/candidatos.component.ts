import { Component, OnInit } from '@angular/core';
import { CentralDatosService } from 'src/app/central-datos.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {
  constructor( private servicio:CentralDatosService) {}
  ngOnInit(): void {}
}
