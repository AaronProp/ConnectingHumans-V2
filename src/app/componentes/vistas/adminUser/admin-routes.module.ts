import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponent } from './vistasAdmin/usuarios/usuarios.component';
import { CandidatosComponent } from './vistasAdmin/candidatos/candidatos.component';
import { ClientesComponent } from './vistasAdmin/clientes/clientes.component';
import { LaboratoriosComponent } from './vistasAdmin/laboratorios/laboratorios.component';
import { DashboardComponent } from './vistasAdmin/dashboard/dashboard.component';
import { HomeComponent } from './vistasAdmin/home/home.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'usuarios',
        component: UsuariosComponent
      },
      {
        path:'candidatos',
        component: CandidatosComponent
      },
      {
        path:'clientes',
        component: ClientesComponent
      },
      {
        path:'laboratorios',
        component: LaboratoriosComponent
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
