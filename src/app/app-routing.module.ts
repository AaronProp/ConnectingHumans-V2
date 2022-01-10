import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './componentes/vistas/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './componentes/vistas/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard-admin', component: DashboardAdminComponent},
  {path: '**',redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
