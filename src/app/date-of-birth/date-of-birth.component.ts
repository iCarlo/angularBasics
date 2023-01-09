import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.css']
})
export class DateOfBirthComponent {

  @ViewChild('dobInput') dateOfBirth?: ElementRef;
  @ViewChild('ageInput') age?: ElementRef;

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth!.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    this.age!.nativeElement.value = (currentYear - birthYear).toString();
  }
}
