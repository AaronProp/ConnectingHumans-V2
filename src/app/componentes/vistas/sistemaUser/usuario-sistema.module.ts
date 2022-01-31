import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutesModule } from './user-routes.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { HomeComponent } from './vistasUser/home/home.component';
import { VistaCandidatosComponent } from './vistasUser/vista-candidatos/vista-candidatos.component';
import { VistaClientesComponent } from './vistasUser/vista-clientes/vista-clientes.component';
import { PublicModule } from '../../../public/public.module';







@NgModule({
  declarations: [
    CuerpoComponent,
    HomeComponent,
    CuerpoComponent,
    VistaCandidatosComponent,
    VistaClientesComponent
  ],
  imports: [
    CommonModule,
    UserRoutesModule,
    PublicModule
  ],
  exports:[]
})
export class UsuarioSistemaModule { }
