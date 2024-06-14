import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitSymbols'
})
export class LimitSymbolsPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 95 ? value.substring(0,180) + "..." : value;
  }

}
