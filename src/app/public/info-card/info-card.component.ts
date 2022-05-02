import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input() titulo?: string;
  @Input() subtitulo?: string;
  @Input() cuerpo?: string;

  constructor() {
    if (this.titulo == '' || this.titulo == undefined){}
      this.titulo = 'Titulo'
    if (this.subtitulo == '' || this.subtitulo == undefined)
      this.subtitulo = 'Subtitulo'
    if (this.cuerpo == '' || this.cuerpo == undefined)
      this.cuerpo = 'Este es un texto generico que permite previsualizar el componente en caso de no ser inicializado correctamente'
  }

  ngOnInit(): void {
  }

}
