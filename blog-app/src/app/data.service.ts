import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  GetPosts(){
  	return this.http.get('https://my-json-server.typicode.com/vaidasalek/blog-page-angularjs/posts');
  }
}
