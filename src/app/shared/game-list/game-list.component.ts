import { Component, Input, OnInit } from '@angular/core';

import { GameInterface } from '../../typings';

@Component({
  selector: 'laputa-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.less']
})
export class GameListComponent implements OnInit {

  @Input() games: GameInterface[];

  constructor() { }

  ngOnInit() {
  }

}
