import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../app-shell/search/search.component';
import { CategoriesComponent } from '../app-shell/categories/categories.component';
import { TagsComponent } from '../app-shell/tags/tags.component';
import { ArticleComponent } from '../app-shell/article/article.component';
import { LatestPostComponent } from '../app-shell/latest-post/latest-post.component';
import { ButterService } from '../services/butter.service';
import { PostModel } from '../models/post-model';
import { CommonModule } from '@angular/common';
import { DataModel } from '../models/data-model';
import { TagModel } from '../models/tag-model';
import { SearhPostPipe } from '../pipes/searh-post.pipe';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  imports: [
    SearchComponent,
    CategoriesComponent,
    TagsComponent,
    ArticleComponent,
    LatestPostComponent,
    CommonModule,
    SearhPostPipe,
  ],
})
export class IndexComponent implements OnInit {
  post!: PostModel;
  searchText: string = '';
  constructor(private butter: ButterService, private searchService: SearchService) {
    this.butter.getPosts().subscribe((data: PostModel) => {
      this.post = data;
    });
  }
  ngOnInit(): void {
    this.searchService.searchText.subscribe((text: string) => {
      this.searchText = text;
    });
  }
  buscarPost($event: string) {
    this.searchText = $event;
  }
  consultarTag(data: DataModel[]): TagModel[] {
    let tags: TagModel[] = [];
    data.forEach((post: DataModel) => {
      post.tags.forEach((tag: TagModel) => {
        let index = tags.findIndex((t: TagModel) => t.name === tag.name);
        if (index !== -1) {
          tags[index].count++;
        } else {
          tag.count = 1;
          tags.push(tag);
        }
      });
    });
    return tags;
  }
  consultarCategorias(data: DataModel[]): TagModel[] {
    let categorias: TagModel[] = [];
    data.forEach((post: DataModel) => {
      post.categories.forEach((category: TagModel) => {
        let index = categorias.findIndex(
          (cat: TagModel) => cat.name === category.name
        );
        if (index !== -1) {
          categorias[index].count++;
        } else {
          category.count = 1;
          categorias.push(category);
        }
      });
    });
    return categorias;
  }
}
