import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../services/appUser.service';

export interface AppUser {
    name: string,
    job: string,
    gender: string,
    country: string,
    age: number,
    avatar: string
}

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users: AppUser[] = [];
  
  constructor(private appUser: AppUserService){}

  ngOnInit(){
    this.users = this.appUser.users;
  }

  showDetails(user: AppUser) {
    this.appUser.showUserDetails(user);
  }
}
