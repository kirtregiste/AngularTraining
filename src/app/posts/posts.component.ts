import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any;

  constructor(http: HttpClient) { 
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response;
    })
  }



}
