import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      return value.sort((lhs, rhs) => {
        if (args === 'ascending') {
          return lhs.score - rhs.score;
        } else {
          return rhs.score - lhs.score;
        }
      });
    }
    return value;
  }

}
