import { Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CourseService {
  exampleId: number;
  selectedTeeType;
  numberOfPlayers: number[] = [];
  private courseUrl = 'https://golf-courses-api.herokuapp.com/courses';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<any>{
    return this.http.get<any>(this.courseUrl).pipe(
      map(data => data.courses),
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getCourse(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.courseUrl}/${courseId}`).pipe(
      map(response => response.data),
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }



  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is ${err.status}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
