import { Injectable } from '@angular/core';
import { MenuModel } from '../models/menu-model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: MenuModel[] = [
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
  ];
  constructor() { }
  
  getMenus(): MenuModel[] {
    return this.menus;
  }
}
