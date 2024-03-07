import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ButterService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostModel>{
    return this.http.get<PostModel>(`${environment.api}/posts/?exclude_body=true&auth_token=${environment.token}`);
  }

  getPost(slug: string): Observable<PostModel>{
    return this.http.get<PostModel>(`${environment.api}/posts/${slug}/?auth_token=${environment.token}`);
  }

  getAuthor(slug: string): Observable<PostModel>{
    return this.http.get<PostModel>(`${environment.api}/authors/${slug}/?include=recent_posts&auth_token=${environment.token}`);
  }
}
