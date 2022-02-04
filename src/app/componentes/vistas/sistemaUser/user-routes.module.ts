import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './vistasUser/dashboard/dashboard.component';
import { ClientesComponent } from './vistasUser/clientes/clientes.component';
import { CandidatosComponent } from './vistasUser/candidatos/candidatos.component';
import { HomeComponent } from './vistasUser/home/home.component';

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
        path:'clientes',
        component: ClientesComponent
      },
      {
        path:'candidatos',
        component: CandidatosComponent
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
