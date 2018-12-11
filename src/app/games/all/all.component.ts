import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Entry } from 'contentful';
import { switchMap, tap } from 'rxjs/operators';

import { ContentfulService } from '../../core/contentful.service';
import { GameInterface } from '../../typings';

@Component({
  selector: 'laputa-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  public games: Entry<GameInterface>[];
  public isGamesLoading = false;
  public currentPage: number;
  public total: number;
  public readonly perPage = 15;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private contentfulService: ContentfulService,
  ) { }

  ngOnInit() {
    this.activatedRouter.queryParamMap.pipe(
      tap(_ => { this.isGamesLoading = true; }),
      switchMap(queryParams => {
        const page = parseInt(queryParams.get('page'), 10) || 1;
        this.currentPage = page;

        return this.contentfulService.getGamesByPage(page, this.perPage);
      })
    ).subscribe (res => {
      this.games = res.items;
      this.total = res.total;
      this.isGamesLoading = false;
    });
  }

  public onPageSelect(page) {
    this.currentPage = page;
    this.router.navigate(['.'], {
      relativeTo: this.activatedRouter,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    }).then(_ => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
