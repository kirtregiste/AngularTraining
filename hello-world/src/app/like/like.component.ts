import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount') likesCount: number = 0;

  @Input('isLiked') isLiked: boolean = false;
  @Output('change') click = new EventEmitter();


  onClick() {

    if(this.isLiked)
      this.likesCount--;
    else
      this.likesCount++;

    this.isLiked = !this.isLiked;
  
    this.click.emit({
      newValue: this.isLiked
    });
  }
}
