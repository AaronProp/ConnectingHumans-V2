import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TablaInfoComponent } from './tabla-info/tabla-info.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FiltrosTablaComponent } from './filtros-tabla/filtros-tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficaComponent } from './grafica/grafica.component';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [
    NavBarComponent,
    TablaInfoComponent,
    InfoCardComponent,
    FiltrosTablaComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[
    NavBarComponent,
    TablaInfoComponent,
    InfoCardComponent,
    FiltrosTablaComponent,
    GraficaComponent
  ]
})
export class PublicModule { }
