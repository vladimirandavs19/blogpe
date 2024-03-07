import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { MenuModel } from '../../models/menu-model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  @ViewChild('searchquery') search!: ElementRef;

  abrirModal() {
    this.modal = true;
    setTimeout(() => {
      this.search.nativeElement.focus();
    }, 400);
  }

  cerrarModal() {
    this.modal = false;
  }
  menus: MenuModel[] = [
    {
      title: 'Inicio',
      link: ''
    },
    {
      title: 'Nosotros',
      link: 'about'
    },
    {
      title: 'Contacto',
      link: 'contact'
    }
  ]
}
