import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlatformInterface } from '../../typings';
import { HeaderService } from '../header.service';


@Component({
  selector: 'laputa-nav-item-platforms',
  templateUrl: './nav-item-platforms.component.html',
  styleUrls: ['./nav-item-platforms.component.scss']
})
export class NavItemPlatformsComponent implements OnInit {

  public children$: Observable<PlatformInterface[]>;

  constructor(
    private headerService: HeaderService,
  ) { }

  ngOnInit() {
    this.children$ = this.headerService.loadPlatforms();
  }

}
