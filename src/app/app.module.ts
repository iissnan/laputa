import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { GamesModule } from './games/games.module';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { PlatformModule } from './platform/platform.module';
import { GenreModule } from './genre/genre.module';
import { AnalysisModule } from './analysis/analysis.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    GamesModule,
    AnalysisModule,
    AppRoutingModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    PlatformModule,
    GenreModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
