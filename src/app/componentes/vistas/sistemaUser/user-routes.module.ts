import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardUsuarioComponent } from './vistasUser/dashboard-usuario/dashboard-usuario.component';
import { VistaClientesComponent } from './vistasUser/vista-clientes/vista-clientes.component';
import { VistaCandidatosComponent } from './vistasUser/vista-candidatos/vista-candidatos.component';
import { HomeComponent } from './vistasUser/home/home.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardUsuarioComponent
      },
      {
        path:'clientes',
        component: VistaClientesComponent
      },
      {
        path:'candidatos',
        component: VistaCandidatosComponent
      },
      {
        path:'**',
        redirectTo:'dashboard'
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
export class UserRoutesModule { }
