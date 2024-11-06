import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'directive',
  standalone: true
})
export class DirectivePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
