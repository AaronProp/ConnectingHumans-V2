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
      titulo: 'Titulo 1',
      subtitulo: 'Subtitulo 1',
      cuerpo: 'Cuerpo 1'
    },
    {
      titulo: 'Titulo 2',
      subtitulo: 'Subtitulo 2',
      cuerpo: 'Cuerpo 2'
    },
    {
      titulo: 'Titulo 3',
      subtitulo: 'Subtitulo 3',
      cuerpo: 'Cuerpo 3'
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
