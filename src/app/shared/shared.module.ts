import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icon/icon.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameTileComponent } from './game-tile/game-tile.component';
import { GamePlatformComponent } from './game-platform/game-platform.component';
import { GameRatingComponent } from './game-rating/game-rating.component';
import { GameGenreComponent } from './game-genre/game-genre.component';
import { GameCoverComponent } from './game-cover/game-cover.component';


@NgModule({
  declarations: [
    GameListComponent,
    GameTileComponent,
    GamePlatformComponent,
    GameRatingComponent,
    GameGenreComponent,
    GameCoverComponent
  ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [ GameListComponent ],
})
export class SharedModule { }
