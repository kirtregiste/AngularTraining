import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{

  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }
}

  
  // getError(error: any) {
  //   let message = '';
  //   if (error.error instanceof ErrorEvent) {
  //       // handle client-side errors
  //       message = `Error: ${error.error.message}`;
  //   } else {
  //       // handle server-side errors
  //       message = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(message);
  //   return throwError(message);
  // }

