import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  // el: ElementRef;
  // constructor(e: ElementRef) {
  //   this.el = e;
  // }

  constructor(private el: ElementRef) {} //dependency injection

  @HostBinding('style.borderColor')
  b_color = 'red';

  @HostListener('mouseenter')
  mouseenter() {
    console.log('mouse Enter');
    this.el.nativeElement.style.fontSize = '50px';
  }

  @HostListener('mouseleave')
  mouseleave() {
    console.log('mouse leave');
    this.el.nativeElement.style.fontSize = '30px';
  }
}
