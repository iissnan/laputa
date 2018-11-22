import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class HomeModule { }
