import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDebriefD]',
})
export class DebriefDDirective {
  constructor() {}

  @HostBinding('style.fontFamily') fontfamily = 'garamond';
  @HostBinding('style.fontSize') fz = '12px' ;
  @HostListener('dblclick') exergue() {
    if (this.fz === '12px') {
      this.fz = '40px';
    }
    else {
      this.fz = '12px';
    }
  }
}
