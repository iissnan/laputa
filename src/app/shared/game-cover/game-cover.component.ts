import { Component, Input, OnInit } from '@angular/core';
import { Asset } from 'contentful';

@Component({
  selector: 'laputa-game-cover',
  templateUrl: './game-cover.component.html',
  styleUrls: ['./game-cover.component.scss']
})
export class GameCoverComponent implements OnInit {

  @Input() cover: Asset;

  public width = 250;

  constructor() { }

  ngOnInit() {
  }

}
