import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CardComponent } from './card/card.component';
import { GraficaComponent } from './grafica/grafica.component';



@NgModule({
  declarations: [
    CuerpoComponent,
    CardComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CuerpoComponent
  ]
})
export class AdministradorModule { }
