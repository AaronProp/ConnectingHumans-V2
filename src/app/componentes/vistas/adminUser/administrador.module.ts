import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CardComponent } from './card/card.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AdminRoutesModule } from './admin-routes.module';
import { HomeComponent } from './vistasAdmin/home/home.component';
import { PublicModule } from 'src/app/public/public.module';
import { DashboardAdminComponent } from './vistasAdmin/dashboard-admin/dashboard-admin.component';
import { VistaCandidatosComponent } from './vistasAdmin/vista-candidatos/vista-candidatos.component';
import { VistaClientesComponent } from './vistasAdmin/vista-clientes/vista-clientes.component';
import { VistaLaboratoriosComponent } from './vistasAdmin/vista-laboratorios/vista-laboratorios.component';
import { VistaUsuariosComponent } from './vistasAdmin/vista-usuarios/vista-usuarios.component';






@NgModule({
  declarations: [
    CuerpoComponent,
    CardComponent,
    GraficaComponent,
    HomeComponent,
    DashboardAdminComponent,
    VistaCandidatosComponent,
    VistaClientesComponent,
    VistaLaboratoriosComponent,
    VistaUsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutesModule,
    PublicModule
  ],
  exports:[]
})
export class AdministradorModule { }
