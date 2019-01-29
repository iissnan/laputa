import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient, Entry, EntryCollection } from 'contentful';
import { from as $from, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { GameInterface, GenreInterface, PlatformInterface } from '../typings';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private _locale: string;
  private _perPage = 10;
  private readonly client: ContentfulClientApi;

  get locale() {
    return this._locale;
  }

  set locale(locale: string) {
    this._locale = locale;
  }

  get perPage() {
    return this._perPage;
  }

  set perPage(value: number) {
    this._perPage = value;
  }

  constructor() {
    this.locale = environment.contentful.locale;
    this.client = createClient({
      space: environment.contentful.space,
      accessToken: environment.contentful.token,
    });
  }

  public getGames(options?: object): Observable<EntryCollection<GameInterface>> {
    const query = this.getContentTypeQuery(
      environment.contentful.contentTypes.game,
      options,
    );

    return $from(this.client.getEntries<GameInterface>(query));
  }

  public getGamesByPage(page: number, perPage?: number, options?: object): Observable<EntryCollection<GameInterface>> {
    const limit = perPage || this.perPage;
    const skip = (page - 1) * limit;
    const query = this.getContentTypeQuery(
      environment.contentful.contentTypes.game,
      { ...options, skip, limit, order: '-sys.createdAt' },
    );

    return $from(
      this.client.getEntries<GameInterface>(query),
    ).pipe(
      take(1)
    );
  }

  public getGame(id: string): Promise<Entry<GameInterface>> {
    return this.client.getEntry<GameInterface>(id, {
      locale: this._locale,
    });
  }

  public getPlatforms(options?: object): Observable<EntryCollection<PlatformInterface>> {
    const query = this.getContentTypeQuery(
      environment.contentful.contentTypes.platform,
      { order: 'fields.order', ...options },
    );

    return $from(this.client.getEntries<PlatformInterface>(query));
  }

  public getPlatformBySlug(slug: string): Observable<Entry<PlatformInterface>> {
    const query = { 'fields.slug': slug };

    return this.getPlatforms(query).pipe(
      map(res => res.items[0]),
    );
  }

  public getPlatformGames(id: string, options?: object): Observable<EntryCollection<GameInterface>> {
    return this.getGames({
      'fields.platforms.sys.id': id,
      'order': '-fields.rating,-sys.createdAt',
      ...options,
    });
  }

  public getGenres(options?: object): Observable<EntryCollection<GenreInterface>> {
    const query = this.getContentTypeQuery(
      environment.contentful.contentTypes.genre,
      options,
    );

    return $from(this.client.getEntries<GenreInterface>(query));
  }

  public getGenreBySlug(slug: string): Observable<Entry<GenreInterface>> {
    const query = { 'fields.slug': slug };

    return this.getGenres(query).pipe(
      map(res => res.items[0]),
    );
  }

  public getGenreGames(id: string): Observable<EntryCollection<GameInterface>> {
    return this.getGames({
      'fields.genres.sys.id': id,
      'order': '-fields.rating,-sys.createdAt',
    });
  }

  private getContentTypeQuery(contentType: string, query: object = {}) {
    return {
      locale: this.locale,
      content_type: contentType,
      ...query,
    };
  }

}
