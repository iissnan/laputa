import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Entry } from 'contentful';
import { from as $from, Observable, zip } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

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
  public isGamesLoading = true;

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

    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: query,
    });
  }

  private onRouteQuery() {
    this.activatedRoute.queryParamMap.pipe(
      tap(_ => this.isGamesLoading = true),
      map(params => this.parseQueryParams(params)),
    ).subscribe(({ hasSupportedQueryParams, platform }) => {
      this.shouldDisplayLandingGames = !hasSupportedQueryParams;

      this.updateSelectedPlatform(platform);

      hasSupportedQueryParams
        ? this.loadQueryGames(platform)
        : this.loadLandingGames();
    });
  }

  private updateSelectedPlatform(platform) {
    this.selectedPlatform = platform;
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
    this.platforms$ = this.contentfulService.getPlatforms().pipe(
      take(1),
      map(collection => collection.items.map(entry => entry.fields)),
    );
  }

  private loadQueryGames(queryPlatform) {
    const promise = queryPlatform
      ? this.loadQueryPlatformGames(queryPlatform)
      : this.contentfulService.getGames();

    $from(promise).pipe(
      take(1),
    ).subscribe(entries => {
      this.queryCount = entries.length;
      this.queryGames = entries;
      this.isGamesLoading = false;
    });
  }

  private loadQueryPlatformGames(queryPlatform) {
    return this.contentfulService.getPlatformBySlug(queryPlatform).pipe(
      take(1),
      switchMap(platform => {
        this.queryCaption = platform.fields.label;
        return this.contentfulService.getPlatformGames(platform.sys.id);
      })
    );
  }

  private loadLandingGames() {
    zip(
      this.homeService.loadFeaturedGames(),
      this.homeService.loadLatestGames(),
    ).pipe(take(1)).subscribe(([featureGames, latestGames]) => {
      this.featuredGames = featureGames;
      this.latestGames = latestGames;
      this.isGamesLoading = false;
    });
  }
}
