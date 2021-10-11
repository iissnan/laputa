import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameHeadlineComponent } from './game-headline.component';

describe('GameHeadlineComponent', () => {
  let component: GameHeadlineComponent;
  let fixture: ComponentFixture<GameHeadlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
