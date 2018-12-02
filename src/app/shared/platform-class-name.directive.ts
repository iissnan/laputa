import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[laputaPlatformClassName]'
})
export class PlatformClassNameDirective {
  _platformName: string;

  @Input()
  set laputaPlatformClassName(value: string) {
    this._platformName = value;
    const className = this.getClassName();
    this.renderer.addClass(this.el.nativeElement, className);
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  private getClassName(): string {
    const className = this._platformName
      .replace(/\s\S*?/g, '-')
      .toLowerCase();

    return `platform-${className}`;
  }

}
