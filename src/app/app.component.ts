import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  tweet = {
    body: "Here is the body of a tweet..",
    isLiked: true,
    likesCount: 100

  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed: ", eventArgs);
  }
  onLikedChanged(eventArgs: any) {
    console.log("Liked changed: ", eventArgs)
  }
}
