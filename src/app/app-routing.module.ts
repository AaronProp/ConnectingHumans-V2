import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './componentes/vistas/err404/err404.component';
import { LoginComponent } from './auth/login/login.component';




const routes: Routes = [
  {
  path: '',
  component: LoginComponent
  },
  {
    path: 'candidato',
    loadChildren: () => import('./componentes/vistas/candidatoUser/candidato.module').then(m => m.CandidatoModule)
    },
  {
  path: 'usuario',
  loadChildren: () => import('./componentes/vistas/sistemaUser/usuario-sistema.module').then(m => m.UsuarioSistemaModule)
  },
  {path: 'cliente',
  loadChildren: () => import('./componentes/vistas/clienteUser/cliente.module').then(m => m.ClienteModule)
},
  
  {path: '**',component: Err404Component, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
