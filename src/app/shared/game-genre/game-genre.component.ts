import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'laputa-game-genre',
  templateUrl: './game-genre.component.html',
  styleUrls: ['./game-genre.component.scss']
})
export class GameGenreComponent implements OnInit {

  @Input() genre: string;

  constructor() { }

  ngOnInit() {
  }

}
