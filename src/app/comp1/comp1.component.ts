import { Component } from '@angular/core';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  enteredText: string = "";

  constructor(private dataService: DataService){}

  onBtnClick(){
    this.dataService.onRaiseData(this.enteredText);
  }
}
