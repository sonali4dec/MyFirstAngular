import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'livesearch'
})
export class LivesearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args === ""){
      return value;
    }
    return value.filter(function(v){
      return v.name.toLowerCase().includes(args.toLowerCase());
    })
  }

}
