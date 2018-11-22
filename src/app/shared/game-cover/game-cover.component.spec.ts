import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCoverComponent } from './game-cover.component';

describe('GameCoverComponent', () => {
  let component: GameCoverComponent;
  let fixture: ComponentFixture<GameCoverComponent>;

  beforeEach(async(() => {
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
