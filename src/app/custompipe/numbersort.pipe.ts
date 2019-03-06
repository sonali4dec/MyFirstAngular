import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersort'
})
export class NumbersortPipe implements PipeTransform {

  sortNumbers(a,b){
    return a-b;
  }

  transform(value: any, args?: any): any {
    if(args === 'asc'){
      return value.sort((a,b) => a-b)
    } else if(args === 'dsc'){
      return value.sort((a,b)=> b-a)
    } else{
      return value;
    }
     
  }
}
