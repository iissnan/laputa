import { Component, OnInit } from '@angular/core';

import { GameInterface, GenreInterface, PlatformInterface } from '../typings';
import { HomeService } from './home.service';

@Component({
  selector: 'laputa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public featuredGames: GameInterface[];
  public platforms: PlatformInterface[];
  public genres: GenreInterface[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.loadFeaturedGames()
      .then(games => this.featuredGames = games);

    this.homeService.loadPlatforms()
      .then(platforms => this.platforms = platforms);

    this.homeService.loadGenres()
      .then(genres => this.genres = genres);
  }

}
