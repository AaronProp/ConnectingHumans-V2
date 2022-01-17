import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './componentes/vistas/err404/err404.component';
import { DashboardAdminComponent } from './componentes/vistas/adminUser/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './componentes/vistas/login/login.component';
import { DashboardUsuarioComponent } from './componentes/vistas/sistemaUser/dashboard-usuario/dashboard-usuario.component';
import { DashboardClienteComponent } from './componentes/vistas/clienteUser/dashboard-cliente/dashboard-cliente.component';
import { DashboardLabComponent } from './componentes/vistas/labUser/dashboard-lab/dashboard-lab.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard-admin', component: DashboardAdminComponent},
  {path: 'dashboard-usuario', component: DashboardUsuarioComponent},
  {path: 'dashboard-cliente', component: DashboardClienteComponent},
  {path: 'dashboard-lab', component: DashboardLabComponent},
  {path: '**',component: Err404Component, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
