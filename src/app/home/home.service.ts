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
    })
      .then(games => games);
  }

}
