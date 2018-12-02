import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icon/icon.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameTileComponent } from './game-tile/game-tile.component';
import { GamePlatformComponent } from './game-platform/game-platform.component';
import { GameRatingComponent } from './game-rating/game-rating.component';
import { GameGenreComponent } from './game-genre/game-genre.component';
import { GameCoverComponent } from './game-cover/game-cover.component';
import { GamePlatformIconComponent } from './game-platform-icon/game-platform-icon.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { GameHeadlineComponent } from './game-headline/game-headline.component';
import { PlatformClassNameDirective } from './platform-class-name.directive';
import { RangePipe } from './range.pipe';


@NgModule({
  declarations: [
    GameListComponent,
    GameTileComponent,
    GamePlatformComponent,
    GameRatingComponent,
    GameGenreComponent,
    GameCoverComponent,
    GamePlatformIconComponent,
    SpinnerComponent,
    PaginationComponent,
    GameHeadlineComponent,
    PlatformClassNameDirective,
    RangePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
  ],
  exports: [
    GameListComponent,
    GameHeadlineComponent,
    GamePlatformIconComponent,
    SpinnerComponent,
    PlatformClassNameDirective,
    PaginationComponent,
    RangePipe,
  ],
})
export class SharedModule { }
