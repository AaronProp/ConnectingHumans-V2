import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutesModule } from './user-routes.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { HomeComponent } from './vistasUser/home/home.component';
import { CandidatosComponent } from './vistasUser/candidatos/candidatos.component';
import { ClientesComponent } from './vistasUser/clientes/clientes.component';
import { PublicModule } from 'src/app/public/public.module';
import { DashboardComponent } from './vistasUser/dashboard/dashboard.component';
import { UsuariosComponent } from './vistasUser/usuarios/usuarios.component';
import { LaboratoriosComponent } from './vistasUser/laboratorios/laboratorios.component';
import { GraficaComponent } from 'src/app/public/grafica/grafica.component';








@NgModule({
  declarations: [
    CuerpoComponent,
    HomeComponent,
    CuerpoComponent,
    CandidatosComponent,
    ClientesComponent,
    DashboardComponent,
    UsuariosComponent,
    LaboratoriosComponent
  ],
  imports: [
    CommonModule,
    UserRoutesModule,
    PublicModule
  ],
  exports:[]
})
export class UsuarioSistemaModule { }
