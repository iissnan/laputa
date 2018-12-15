import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { FeaturedComponent } from './featured/featured.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {
    path: 'games',
    component: GamesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'all', component: AllComponent },
      { path: 'featured', component: FeaturedComponent },
      { path: ':id', component: GameComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule { }
