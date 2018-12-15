import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import { BrandComponent } from './brand/brand.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BrandComponent,
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
