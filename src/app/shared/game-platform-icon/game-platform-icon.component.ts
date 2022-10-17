import { Component, Input, OnInit } from '@angular/core';
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

const iconSupportedPlatforms: {
  [key: string]: any;
} = {
  'Xbox One': 'xbox',
  'Play Station 4': 'playstation',
  'Steam': 'steam',
  'iOS': 'app-store',
};

@Component({
  selector: 'laputa-game-platform-icon',
  templateUrl: './game-platform-icon.component.html',
  styleUrls: ['./game-platform-icon.component.scss']
})
export class GamePlatformIconComponent implements OnInit {

  @Input() platformName: string;
  @Input() iconSize: SizeProp;

  public isIconSupport = false;
  public iconName: any;

  constructor() {
  }

  ngOnInit() {
    this.isIconSupport = Object.keys(iconSupportedPlatforms).includes(this.platformName);
    this.iconName = iconSupportedPlatforms[this.platformName];
  }
}
