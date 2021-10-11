import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GamePlatformIconComponent } from './game-platform-icon.component';

describe('GamePlatformIconComponent', () => {
  let component: GamePlatformIconComponent;
  let fixture: ComponentFixture<GamePlatformIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePlatformIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlatformIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
