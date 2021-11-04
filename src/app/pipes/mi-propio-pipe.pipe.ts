import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPropioPipe'
})
export class MiPropioPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
