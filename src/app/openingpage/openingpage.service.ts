import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpeningpageService {
  teeType;
  playercount: number[] = [];
  private apiUrl = 'https://golf-courses-api.herokuapp.com/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  getCourse(courseId: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${courseId}`)
  }
}
