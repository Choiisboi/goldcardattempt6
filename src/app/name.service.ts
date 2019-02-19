import { Injectable } from '@angular/core';
import { Player } from "../../node_modules/@angular/core/src/render3/interfaces/player";

@Injectable({
  providedIn: 'root'
})
export class NameService {
  playerArray: Player[] = [];
  constructor() { }
}
