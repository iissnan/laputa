import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemPlatformsComponent } from './nav-item-platforms.component';

describe('NavItemPlatformsComponent', () => {
  let component: NavItemPlatformsComponent;
  let fixture: ComponentFixture<NavItemPlatformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemPlatformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
