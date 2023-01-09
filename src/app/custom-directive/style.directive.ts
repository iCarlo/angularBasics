import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input('appStyle') set setStyle(styles: Object){
    Object.entries(styles).forEach(style => {
      this.renderer.setStyle(this.element.nativeElement, style[0], style[1]);
    })
  }
}
