import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutesModule } from './user-routes.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { HomeComponent } from './vistasUser/home/home.component';






@NgModule({
  declarations: [
    CuerpoComponent,
    HomeComponent,
    CuerpoComponent
  ],
  imports: [
    CommonModule,
    UserRoutesModule,
  ],
  exports:[]
})
export class UsuarioSistemaModule { }
