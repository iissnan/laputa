import { Injectable } from '@angular/core';

import { ContentfulService } from '../core/contentful.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private contentfulService: ContentfulService,
  ) { }

  public loadFeaturedGames() {
    return this.contentfulService.getGames()
      .then(games => games);
  }

  public loadPlatforms() {
    return this.contentfulService.getPlatforms()
      .then(entries => entries.map(entry => entry.fields));
  }

  public loadGenres() {
    return this.contentfulService.getGenres()
      .then(entries  => entries.map(entry => entry.fields));
  }

}
