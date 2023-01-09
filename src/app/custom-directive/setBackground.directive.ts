import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {

    constructor(private element: ElementRef){
    }


    ngOnInit(){
        this.element.nativeElement.style.background = '#C8E6C9';

    }
}