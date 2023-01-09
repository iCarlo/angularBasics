import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements AfterContentInit {

  @ContentChild('home') spanEl!: ElementRef;

  ngAfterContentInit(){
    console.log(this.spanEl);
  }
}
