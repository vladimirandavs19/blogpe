import { Component, Input } from '@angular/core';
import { TagModel } from '../../models/tag-model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input({required: true}) categories: TagModel[] = [];
}
