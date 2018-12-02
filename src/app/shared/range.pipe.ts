import { Pipe, PipeTransform } from '@angular/core';
import { range } from 'lodash';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: any, start?: number, step?: number): number[] {
    return range(start || 0, value, step || 1);
  }

}
