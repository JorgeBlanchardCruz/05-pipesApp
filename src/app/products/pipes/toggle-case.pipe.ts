import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  public transform(value: string, toUpper: boolean = false): string {

    return toUpper === false ? value.toLowerCase() : value.toUpperCase();
  }

}
