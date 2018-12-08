import { Asset, Entry } from 'contentful';
import { PlatformInterface } from './platform.interface';
import { GenreInterface } from './genre.interface';

export interface GameInterface {
  id: string;
  name: string;
  cover: Asset;
  platforms: Entry<PlatformInterface>[];
  genres: Entry<GenreInterface>[];
  rating: number;
  digital: boolean;
  featured: boolean;
  chinese: boolean;
  players: number;
  completed: boolean;
  screenshots: Asset[];
  purchased: {
    fields: {
      price: number;
      date: string;
      channel: string;
      comment: string;
    };
  };
}
