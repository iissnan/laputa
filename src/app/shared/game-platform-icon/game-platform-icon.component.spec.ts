import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlatformIconComponent } from './game-platform-icon.component';

describe('GamePlatformIconComponent', () => {
  let component: GamePlatformIconComponent;
  let fixture: ComponentFixture<GamePlatformIconComponent>;

  beforeEach(async(() => {
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
