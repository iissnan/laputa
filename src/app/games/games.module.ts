import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';

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
    LightboxModule,
    SharedModule,
  ],
  exports: [ GamesRoutingModule ],
})
export class GamesModule { }
