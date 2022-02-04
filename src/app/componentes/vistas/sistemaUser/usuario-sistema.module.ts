import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutesModule } from './user-routes.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { HomeComponent } from './vistasUser/home/home.component';
import { CandidatosComponent } from './vistasUser/candidatos/candidatos.component';
import { ClientesComponent } from './vistasUser/clientes/clientes.component';
import { PublicModule } from 'src/app/public/public.module';
import { DashboardComponent } from './vistasUser/dashboard/dashboard.component';








@NgModule({
  declarations: [
    CuerpoComponent,
    HomeComponent,
    CuerpoComponent,
    CandidatosComponent,
    ClientesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutesModule,
    PublicModule
  ],
  exports:[]
})
export class UsuarioSistemaModule { }
