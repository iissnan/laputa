import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemGenresComponent } from './nav-item-genres.component';

describe('NavItemGenresComponent', () => {
  let component: NavItemGenresComponent;
  let fixture: ComponentFixture<NavItemGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
