import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../models/istudent';

@Pipe({
  name: 'studentfilter',
  pure: false// impure pipe
})
export class StudentfilterPipe implements PipeTransform {
  transform(value:IStudent[]): IStudent[] {
     let res:IStudent[] = [];
     for(let index = 0;index< value.length;index++){
      const element = value[index];
      if(element.name.includes("m"))
        res.push(element)
     }

     return res;

  }
}
