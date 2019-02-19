import { Component, OnInit } from '@angular/core';
import { Player } from "../playerinterface";
import {OpeningpageService} from "../openingpage/openingpage.service";
import {NameService} from "../name.service";

@Component({
  selector: 'app-playernames',
  templateUrl: './playernames.component.html',
  styleUrls: ['./playernames.component.css']
})
export class PlayernamesComponent implements OnInit {
  playerCount: number[] = [];
  playerArray: Player[] = [];
  playerName = '';
  disableButton = false;
  courseId;

  constructor(private openingpageservice: OpeningpageService, private nameservice: NameService) { }

  ngOnInit() {
    this.playerCount = this.openingpageservice.playercount;
    this.courseId = this.openingpageservice.teeType;
  }
  logName() {
    if (this.playerArray.length === this.playerCount.length) {
      this.disableButton = true;
    } else  {
      this.playerArray.push({ name: this.playerName, 
        inscore: 0, 
        outscore: 0, 
        totalscore: 0, 
        courseId: 
        this.courseId });
      console.log(this.playerArray);
      this.playerName = '';
    }

  }
  nextPage() {
    this.nameservice.playerArray = this.playerArray;
    this.router.navigate(['mainPage']);
  }

}
