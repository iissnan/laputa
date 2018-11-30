import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'laputa-game-rating',
  templateUrl: './game-rating.component.html',
  styleUrls: ['./game-rating.component.scss']
})
export class GameRatingComponent implements OnInit {

  @Input() rating: number;

  constructor() { }

  ngOnInit() {

  }

}
