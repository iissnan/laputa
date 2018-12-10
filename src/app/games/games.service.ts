import { Injectable } from '@angular/core';
import { from as $from } from 'rxjs';

import { ContentfulService } from '../core/contentful.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private contentfulService: ContentfulService,
  ) { }

  public loadFeaturedGames() {
    const promise = this.contentfulService.getGames({
      'fields.featured': true,
      'order': '-fields.rating,-sys.createdAt',
      'limit': 8,
    });

    return $from(promise);
  }

  public loadLatestGames() {
    const promise = this.contentfulService.getGames({
      'order': '-sys.createdAt',
      'limit': 8,
    });
    return $from(promise);
  }
}
