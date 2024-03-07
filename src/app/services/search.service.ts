import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly searchText: Observable<string> = this.searchTextSubject.asObservable();
  constructor() { }
  setFilterText(text: string): void {
    this.searchTextSubject.next(text);
  }
}
