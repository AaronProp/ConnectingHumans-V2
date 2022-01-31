import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/vistas/login/login.component';
import { Err404Component } from './componentes/vistas/err404/err404.component';
import { DashboardClienteComponent } from './componentes/vistas/clienteUser/vistasCliente/dashboard-cliente/dashboard-cliente.component';
import { AdministradorModule } from './componentes/vistas/adminUser/administrador.module';
import { ClienteModule } from './componentes/vistas/clienteUser/cliente.module';
import { LoginModule } from './componentes/vistas/login/login.module';
import { UsuarioSistemaModule } from './componentes/vistas/sistemaUser/usuario-sistema.module';
import { PublicModule } from './public/public.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Err404Component,
    DashboardClienteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
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
