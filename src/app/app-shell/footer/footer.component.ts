import { Component } from '@angular/core';
import { MenuModel } from '../../models/menu-model';
import { MenuService } from '../../services/menu.service';
import { AuthorModel } from '../../models/author-model';
import { ButterService } from '../../services/butter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  menus: MenuModel[];
  author!: AuthorModel;
  constructor(private menuService: MenuService, private butter: ButterService) {
    this.menus = this.menuService.getMenus();
    this.butter.getAuthor('vladimir-miranda').subscribe((resp: any) => {
      this.author = resp.data;
    });
  }
}
