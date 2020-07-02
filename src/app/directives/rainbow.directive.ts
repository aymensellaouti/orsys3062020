import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor() { }
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;

  @HostListener('keypress') onKeyPress() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }
  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
