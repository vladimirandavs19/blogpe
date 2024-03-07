import { Component, Input, OnInit } from '@angular/core';
import { DataModel } from '../../models/data-model';
import { PostInformationComponent } from "../post-information/post-information.component";
import { SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-article',
    standalone: true,
    templateUrl: './article.component.html',
    styleUrl: './article.component.css',
    imports: [
      PostInformationComponent,
      SlicePipe,
      RouterModule
    ]
})
export class ArticleComponent implements OnInit {
  @Input({required: true}) post!: DataModel;
  constructor() {
  }
  ngOnInit(): void {

  }
}
