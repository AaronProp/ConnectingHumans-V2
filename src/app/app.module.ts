import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/vistas/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardAdminComponent } from './componentes/vistas/adminUser/dashboard-admin/dashboard-admin.component';
import { NavTabsComponent } from './componentes/navTabs/navTabs.component';
import { Err404Component } from './componentes/vistas/err404/err404.component';
import { DashboardUsuarioComponent } from './componentes/vistas/sistemaUser/dashboard-usuario/dashboard-usuario.component';
import { DashboardClienteComponent } from './componentes/vistas/clienteUser/dashboard-cliente/dashboard-cliente.component';
import { DashboardLabComponent } from './componentes/vistas/labUser/dashboard-lab/dashboard-lab.component';
import { AdministradorModule } from './componentes/vistas/adminUser/administrador.module';
import { ClienteModule } from './componentes/vistas/clienteUser/cliente.module';
import { LaboratorioModule } from './componentes/vistas/labUser/laboratorio.module';
import { LoginModule } from './componentes/vistas/login/login.module';
import { UsuarioSistemaModule } from './componentes/vistas/sistemaUser/usuario-sistema.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NavTabsComponent,
    DashboardAdminComponent,
    Err404Component,
    DashboardUsuarioComponent,
    DashboardClienteComponent,
    DashboardLabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministradorModule,
    ClienteModule,
    LaboratorioModule,
    LoginModule,
    UsuarioSistemaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
