import { Component, Input } from '@angular/core';
import { TagModel } from '../../models/tag-model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input({required: true}) categories: TagModel[] = [];
}
