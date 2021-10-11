import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformComponent } from './platform/platform.component';
import { GenreComponent } from './genre/genre.component';

const routes: Routes = [
  { path: 'platforms/:slug', component: PlatformComponent },
  { path: 'genres/:slug', component: GenreComponent },
  { path: '', pathMatch: 'full', redirectTo: '/games' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
