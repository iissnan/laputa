import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlatformComponent } from './platform/platform.component';
import { GenreComponent } from './genre/genre.component';

const routes: Routes = [
  { path: 'games', component: HomeComponent },
  { path: 'platforms/:slug', component: PlatformComponent },
  { path: 'genres/:slug', component: GenreComponent },
  { path: '', pathMatch: 'full', redirectTo: '/games' },
  { path: '**', redirectTo: '/games' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
