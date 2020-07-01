import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() inColor = 'red';
  @Input() outColor = 'yellow';
  constructor() {}
  @HostBinding('style.backgroundColor') bgc = 'blue';
  @HostBinding('style.color') color = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.inColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.outColor;
  }
}
