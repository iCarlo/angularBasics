import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = "";

  // onChangeSearch(e: Event){

  //   this.searchValue = (<HTMLInputElement>e.target).value;
  // }
}
