import { Component, OnInit } from '@angular/core';
import { AppUser } from '../all-user/all-user.component';
import { AppUserService } from '../services/appUser.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: AppUser = {
    name: '',
    job: '',
    gender: '',
    country: '',
    age: 0,
    avatar: ''
};

  constructor(private appUser: AppUserService){}

  ngOnInit(){
    this.appUser.showUserDetailsClicked.subscribe((data: AppUser) =>{
      this.user = data;
    })
  }
}
