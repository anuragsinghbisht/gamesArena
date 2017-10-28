import { Component, Input } from '@angular/core';

@Component({
  selector: 'ga-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {
  @Input() game;
  constructor() { }

}
