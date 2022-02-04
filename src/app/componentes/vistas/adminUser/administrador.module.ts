import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CardComponent } from './card/card.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AdminRoutesModule } from './admin-routes.module';
import { HomeComponent } from './vistasAdmin/home/home.component';
import { PublicModule } from 'src/app/public/public.module';

import { CandidatosComponent } from './vistasAdmin/candidatos/candidatos.component';
import { ClientesComponent } from './vistasAdmin/clientes/clientes.component';
import { LaboratoriosComponent } from './vistasAdmin/laboratorios/laboratorios.component';
import { UsuariosComponent } from './vistasAdmin/usuarios/usuarios.component';
import { DashboardComponent } from './vistasAdmin/dashboard/dashboard.component';






@NgModule({
  declarations: [
    CuerpoComponent,
    CardComponent,
    GraficaComponent,
    HomeComponent,
    DashboardComponent,
    CandidatosComponent,
    ClientesComponent,
    LaboratoriosComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutesModule,
    PublicModule
  ],
  exports:[]
})
export class AdministradorModule { }
