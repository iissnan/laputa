import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GamePlatformComponent } from './game-platform.component';

describe('GamePlatformComponent', () => {
  let component: GamePlatformComponent;
  let fixture: ComponentFixture<GamePlatformComponent>;

  beforeEach(waitForAsync(() => {
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
