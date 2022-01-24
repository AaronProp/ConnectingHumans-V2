import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CardComponent } from './card/card.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AdminRoutesModule } from './admin-routes.module';
import { AdminNavTabComponent } from './admin-nav-tab/admin-nav-tab.component';
import { HomeComponent } from './vistasAdmin/home/home.component';





@NgModule({
  declarations: [
    CuerpoComponent,
    CardComponent,
    GraficaComponent,
    AdminNavTabComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutesModule,
  ],
  exports:[
    CuerpoComponent,
    AdminNavTabComponent
  ]
})
export class AdministradorModule { }
