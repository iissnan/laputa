import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { GameComponent } from './game/game.component';
import { PlatformComponent } from './platform/platform.component';
import { GenreComponent } from './genre/genre.component';
import { AllGamesComponent } from './all-games/all-games.component';

const routes: Routes = [
  {
    path: 'games',
    children: [
      { path: '', component: AllGamesComponent },
      { path: 'featured', component: FeaturedComponent },
      { path: ':id', component: GameComponent },
    ]
  },
  { path: 'platforms/:slug', component: PlatformComponent },
  { path: 'genres/:slug', component: GenreComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
