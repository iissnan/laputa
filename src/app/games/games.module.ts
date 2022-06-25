import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryModule } from 'ng-gallery';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './games-routing.module';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { FeaturedComponent } from './featured/featured.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games.component';


@NgModule({
  declarations: [
    HomeComponent,
    AllComponent,
    FeaturedComponent,
    GameComponent,
    GamesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryModule,
    SharedModule,
  ],
  exports: [ GamesRoutingModule ],
})
export class GamesModule { }
