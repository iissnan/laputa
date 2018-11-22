import { Component, Input, OnInit } from '@angular/core';

const iconSupportedPlatforms: {
  [key: string]: string;
} = {
  'Nintendo Switch': 'nintendo-switch',
  'Xbox One': 'xbox',
  'Play Station 4': 'playstation',
  'Steam': 'steam',
  'iOS': 'app-store',
};

@Component({
  selector: 'laputa-game-platform',
  templateUrl: './game-platform.component.html',
  styleUrls: ['./game-platform.component.scss']
})
export class GamePlatformComponent implements OnInit {

  @Input() name: string;

  public isIconSupport = false;
  public iconName: string;

  constructor() { }

  ngOnInit() {
    this.isIconSupport = Object.keys(iconSupportedPlatforms).includes(this.name);
    this.iconName = iconSupportedPlatforms[this.name];
  }

  public getClassName(): string[] {
    const platformClassName = this.name
      .replace(/\s\S*?/g, '-')
      .toLowerCase();
    const platformSupportIcon = this.isIconSupport ?
      'platform-with-icon' :
      'platform-with-image';

    return [platformClassName, platformSupportIcon];
  }

}
