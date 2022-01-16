import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './componentes/err404/err404.component';
import { DashboardAdminComponent } from './componentes/vistas/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './componentes/vistas/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard-admin', component: DashboardAdminComponent},
  {path: '**',component: Err404Component, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
