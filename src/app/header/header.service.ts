import { Injectable } from '@angular/core';
import { ContentfulService } from '../core/contentful.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private contentfulService: ContentfulService,
  ) { }

  public loadPlatforms() {
    return this.contentfulService.getPlatforms().pipe(
      take(1),
      map(collection => collection.items.map(entry => entry.fields)),
    );
  }

  public loadGenres(query) {
    return this.contentfulService.getGenres(query)
      .then(entries  => entries.map(entry => entry.fields));
  }
}
