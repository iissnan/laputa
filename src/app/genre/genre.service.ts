import { Injectable } from '@angular/core';

import { ContentfulService } from '../core/contentful.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(
    private contentfulService: ContentfulService,
  ) { }

  public loadGenre(slug: string) {
    return this.contentfulService.getGenreBySlug(slug);
  }

  public loadGenreGames(id: string) {
    return this.contentfulService.getGenreGames(id);
  }

}
