import { Entry } from 'contentful';
import { PlatformInterface } from './platform.interface';

export interface PurchasedInterface {
  price: number;
  date: string;
  channel: string;
  platform: Entry<PlatformInterface>;
  comment: string;
}
