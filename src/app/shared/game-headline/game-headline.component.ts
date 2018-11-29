import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'laputa-game-headline',
  templateUrl: './game-headline.component.html',
  styleUrls: ['./game-headline.component.scss']
})
export class GameHeadlineComponent implements OnInit {

  @Input() title: string;
  @Input() count = 0;

  constructor() { }

  ngOnInit() {
  }

}
