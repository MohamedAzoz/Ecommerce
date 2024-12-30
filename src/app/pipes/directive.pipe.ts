import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'directive',
  standalone: true
})
export class DirectivePipe implements PipeTransform {

  transform(value: number,des:number=25): number {
    let number=des/100;
    let mul=value*number;
    let val=value-mul;
    return val;
  }

}
