import { Component, OnInit } from '@angular/core';
import { OpeningpageService } from './openingpage.service';


@Component({
  selector: 'app-openingpage',
  templateUrl: './openingpage.component.html',
  styleUrls: ['./openingpage.component.css']
})
export class OpeningpageComponent implements OnInit {
  courses: number;
  selectedCourseId: number;
  selctedCourse: any;
  playerArray: number[] = [];

  constructor( private openingpageservice: OpeningpageService) { }

  ngOnInit() {
    this.openingpageservice.getCourses().subscribe(
      courses => {
        this.courses = courses;
      }
    )
  }

  getCourseInfo() {
    this.openingpageservice.getCourses(this.selectedCourseId).subscribe( course => this.selctedCourse = course);
  }

  playerTurn($event){
    this.playerArray = [];
    for(let i = 0; i < $event.value; i++) {
      this.playerArray.push(i);
    }
    this.openingpageservice.playercount = this.playerArray;
  }

  teetype($event){
    Number($event.value);
    $event.value -= 1;
    this.openingpageservice = $event.value
  }
}
