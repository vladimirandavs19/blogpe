import { Component } from '@angular/core';
import { ButterService } from '../services/butter.service';
import { AuthorModel } from '../models/author-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-author',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about-author.component.html',
  styleUrl: './about-author.component.css'
})
export class AboutAuthorComponent {
  slug: string = 'vladimir-miranda';
  author!: AuthorModel;
  constructor(private butter: ButterService) {
    this.butter.getAuthor(this.slug).subscribe((resp: any) => {
      this.author = resp.data;
    });
  }
}
