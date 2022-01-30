import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NavTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class PublicModule { }
