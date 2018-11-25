import { Injectable } from '@angular/core';
import { createClient, ContentfulClientApi, Entry } from 'contentful';

import { environment } from '../../environments/environment';
import { GameInterface, GenreInterface, PlatformInterface } from '../typings';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private _locale: string;
  private readonly client: ContentfulClientApi;

  get locale() {
    return this._locale;
  }

  set locale(locale: string) {
    this._locale = locale;
  }

  constructor() {
    this.locale = environment.contentful.locale;
    this.client = createClient({
      space: environment.contentful.space,
      accessToken: environment.contentful.token,
    });
  }

  public getGames(options?: object): Promise<Entry<GameInterface>[]> {
    const query = this.getContentTypeQuery(
      environment.contentful.contentTypes.game,
      options,
    );

    return this.client.getEntries<GameInterface>(query)
      .then(res => res.items)
      .catch(_ => []);
  }

  public getGame(id: string): Promise<Entry<GameInterface>> {
    return this.client.getEntry<GameInterface>(id, {
      locale: this._locale,
    });
  }

  public getPlatforms(options?: object): Promise<Entry<PlatformInterface>[]> {
    const query = this.getContentTypeQuery(
      environment.contentful.contentTypes.platform,
      { order: 'fields.order', ...options },
    );

    return this.client.getEntries<PlatformInterface>(query)
      .then(res => res.items)
      .catch(_ => []);
  }

  public getPlatformBySlug(slug: string): Promise<Entry<PlatformInterface>> {
    const query = { 'fields.slug': slug };

    return this.getPlatforms(query)
      .then(res => res[0])
      .catch(_ => null);
  }

  public getPlatformGames(id: string): Promise<Entry<GameInterface>[]> {
    return this.getGames({
      'fields.platforms.sys.id': id,
      'order': '-fields.rating,-sys.createdAt'
    });
  }

  public getGenres(options?: object): Promise<Entry<GenreInterface>[]> {
    const query = this.getContentTypeQuery(
      environment.contentful.contentTypes.genre,
      options,
    );

    return this.client.getEntries<GenreInterface>(query)
      .then(res => res.items)
      .catch(_ => []);
  }

  public getGenreBySlug(slug: string): Promise<Entry<GenreInterface>> {
    const query = { 'fields.slug': slug };

    return this.getGenres(query)
      .then(res => res[0])
      .catch(_ => null);
  }

  public getGenreGames(id: string): Promise<Entry<GameInterface>[]> {
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
