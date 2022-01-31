import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { TablaInfoComponent } from './tabla-info/tabla-info.component';




@NgModule({
  declarations: [
    NavBarComponent,
    NavTabComponent,
    TablaInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    NavTabComponent,
    TablaInfoComponent
  ]
})
export class PublicModule { }
