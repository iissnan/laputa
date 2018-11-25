import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'contentful';

import { GameInterface } from '../../typings';

@Component({
  selector: 'laputa-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {

  @Input() game: Entry<GameInterface>;

  constructor() { }

  ngOnInit() {
  }

}
