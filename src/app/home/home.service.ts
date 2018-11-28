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
    return this.contentfulService.getGames({
      'fields.featured': true,
      'order': '-fields.rating,-sys.createdAt',
      'limit': 8,
    })
      .then(games => games);
  }

  public loadLatestGames() {
    return this.contentfulService.getGames({
      'order': '-sys.createdAt',
      'limit': 8,
    })
      .then(games => games);
  }
}
