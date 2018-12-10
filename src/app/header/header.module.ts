import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import { BrandComponent } from './brand/brand.component';
import { NavComponent } from './nav/nav.component';
import { NavItemDirective } from './nav-item/nav-item.directive';
import { NavItemPlatformsComponent } from './nav-item-platforms/nav-item-platforms.component';
import { NavItemGenresComponent } from './nav-item-genres/nav-item-genres.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BrandComponent,
    NavComponent,
    NavItemDirective,
    NavItemPlatformsComponent,
    NavItemGenresComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ HeaderComponent ],
})
export class HeaderModule {

}
