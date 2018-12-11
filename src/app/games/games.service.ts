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

  public loadFeaturedGames() {
    return this.contentfulService.getGames({
      'fields.featured': true,
      'order': '-fields.rating,-sys.createdAt',
      'limit': 8,
    }).pipe(
      map(res => res.items),
    );
  }

  public loadLatestGames() {
    return this.contentfulService.getGames({
      'order': '-sys.createdAt',
      'limit': 8,
    }).pipe(
      map(res => res.items),
    );
  }
}
