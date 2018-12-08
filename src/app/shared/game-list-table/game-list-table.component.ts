import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'contentful';

import { GameInterface } from '../../typings';

@Component({
  selector: 'laputa-game-list-table',
  templateUrl: './game-list-table.component.html',
  styleUrls: ['./game-list-table.component.scss']
})
export class GameListTableComponent implements OnInit {

  @Input() games: Entry<GameInterface>[];

  constructor() { }

  ngOnInit() {
  }

}
