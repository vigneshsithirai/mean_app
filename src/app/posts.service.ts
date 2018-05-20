import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('http://localhost:3070/api/posts')
      .map(res => res.json());
  }
  signUp(data) {
    return this.http.post('http://localhost:3070/api/signup', data).map(res => res.json());
  }
}
