import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective {
  color = "";
  backgroundColor = "";

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor= '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

  }



}
