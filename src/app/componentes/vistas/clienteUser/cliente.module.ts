import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './vistasCliente/home/home.component';
import { CandidatosComponent } from './vistasCliente/candidatos/candidatos.component';
import { ClienteRoutesModule } from './cliente-routes.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PublicModule } from '../../../public/public.module';
import { DashboardComponent } from './vistasCliente/dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    CandidatosComponent,
    CuerpoComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutesModule,
    PublicModule
  ]
})
export class ClienteModule { }
