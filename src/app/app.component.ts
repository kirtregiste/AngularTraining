import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   viewMode = 'map';
//   post = {
//     title: "Title",
//     isFavorite: true
//   }
//   tweet = {
//     body: "Here is the body of a tweet..",
//     isLiked: true,
//     likesCount: 100

//   }

//   onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
//     console.log("Favorite Changed: ", eventArgs);
//   }
//   onLikedChanged(eventArgs: any) {
//     console.log("Liked changed: ", eventArgs)
//   }
// }
// export class AppComponent {
//   viewMode = 'list';
// }

// export class AppComponent {
//   courses = [
//     { id: 1, name: 'course1'},
//     { id: 2, name: 'course2'},
//     { id: 3, name: 'course3'},
//   ]
//   onAdd()
//   {
//     this.courses.push( {id: 4, name: 'course4'});
//   }
//   onRemove(course: any)
//   {
//     let index = this.courses.indexOf(course);
//     this.courses.splice(index, 1);
//   }
// }

export class AppComponent {
  courses: any;

  loadCourses()
  {
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
    ]
  }
  trackCourse(index: any, course: any) {
    course ? course.id : undefined
  }
  
}