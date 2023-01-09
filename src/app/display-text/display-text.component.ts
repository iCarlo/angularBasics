import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-text',
  templateUrl: './display-text.component.html',
  styleUrls: ['./display-text.component.css']
})
export class DisplayTextComponent implements OnInit, 
OnChanges, 
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  @Input() text: string = "dsds";

  constructor(){
    console.log("constructor called");
    // console.log(this.text);
  }

  ngOnChanges(change: SimpleChanges){
    console.log("changes called");
    // console.log(change)
  }

  ngOnInit(){
    console.log("ngOnInit called");
    // console.log(this.text);
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called");

  }
}
