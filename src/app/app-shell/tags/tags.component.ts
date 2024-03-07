import { Component, Input } from '@angular/core';
import { TagModel } from '../../models/tag-model';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  @Input({required: true}) tags: TagModel[] = [];
}
