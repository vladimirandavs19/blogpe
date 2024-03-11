import { Component, Input } from '@angular/core';
import { TagModel } from '../../models/tag-model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  @Input({required: true}) tags: TagModel[] = [];
  constructor() {}
}
