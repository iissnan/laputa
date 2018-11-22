import { Component, Input, OnInit } from '@angular/core';
import { GameInterface } from '../../typings';

@Component({
  selector: 'laputa-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {

  @Input() game: GameInterface;

  constructor() { }

  ngOnInit() {
  }

}
