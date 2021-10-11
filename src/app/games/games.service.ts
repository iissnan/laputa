import { Injectable } from '@angular/core';

import { ContentfulService } from '../core/contentful.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private contentfulService: ContentfulService,
  ) { }

  public loadFeaturedGames(query?) {
    return this.contentfulService.getGames({
      'fields.featured': true,
      'order': '-fields.rating,-sys.createdAt',
      ...query,
    });
  }

  public loadLatestGames() {
    return this.contentfulService.getGames({
      'order': '-sys.createdAt',
      'limit': 20,
    }).pipe(
      map(res => res.items),
    );
  }
}
