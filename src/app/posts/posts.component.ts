import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: any;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    this.posts.splice(0,0, post);

    input.value = '';

    this.service.create(post)
    .subscribe(
      newPost => {
      post['id'] = newPost.id;
      }, 
      (error: BadInputError) => {
        this.posts.splice(0,1);
        
        if (error instanceof BadInputError) {
            alert('Bad Input')
            //this.form.setErrors(error.originalError);
          }
        else throw error;
      })
  }

  updatePost(post: any) {
    this.service.update(post)
    .subscribe(
      updatedPost => {
      console.log(updatedPost)
      });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    .subscribe(
      () => {
      }, 
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError)
          alert('This post has already been deleted')
        else throw error;
      })
  }
}
