import {Component, NgZone, OnInit} from '@angular/core';
import {Player} from "../playerinterface";
import {OpeningpageService} from "../openingpage/openingpage.service";
import { NameService } from "../name.service";

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.css']
})
export class MaincardComponent implements OnInit {
  course;
  players;
  playerArray: Player[] = [];
  selectedTeeType;

  constructor( private db: OpeningpageService, private nameservice: NameService, private ngzone: NgZone) { }

  ngOnInit() {
    this.db.getCourse(this.db.teeType).subscribe(course =>
      this.course = course);
    this.ngzone.run(() => {
      this.players = this.db.playercount;
    });
    this.selectedTeeType = this.db.teeType;
    this.playerArray = this.nameservice.playerArray;
  }


  logScore(test, hole: any, playerIndex: number) {
    Math.abs(test);
    if (hole <= 9) {
      this.playerArray[playerIndex].inscore += Number(test);
      this.playerArray[playerIndex].totalscore += Number(test);
    } else {
      this.playerArray[playerIndex].outscore += Number(test);
      this.playerArray[playerIndex].totalscore += Number(test);
    }
  }

  postGame() {
    this.afs.collection('golf-games').add({ game: this.playerArray});
  }
}
