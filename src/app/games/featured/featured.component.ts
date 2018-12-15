import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { switchMap, tap } from 'rxjs/operators';

import { GamesService } from '../games.service';


@Component({
  selector: 'laputa-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  public games;
  public total = 0;
  public perPage = 16;
  public currentPage = 1;
  public isGamesLoading = true;

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.pipe(
      tap(_ => this.isGamesLoading = true),
      switchMap(params => {
        this.currentPage = parseInt(params.get('page'), 10) || 1;
        return this.gamesService.loadFeaturedGames({
          limit: this.perPage,
          skip: (this.currentPage - 1) * this.perPage,
        });
      }),
    ).subscribe(res => {
      this.total = res.total;
      this.games = res.items;
      this.isGamesLoading = false;
    });
  }

  public onPageSelect(page) {
    this.currentPage = page;
    const queryPage = (!this.currentPage || this.currentPage === 1) ? null : this.currentPage;
    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: { page: queryPage },
      queryParamsHandling: 'merge'
    }).then(_ => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
