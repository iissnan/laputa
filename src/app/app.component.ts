import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject, fromEvent } from 'rxjs';
import { scan, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'laputa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private isKonamiCodeActive = new Subject();

  constructor(
    @Inject(DOCUMENT) private doc,
  ) { }

  ngOnInit() {
    this.registerKonamiCode();
  }

  private registerKonamiCode() {
    const KEY_CODES = {
      ARROW_LEFT: 37,
      ARROW_UP: 38,
      ARROW_RIGHT: 39,
      ARROW_DOWN: 40,
      A: 65,
      B: 66,
      ENTER: 13,
    };
    const KONAMI_CODE = [
      KEY_CODES.ARROW_UP, KEY_CODES.ARROW_UP,
      KEY_CODES.ARROW_DOWN, KEY_CODES.ARROW_DOWN,
      KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_RIGHT,
      KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_RIGHT,
      KEY_CODES.B, KEY_CODES.A, KEY_CODES.ENTER,
    ];
    fromEvent(this.doc, 'keydown').pipe(
      takeUntil(this.isKonamiCodeActive),
      scan((codes: number[], event: KeyboardEvent) => {
        return [...codes, event.keyCode];
      }, []),
      map(codes => {
        return codes.length <= 12
          ? codes
          : codes.slice(-12, codes.length);
      })
    ).subscribe(codes => {
      const isLengthMatched = codes.length === KONAMI_CODE.length;
      const isMatched = isLengthMatched &&
        codes.every((code, index) => KONAMI_CODE[index] === code);

      if (isMatched) {
        this.isKonamiCodeActive.next(true);
      }
    });
  }
}
