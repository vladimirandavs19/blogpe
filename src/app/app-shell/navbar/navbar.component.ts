import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { MenuModel } from '../../models/menu-model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  modal: boolean = false;
  menus: MenuModel[];
  @ViewChild('searchquery') search!: ElementRef;
  constructor(private menuService: MenuService) {
    this.menus = this.menuService.getMenus();
  }
  abrirModal() {
    this.modal = true;
    setTimeout(() => {
      this.search.nativeElement.focus();
    }, 400);
  }

  cerrarModal() {
    this.modal = false;
  }
}
