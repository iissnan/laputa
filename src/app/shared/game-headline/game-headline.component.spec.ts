import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHeadlineComponent } from './game-headline.component';

describe('GameHeadlineComponent', () => {
  let component: GameHeadlineComponent;
  let fixture: ComponentFixture<GameHeadlineComponent>;

  beforeEach(async(() => {
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
