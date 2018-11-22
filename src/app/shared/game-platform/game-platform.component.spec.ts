import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlatformComponent } from './game-platform.component';

describe('GamePlatformComponent', () => {
  let component: GamePlatformComponent;
  let fixture: ComponentFixture<GamePlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
