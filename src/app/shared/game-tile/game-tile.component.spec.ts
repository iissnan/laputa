import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameTileComponent } from './game-tile.component';

describe('GameTileComponent', () => {
  let component: GameTileComponent;
  let fixture: ComponentFixture<GameTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
