import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      value = value.filter(data => data.title.toLowerCase().includes(args.toLowerCase()));
    }
    return value;
  }

}
