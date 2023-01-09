import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataService';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{
  inputText: string = "";
  
  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.dataEmitter.subscribe((data)=> {
      this.inputText = data;
    })
  }
}
