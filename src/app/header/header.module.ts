import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IconModule } from '../icon/icon.module';
import { HeaderComponent } from './header.component';
import { BrandComponent } from './brand/brand.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BrandComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
  ],
  exports: [ HeaderComponent ],
})
export class HeaderModule {

}
