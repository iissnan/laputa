import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameGenreComponent } from './game-genre.component';

describe('GameGenreComponent', () => {
  let component: GameGenreComponent;
  let fixture: ComponentFixture<GameGenreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
