import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import { GameInterface } from '../typings';
import { PlatformService } from './platform.service';


@Component({
  selector: 'laputa-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit, OnDestroy {

  public name: string;
  public games: GameInterface[] = [];
  private subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private platformService: PlatformService,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap( params => {
        const slug = params.get('slug');

        return from(this.platformService.loadPlatform(slug));
      }),
      filter(platform => !!platform)
    ).subscribe(platform => {
      this.name = platform.fields.name;
      this.platformService.loadPlatformGames(platform.sys.id)
        .then(games => this.games = games);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
