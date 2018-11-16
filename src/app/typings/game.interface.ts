import { Asset, Entry } from 'contentful';
import { PlatformInterface } from './platform.interface';
import { GenreInterface } from './genre.interface';

export interface GameInterface {
  name: string;
  cover: Asset;
  platforms: Entry<PlatformInterface>;
  genres: Entry<GenreInterface>;
  rating: number;
  digital: boolean;
  featured: boolean;
}
