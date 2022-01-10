import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/vistas/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardAdminComponent } from './componentes/vistas/dashboard-admin/dashboard-admin.component';
import { NavTabsComponent } from './componentes/navTabs/navTabs.component';
import { CardComponent } from './componentes/card/card.component';
import { GraficaComponent } from './componentes/grafica/grafica.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NavTabsComponent,
    DashboardAdminComponent,
    CardComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
