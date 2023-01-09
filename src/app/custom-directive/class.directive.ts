import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input('appClass') set display(value: Object){
    Object.entries(value).forEach(entry => {
      if(entry[1]) this.renderer.addClass(this.element.nativeElement, entry[0]);
    })
  }
}
