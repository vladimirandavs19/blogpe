import { Component, Input } from '@angular/core';
import { DataModel } from '../../models/data-model';
import { RouterModule } from '@angular/router';
import { RecentPostPipe } from '../../pipes/recent-post.pipe';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-latest-post',
  standalone: true,
  imports: [
    RouterModule,
    RecentPostPipe,
    DatePipe
  ],
  templateUrl: './latest-post.component.html',
  styleUrl: './latest-post.component.css'
})
export class LatestPostComponent {
 @Input({required: true}) recentPost: DataModel[] = [];
 constructor() {

 }
}
