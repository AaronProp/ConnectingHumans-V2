import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { Err404Component } from './componentes/vistas/err404/err404.component';
import { ClienteModule } from './componentes/vistas/clienteUser/cliente.module';
import { UsuarioSistemaModule } from './componentes/vistas/sistemaUser/usuario-sistema.module';
import { PublicModule } from './public/public.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CuerpoComponent } from './componentes/vistas/candidatoUser/cuerpo/cuerpo.component';
import { DashboardComponent } from './componentes/vistas/candidatoUser/vistasCandidato/dashboard/dashboard.component';
import { HomeComponent } from './componentes/vistas/candidatoUser/vistasCandidato/home/home.component';
import { CandidatoModule } from './componentes/vistas/candidatoUser/candidato.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Err404Component,
    CuerpoComponent,
    DashboardComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    UsuarioSistemaModule,
    CandidatoModule,
    PublicModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
