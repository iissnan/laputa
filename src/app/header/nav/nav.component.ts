import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { PlatformInterface } from '../../typings';

@Component({
  selector: 'laputa-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() items: any[];

  public platforms: PlatformInterface[];

  constructor(
    private headerService: HeaderService,
  ) {
    this.items = [
      {
        id: 'platforms',
        trigger: {
          icon: 'gamepad',
          label: '游戏平台',
        },
        childrenRouterPrefix: '/platforms',
        children: [],
        active: false,
      },
      {
        id: 'genres',
        trigger: {
          icon: 'th-list',
          label: '游戏类别'
        },
        childrenRouterPrefix: '/genres',
        children: [],
        active: false,
      }
    ];
  }

  ngOnInit() {
    this.headerService.loadPlatforms()
      .then(platforms => {
        this.items[0].children = platforms;
      });

    this.headerService.loadGenres()
      .then(genres => {
        this.items[1].children = genres;
      });
  }

  public onMouseEnter($event, entry) {
    this.items.forEach(item => {
      item.active = entry.id === item.id;
    });
  }

  public onMouseLeave($event, item) {
    item.active = false;
  }

}
