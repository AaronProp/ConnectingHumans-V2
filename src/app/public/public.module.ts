import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TablaInfoComponent } from './tabla-info/tabla-info.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FiltrosTablaComponent } from './filtros-tabla/filtros-tabla.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NavBarComponent,
    TablaInfoComponent,
    InfoCardComponent,
    FiltrosTablaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    NavBarComponent,
    TablaInfoComponent,
    InfoCardComponent,
    FiltrosTablaComponent
  ]
})
export class PublicModule { }
