import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';
import { from as $from, Observable, zip } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { GameInterface, GenreInterface, PlatformInterface } from '../typings';
import { ContentfulService } from '../core/contentful.service';
import { HomeService } from './home.service';

@Component({
  selector: 'laputa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public platforms$: Observable<PlatformInterface[]>;
  public genres$: Observable<GenreInterface[]>;
  public queryGames: Entry<GameInterface>[];
  public featuredGames: Entry<GameInterface>[];
  public latestGames: Entry<GameInterface>[];
  public shouldDisplayLandingGames = false;

  private SUPPORTED_QUERY_PARAMS = {
    platform: 'platform',
    genre: 'genre',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentfulService: ContentfulService,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.onRouteQuery();
    this.loadPlatforms();
    this.loadGenres();
  }

  private onRouteQuery() {
    this.activatedRoute.queryParamMap.pipe(
      map(params => this.parseQueryParams(params)),
    ).subscribe(({ hasSupportedQueryParams, platform, genre }) => {
      this.shouldDisplayLandingGames = !hasSupportedQueryParams;

      if (hasSupportedQueryParams) {
        this.loadQueryGames(platform, genre);
      } else {
        this.loadLandingGames();
      }
    });
  }

  private parseQueryParams(params: ParamMap) {
    const platform = params.get(this.SUPPORTED_QUERY_PARAMS.platform);
    const genre = params.get(this.SUPPORTED_QUERY_PARAMS.genre);
    const hasSupportedQueryParams = platform || genre;

    return {
      hasSupportedQueryParams: hasSupportedQueryParams,
      platform: platform,
      genre: genre,
    };
  }

  private loadPlatforms() {
    this.platforms$ = $from(this.contentfulService.getPlatforms()).pipe(
      take(1),
      map(entries => entries.map(entry => entry.fields)),
    );
  }

  private loadGenres() {
    this.genres$ = $from(this.contentfulService.getGenres()).pipe(
      take(1),
      map(entries => entries.map(entry => entry.fields)),
    );
  }

  private loadQueryGames(queryPlatform, queryGenre) {
    const promise = queryPlatform ?
      $from(this.contentfulService.getPlatformBySlug(queryPlatform)).pipe(
        take(1),
        switchMap(platform => {
          return this.contentfulService.getPlatformGames(platform.sys.id);
        })
      ) :
      this.contentfulService.getGames();

    $from(promise).pipe(
      take(1),
    ).subscribe(entries => {
      this.queryGames = queryGenre ? entries.filter(entry => {
        return entry.fields.genres && entry.fields.genres.some(genre => {
          return genre.fields.slug === queryGenre;
        });
      }) : entries;
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
