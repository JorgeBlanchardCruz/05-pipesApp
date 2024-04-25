import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  public transform(value: boolean): 'Yep' | 'Nope' {

    return value ? 'Yep' : 'Nope';
  }

}
