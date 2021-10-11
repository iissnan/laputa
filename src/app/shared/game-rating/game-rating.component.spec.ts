import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameRatingComponent } from './game-rating.component';

describe('GameRatingComponent', () => {
  let component: GameRatingComponent;
  let fixture: ComponentFixture<GameRatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
