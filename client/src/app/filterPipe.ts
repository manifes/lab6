import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    if (filter['name']) {
      items = items.filter(item => item.name.indexOf(filter['name']) !== -1);
    }
    console.log(items);
    if (filter['type']) {
      items = items.filter(item => item.type === filter['type']);
    }
    if (filter['manufacturer']) {
      items = items.filter(item => item.manufacturer === filter['manufacturer']);
    }
    if (filter['fromPrice']) {
      items = items.filter(item => item.price >= filter['fromPrice']);
    }
    if (filter['toPrice']) {
      items = items.filter(item => item.price <= filter['toPrice']);
    }
    return items;
  }
}
