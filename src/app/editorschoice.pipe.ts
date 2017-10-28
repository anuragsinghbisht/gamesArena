import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editorschoice'
})
export class EditorschoicePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 'Y') {
      return 'Yes';
    } else if (value === 'N') {
      return 'No';
    } else {
      return value;
    }
  }

}
