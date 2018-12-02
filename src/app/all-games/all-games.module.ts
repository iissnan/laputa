import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { IconModule } from '../icon/icon.module';
import { AllGamesComponent } from './all-games.component';


@NgModule({
  declarations: [AllGamesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    IconModule,
  ]
})
export class AllGamesModule { }
