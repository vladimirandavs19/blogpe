import { Pipe, PipeTransform } from '@angular/core';
import { DataModel } from '../models/data-model';

@Pipe({
  name: 'recentPostPipe',
  standalone: true
})
export class RecentPostPipe implements PipeTransform {

  transform(items: DataModel[]): DataModel[] {
    if (!items) {
      return [];
    }
    let fecha = new Date();
    fecha.setMonth(fecha.getMonth() - 1);
    return items.filter((post: DataModel) => {
      let fechaPost = new Date(post.published);
      return fechaPost > fecha;
    });
  }

}
