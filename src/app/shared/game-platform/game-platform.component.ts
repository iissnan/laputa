import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'laputa-game-platform',
  templateUrl: './game-platform.component.html',
  styleUrls: ['./game-platform.component.scss']
})
export class GamePlatformComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() { }

  public getClassName(): string {
    return this.name
      .replace(/\s\S*?/g, '-')
      .toLowerCase();
  }
}
