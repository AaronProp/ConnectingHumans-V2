import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { Err404Component } from './componentes/vistas/err404/err404.component';
import { AdministradorModule } from './componentes/vistas/adminUser/administrador.module';
import { ClienteModule } from './componentes/vistas/clienteUser/cliente.module';
import { UsuarioSistemaModule } from './componentes/vistas/sistemaUser/usuario-sistema.module';
import { PublicModule } from './public/public.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Err404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministradorModule,
    ClienteModule,
    UsuarioSistemaModule,
    PublicModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
