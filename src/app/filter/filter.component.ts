import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  selectedFilterValue: string = 'All';

  @Output()
  filterEventEmitter: EventEmitter<string> = new EventEmitter<string>;

  onFilterChange(){
    this.filterEventEmitter.emit(this.selectedFilterValue);
  }
}
