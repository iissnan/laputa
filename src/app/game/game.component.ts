import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';
import { Entry } from 'contentful';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';

import { ContentfulService } from '../core/contentful.service';
import { GameInterface } from '../typings';

@Component({
  selector: 'laputa-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  public galleryId = 'gallery';
  public game: Entry<GameInterface>;
  public screenshots: GalleryItem[];
  private subscription: Subscription;

  constructor(
    private activatedRouted: ActivatedRoute,
    public gallery: Gallery,
    private contentfulService: ContentfulService,
  ) { }

  ngOnInit() {
    const galleryRef = this.gallery.ref(this.galleryId);
    this.subscription = this.activatedRouted.paramMap.pipe(
      tap(_ => { this.game = null; }),
      switchMap(params => {
        const id = params.get('id');
        return from(this.contentfulService.getGame(id));
      }),
    ).subscribe(game => {
      this.game = game;
      this.screenshots = this.getGalleryItems();
      galleryRef.load(this.screenshots);
    });
  }

  private getGalleryItems(): ImageItem[] {
    return this.game.fields.screenshots.map(screenshot => {
      return new ImageItem({
        src: `${screenshot.fields.file.url}`,
        thumb: `${screenshot.fields.file.url}?w=300`,
      });
    });
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
