import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutesModule } from './user-routes.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { HomeComponent } from './vistasUser/home/home.component';
import { VistaClientesComponent } from './vistasUser/vista-clientes/vista-clientes.component';
import { VistaCandidatosComponent } from './vistasUser/vista-candidatos/vista-candidatos.component';
import { NavbarComponent } from '../../navbar/navbar.component';



@NgModule({
  declarations: [
    CuerpoComponent,
    DashboardUsuarioComponent,
    HomeComponent,
    VistaClientesComponent,
    VistaCandidatosComponent
  ],
  imports: [
    CommonModule,
    UserRoutesModule,
  ],
  exports:[
  ]
})
export class UsuarioSistemaModule { }
