import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }


  @Input('appBetterHighlight') inputBackgroundColor: string = 'white';

  @HostBinding('style.background') background: string = this.inputBackgroundColor;


  ngOnInit() {
    this.background = this.inputBackgroundColor;
  }


}
