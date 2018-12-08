import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'contentful';

import { GameInterface } from '../../typings';

@Component({
  selector: 'laputa-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @Input() caption: string;
  @Input() count: number;
  @Input() games: Entry<GameInterface>[];

  constructor() { }

  ngOnInit() {
  }

}
