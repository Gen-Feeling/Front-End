import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllPost(): Observable<Post[]>{
    return this.http.get<Post[]>('https://genfeeling.herokuapp.com/post/all', this.token)
  }
  getByIdPost(id: number): Observable<Post>{
    return this.http.get<Post>(`https://genfeeling.herokuapp.com/post/${id}`, this.token)
  }

  postPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://genfeeling.herokuapp.com/post', post, this.token)
  }
  putPost(post: Post): Observable<Post> {
    return this.http.put<Post>('https://genfeeling.herokuapp.com/post', post, this.token)
  }

  deletePost(id: number){
    return this.http.delete(`https://genfeeling.herokuapp.com/post/${id}`, this.token)
  }
}
