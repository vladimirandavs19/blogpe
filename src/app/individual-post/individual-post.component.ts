import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButterService } from '../services/butter.service';
import { DataModel } from '../models/data-model';
import { PostInformationComponent } from "../app-shell/post-information/post-information.component";
import { PostModel } from '../models/post-model';
import { CommonModule } from '@angular/common';
import { PreviousNextComponent } from "../app-shell/previous-next/previous-next.component";


@Component({
    selector: 'app-individual-post',
    standalone: true,
    templateUrl: './individual-post.component.html',
    styleUrl: './individual-post.component.css',
    imports: [
        PostInformationComponent,
        CommonModule,
        PreviousNextComponent
    ]
})
export class IndividualPostComponent implements OnInit{
  post!: PostModel;
  data!: DataModel;
  constructor(private route: ActivatedRoute, private butter: ButterService) {
  }
  
  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.butter.getPost(slug ?? '').subscribe((resp: any) => {
      this.post = resp;
      this.data = resp.data;
    });
  }

}
