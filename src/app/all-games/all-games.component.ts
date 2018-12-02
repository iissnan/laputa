import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';

import { ContentfulService } from '../core/contentful.service';
import { GameInterface } from '../typings';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'laputa-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {

  public games: Entry<GameInterface>[];
  public currentPage: number;
  public total: number;
  public pages: number;

  private readonly perPage = 15;

  constructor(
    private activatedRouter: ActivatedRoute,
    private contentfulService: ContentfulService,
  ) { }

  ngOnInit() {
    this.activatedRouter.queryParamMap.pipe(
      switchMap(queryParams => {
        const page = parseInt(queryParams.get('page'), 10) || 1;
        this.currentPage = page;

        return this.contentfulService.getGamesByPage(page, this.perPage);
      })
    ).subscribe (res => {
      this.games = res.items;
      this.total = res.total;
      this.pages = Math.ceil(this.total / this.perPage);
    });
  }

}
