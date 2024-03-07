import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchquery') searchElement!: ElementRef;
  textoBusqueda: string = '';
  constructor() { }
  buscar() {
    this.search.emit(this.searchElement.nativeElement.value);
  }
  limpiar() {
    this.search.emit('');
  }
}
