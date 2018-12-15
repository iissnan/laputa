import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { PlatformInterface } from '../typings';
import { ContentfulService } from '../core/contentful.service';


@Component({
  selector: 'laputa-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public platforms$: Observable<PlatformInterface[]>;
  public queryPlatform: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contentfulService: ContentfulService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.queryPlatform = params.get('platform');
    });
    this.loadPlatforms();
  }

  public onPlatformSelected(platform) {
    const isActive = this.queryPlatform === platform;
    const query = {
      platform: isActive ? null : platform,
    };

    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: query
    });
  }

  private loadPlatforms() {
    this.platforms$ = this.contentfulService.getPlatforms().pipe(
      take(1),
      map(collection => {
        return collection.items.map(entry => entry.fields);
      }),
    );
  }

}
