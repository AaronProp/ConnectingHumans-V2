import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './vistasCliente/home/home.component';
import { DashboardComponent } from './vistasCliente/dashboard/dashboard.component';
import { CandidatosComponent } from './vistasCliente/candidatos/candidatos.component';

const routes:Routes = [{
  path:'',
  component:HomeComponent,
  children:[
   {
     path:'dashboard',
     component:DashboardComponent
   },
   {
     path:'candidatos',
     component:CandidatosComponent
   },
   {
     path:'**',
     redirectTo:'dashboard'
   }
  ]
}]

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
export class ClienteRoutesModule { }
