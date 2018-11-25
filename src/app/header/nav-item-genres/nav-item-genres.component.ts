import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

import { GenreInterface } from '../../typings';
import { HeaderService } from '../header.service';

@Component({
  selector: 'laputa-nav-item-genres',
  templateUrl: './nav-item-genres.component.html',
  styleUrls: ['./nav-item-genres.component.scss']
})
export class NavItemGenresComponent implements OnInit {

  public children$: Observable<GenreInterface[]>;

  constructor(
    private headerService: HeaderService,
  ) { }

  ngOnInit() {
    this.children$ = from(this.headerService.loadGenres({
      order: 'sys.createdAt',
    }));
  }

}
