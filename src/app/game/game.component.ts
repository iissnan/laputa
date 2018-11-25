import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';
import { Entry } from 'contentful';

import { ContentfulService } from '../core/contentful.service';
import { GameInterface } from '../typings';

@Component({
  selector: 'laputa-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  public game: Entry<GameInterface>;
  private subscription: Subscription;

  constructor(
    private activatedRouted: ActivatedRoute,
    private contentfulService: ContentfulService,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRouted.paramMap.pipe(
      tap(_ => { this.game = null; }),
      switchMap(params => {
        const id = params.get('id');

        return from(this.contentfulService.getGame(id));
      }),
    ).subscribe(game => {
      this.game = game;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
