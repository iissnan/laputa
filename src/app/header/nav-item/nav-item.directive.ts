import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[laputaNavItem]',
})
export class NavItemDirective {

  @HostBinding('class') class = 'nav-item';
  @HostBinding('class.nav-item-active') private active = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMuseLeave() {
    this.active = false;
  }

  constructor() { }

}
