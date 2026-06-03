import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Pipe({
  name: 'productfilter',
})
export class ProductfilterPipe implements PipeTransform {
  transform(value: IProduct[], filterId: string): IProduct[] {
    if (filterId === '0') {
      return value;
    }
    return value.filter(product => product.catId === parseInt(filterId));
  }
}
