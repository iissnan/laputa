import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Entry } from 'contentful';
import { Observable, zip } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { GameInterface, PlatformInterface } from '../../typings';
import { ContentfulService } from '../../core/contentful.service';
import { GamesService } from '../games.service';


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
  public shouldDisplayLandingGames = false;
  public queryPlatform: string;
  public queryCaption: string;
  public queryCount: number;
  public queryPage: number;
  public perPage = 16;
  public isGamesLoading = true;

  private SUPPORTED_QUERY_PARAMS = {
    platform: 'platform',
    page: 'page',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller,
  private contentfulService: ContentfulService,
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.onRouteQuery();
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

  public onPageSelect(page) {
    this.queryPage = page;
    const queryPage = (!this.queryPage || this.queryPage === 1) ? null : this.queryPage;
    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: { page: queryPage },
      queryParamsHandling: 'merge'
    }).then(_ => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  private onRouteQuery() {
    this.activatedRoute.queryParamMap.pipe(
      tap(_ => this.isGamesLoading = true),
      map(params => this.parseQueryParams(params)),
    ).subscribe(({ hasSupportedQueryParams, platform, page }) => {
      this.shouldDisplayLandingGames = !hasSupportedQueryParams;
      this.queryPlatform = platform;
      this.queryPage = page;

      hasSupportedQueryParams
        ? this.loadQueryGames()
        : this.loadLandingGames();
    });
  }

  private parseQueryParams(params: ParamMap) {
    const platform = params.get(this.SUPPORTED_QUERY_PARAMS.platform);
    const page = params.get(this.SUPPORTED_QUERY_PARAMS.page);
    const hasSupportedQueryParams = !!platform;

    return {
      hasSupportedQueryParams: hasSupportedQueryParams,
      platform: platform,
      page: parseInt(page, 10) || 1,
    };
  }

  private loadPlatforms() {
    this.platforms$ = this.contentfulService.getPlatforms().pipe(
      take(1),
      map(collection => collection.items.map(entry => entry.fields)),
    );
  }

  private loadQueryGames() {
    const games$ = this.queryPlatform
      ? this.loadQueryPlatformGames(this.queryPlatform)
      : this.contentfulService.getGames();

    games$.pipe(
      take(1),
    ).subscribe(res => {
      this.queryCount = res.total;
      this.queryGames = res.items;
      this.isGamesLoading = false;
    });
  }

  private loadQueryPlatformGames(queryPlatform) {
    return this.contentfulService.getPlatformBySlug(queryPlatform).pipe(
      take(1),
      switchMap(platform => {
        this.queryCaption = platform.fields.label;
        return this.contentfulService.getPlatformGames(platform.sys.id, {
          limit: this.perPage,
          skip: (this.queryPage - 1) * this.perPage,
        });
      })
    );
  }

  private loadLandingGames() {
    zip(
      this.gamesService.loadFeaturedGames(),
      this.gamesService.loadLatestGames(),
    ).pipe(take(1)).subscribe(([featureGames, latestGames]) => {
      this.featuredGames = featureGames;
      this.latestGames = latestGames;
      this.isGamesLoading = false;
    });
  }
}
