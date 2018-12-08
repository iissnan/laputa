import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Entry } from 'contentful';
import { from as $from, Observable, zip } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { GameInterface, PlatformInterface } from '../typings';
import { ContentfulService } from '../core/contentful.service';
import { HomeService } from './home.service';

@Component({
  selector: 'laputa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public platforms$: Observable<PlatformInterface[]>;
  public queryGames: Entry<GameInterface>[];
  public featuredGames: Entry<GameInterface>[];
  public latestGames: Entry<GameInterface>[];
  public selectedPlatform: string;
  public shouldDisplayLandingGames = false;
  public queryCaption: string;
  public queryCount: number;

  private SUPPORTED_QUERY_PARAMS = {
    platform: 'platform',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contentfulService: ContentfulService,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.onRouteQuery();
    this.loadPlatforms();
  }

  public onPlatformSelected(platform) {
    const isActive = this.selectedPlatform === platform;
    const query = { platform: isActive ? null : platform };

    this.router.navigate([''], {
      relativeTo: this.activatedRoute,
      queryParams: query,
    }).then(_ => {
      this.selectedPlatform = isActive ? '' : platform;
    });
  }

  private onRouteQuery() {
    this.activatedRoute.queryParamMap.pipe(
      map(params => this.parseQueryParams(params)),
    ).subscribe(({ hasSupportedQueryParams, platform }) => {
      this.shouldDisplayLandingGames = !hasSupportedQueryParams;

      hasSupportedQueryParams
        ? this.loadQueryGames(platform)
        : this.loadLandingGames();
    });
  }

  private parseQueryParams(params: ParamMap) {
    const platform = params.get(this.SUPPORTED_QUERY_PARAMS.platform);
    const hasSupportedQueryParams = !!platform;

    return {
      hasSupportedQueryParams: hasSupportedQueryParams,
      platform: platform,
    };
  }

  private loadPlatforms() {
    this.platforms$ = $from(this.contentfulService.getPlatforms()).pipe(
      take(1),
      map(entries => entries.map(entry => entry.fields)),
    );
  }

  private loadQueryGames(queryPlatform) {
    const promise = queryPlatform ?
      $from(this.contentfulService.getPlatformBySlug(queryPlatform)).pipe(
        take(1),
        switchMap(platform => {
          this.queryCaption = platform.fields.label;
          return this.contentfulService.getPlatformGames(platform.sys.id);
        })
      ) :
      this.contentfulService.getGames();

    $from(promise).pipe(
      take(1),
    ).subscribe(entries => {
      this.queryCount = entries.length;
      this.queryGames = entries;
    });
  }

  private loadLandingGames() {
    zip(
      this.homeService.loadFeaturedGames(),
      this.homeService.loadLatestGames(),
    ).pipe(take(1)).subscribe(([featureGames, latestGames]) => {
      this.featuredGames = featureGames;
      this.latestGames = latestGames;
    });
  }
}
