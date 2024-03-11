import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButterService } from '../../services/butter.service';
import { TagModel } from '../../models/tag-model';
import { DataModel } from '../../models/data-model';

@Component({
  selector: 'app-type-search',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './type-search.component.html',
  styleUrl: './type-search.component.css'
})
export class TypeSearchComponent implements OnInit {
posts!: TagModel;
nombre: string = '';
constructor(private route: ActivatedRoute, private butter: ButterService) {

}
  ngOnInit(): void {
    const searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    const name = this.route.snapshot.paramMap.get('name');
    switch(name){
      case "categories":
        this.nombre = "Categoría"
        break;
      case "tags":
        this.nombre = "Etiqueta"
        break;
    }
    this.butter.getPostsByName(name ?? '', searchTerm ?? '').subscribe((resp: any) => {
      this.posts = resp.data;
    });
  }
}
