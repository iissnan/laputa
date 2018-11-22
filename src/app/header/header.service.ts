import { Injectable } from '@angular/core';
import { ContentfulService } from '../core/contentful.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private contentfulService: ContentfulService,
  ) { }

  public loadPlatforms() {
    return this.contentfulService.getPlatforms()
      .then(entries => entries.map(entry => entry.fields));
  }

  public loadGenres() {
    return this.contentfulService.getGenres()
      .then(entries  => entries.map(entry => entry.fields));
  }
}
