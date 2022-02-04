import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { TablaInfoComponent } from './tabla-info/tabla-info.component';
import { InfoCardComponent } from './info-card/info-card.component';




@NgModule({
  declarations: [
    NavBarComponent,
    NavTabComponent,
    TablaInfoComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    NavTabComponent,
    TablaInfoComponent,
    InfoCardComponent
  ]
})
export class PublicModule { }
