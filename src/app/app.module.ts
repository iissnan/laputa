import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { PlatformModule } from './platform/platform.module';
import { GenreModule } from './genre/genre.module';
import { GameModule } from './game/game.module';
import { FeaturedModule } from './featured/featured.module';
import { AllGamesModule } from './all-games/all-games.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    PlatformModule,
    GenreModule,
    GameModule,
    FeaturedModule,
    AllGamesModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
