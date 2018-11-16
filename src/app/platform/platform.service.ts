import { Injectable } from '@angular/core';

import { ContentfulService } from '../core/contentful.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private contentService: ContentfulService,
  ) { }

  public loadPlatform(slug: string) {
    return this.contentService.getPlatformBySlug(slug);
  }

  public loadPlatformGames(id: string) {
    return this.contentService.getPlatformGames(id);
  }
}
