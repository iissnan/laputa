import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameCoverComponent } from './game-cover.component';

describe('GameCoverComponent', () => {
  let component: GameCoverComponent;
  let fixture: ComponentFixture<GameCoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
