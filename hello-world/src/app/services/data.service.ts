import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';


export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      )
  }

  create(resource: any)  {
    return this.http.post<ICreateResponse>(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
        )
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .pipe(
        catchError(this.handleError)
      )
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    if (error.status == 400)
          return throwError(new BadInputError())
    if (error.status === 404)
        return throwError(new NotFoundError())
    else
      return throwError(new AppError())
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


export interface ICreateResponse{
  id: string
}