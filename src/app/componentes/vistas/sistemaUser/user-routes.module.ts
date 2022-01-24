import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { HomeComponent } from '../adminUser/vistasAdmin/home/home.component';
import { VistaClientesComponent } from './vistasUser/vista-clientes/vista-clientes.component';
import { VistaCandidatosComponent } from './vistasUser/vista-candidatos/vista-candidatos.component';

const routes:Routes = [
  {
    path:'',
    component: HomeComponent,
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
        component:HomeComponent
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
