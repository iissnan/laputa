import { Component, OnInit } from '@angular/core';

import { GameInterface } from '../typings';
import { HomeService } from './home.service';

@Component({
  selector: 'laputa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public featuredGames: GameInterface[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.loadFeaturedGames()
      .then(games => this.featuredGames = games);
  }

}
