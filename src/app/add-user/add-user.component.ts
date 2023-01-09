import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserService]
})
export class AddUserComponent {
  username: string = "";
  status: string = "active";

  constructor(private userService: UserService){}

  addUser(){
    this.userService.addNewUser(this.username,this.status);
    // console.log(this.userService.users);
  }
}
