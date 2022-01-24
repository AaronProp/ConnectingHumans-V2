import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VistaUsuariosComponent } from './vistasAdmin/vista-usuarios/vista-usuarios.component';
import { VistaCandidatosComponent } from './vistasAdmin/vista-candidatos/vista-candidatos.component';
import { VistaClientesComponent } from './vistasAdmin/vista-clientes/vista-clientes.component';
import { VistaLaboratoriosComponent } from './vistasAdmin/vista-laboratorios/vista-laboratorios.component';
import { DashboardAdminComponent } from './vistasAdmin/dashboard-admin/dashboard-admin.component';
import { HomeComponent } from './vistasAdmin/home/home.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardAdminComponent
      },
      {
        path:'vistaUsuarios',
        component: VistaUsuariosComponent
      },
      {
        path:'vistaCandidatos',
        component: VistaCandidatosComponent
      },
      {
        path:'vistaClientes',
        component: VistaClientesComponent
      },
      {
        path:'vistaLaboratorios',
        component: VistaLaboratoriosComponent
      },
      {
        path:'**',
        redirectTo: 'dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutesModule { }
