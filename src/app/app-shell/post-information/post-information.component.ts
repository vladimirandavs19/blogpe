import { Component, Input, OnInit } from '@angular/core';
import { TagModel } from '../../models/tag-model';
import { AuthorModel } from '../../models/author-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-information',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './post-information.component.html',
  styleUrl: './post-information.component.css'
})
export class PostInformationComponent implements OnInit {
  @Input({required: true}) tag!: TagModel[];
  @Input({required: true}) categories!: TagModel[];
  @Input({required: true}) author!: AuthorModel;
  @Input({required: true}) published!: Date;
  tags: string = '';
  categoriesList: string = '';
  ngOnInit(): void {
    this.tags = this.tag.map((tag: TagModel) => tag.name).join(', ');
    this.categoriesList = this.categories.map((category: TagModel) => category.name).join(', ');
  }

}
