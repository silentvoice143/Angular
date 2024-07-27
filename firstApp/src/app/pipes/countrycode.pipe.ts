import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
  standalone: true,
})
export class CountrycodePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args);
    return '+91-' + value;
  }
}
