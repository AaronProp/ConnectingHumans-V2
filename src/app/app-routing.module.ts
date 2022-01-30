import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './componentes/vistas/err404/err404.component';
import { LoginComponent } from './componentes/vistas/login/login.component';
import { DashboardUsuarioComponent } from './componentes/vistas/sistemaUser/vistasUser/dashboard-usuario/dashboard-usuario.component';
import { DashboardClienteComponent } from './componentes/vistas/clienteUser/dashboard-cliente/dashboard-cliente.component';
import { DashboardLabComponent } from './componentes/vistas/labUser/dashboard-lab/dashboard-lab.component';


const routes: Routes = [
  {
  path: '',
  component: LoginComponent
  },
  {
  path: 'admin',
  loadChildren: () => import('./componentes/vistas/adminUser/administrador.module').then(m => m.AdministradorModule)
  },
  {
  path: 'usuario',
  loadChildren: () => import('./componentes/vistas/sistemaUser/usuario-sistema.module').then(m => m.UsuarioSistemaModule)
  },
  {path: 'dashboard-cliente', component: DashboardClienteComponent},
  {path: 'dashboard-lab', component: DashboardLabComponent},
  {path: '**',component: Err404Component, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
