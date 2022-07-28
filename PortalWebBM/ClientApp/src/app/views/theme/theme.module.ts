import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [BaseComponent, FooterComponent, HeaderComponent, SubheaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class ThemeModule { }
