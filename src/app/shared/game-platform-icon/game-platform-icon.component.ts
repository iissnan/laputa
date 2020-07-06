import { Component, Input, OnInit } from '@angular/core';

const iconSupportedPlatforms: {
  [key: string]: string;
} = {
  'Xbox One': 'xbox',
  'Play Station 4': 'playstation',
  'Steam': 'steam',
  'iOS': 'app-store',
};

enum IconSize {
  xs = 'xs',
  sm = 'sm',
  lg = 'lg',
  '2x' = '2x',
  '3x' = '3x',
  '5x' = '5x',
}

@Component({
  selector: 'laputa-game-platform-icon',
  templateUrl: './game-platform-icon.component.html',
  styleUrls: ['./game-platform-icon.component.scss']
})
export class GamePlatformIconComponent implements OnInit {

  @Input() platformName: string;
  @Input() iconSize: IconSize;

  public isIconSupport = false;
  public iconName: string;

  constructor() {
  }

  ngOnInit() {
    this.isIconSupport = Object.keys(iconSupportedPlatforms).includes(this.platformName);
    this.iconName = iconSupportedPlatforms[this.platformName];
  }
}
