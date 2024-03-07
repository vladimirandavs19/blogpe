import { Pipe, PipeTransform } from '@angular/core';
import { DataModel } from '../models/data-model';

@Pipe({
  name: 'searhPost',
  standalone: true
})
export class SearhPostPipe implements PipeTransform {

  transform(posts: DataModel[], search: string): DataModel[] {
    if(posts === null){
      return [];
    }

    if(search === ''){
      return posts;
    }

    return posts.filter((post: DataModel) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
