import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  info_cards:any[] = [
    {
      titulo: 'Clientes Totales',
      subtitulo: '12',
      cuerpo: 'Cantidad de Clientes registrados en la plataforma'
    },
    {
      titulo: 'Candidatos Totales',
      subtitulo: '5',
      cuerpo: 'Candidatos totales que estan relacionados con su Cliente'
    },
    {
      titulo: 'Laboratorios Totales',
      subtitulo: '4',
      cuerpo: 'Cantidad de Laboratorios que estan registrados y disponibles pra las investigaciones'
    },
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigateByUrl('/')
    }
  }

  titulos:string[] = ['1','2','3']
}
