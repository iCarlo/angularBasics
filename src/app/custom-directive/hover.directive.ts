import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseHover(){
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') onMouseOut(){
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');

  }

}
