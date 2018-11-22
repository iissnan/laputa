import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { GameInterface } from '../typings';
import { GenreService } from './genre.service';


@Component({
  selector: 'laputa-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit, OnDestroy {

  public label: string;
  public games: GameInterface[] = [];
  private subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private genreService: GenreService,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap.pipe(
      switchMap( params => {
        const slug = params.get('slug');

        return from(this.genreService.loadGenre(slug));
      }),
      filter(genre => !!genre)
    ).subscribe(genre => {
      this.label = genre.fields.label;
      this.genreService.loadGenreGames(genre.sys.id)
        .then(games => this.games = games);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
