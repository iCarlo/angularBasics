import { Component, OnInit } from "@angular/core";
import { AppUserService } from "../services/appUser.service";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    // providers: [UserService]
})
export class ContainerComponent implements OnInit {

    inputValue: string = "";

    destroy: boolean = false;

    displayNotice : boolean = false;

    occupation: string = "pilot";

    users: {name: string, status: string}[] = [];

    constructor(private userService: UserService, private appUser: AppUserService){}

    ngOnInit(){
        this.users = this.userService.users;
    }

    onSubmit(text:string){
        this.inputValue = text;
    }

    onDestroy(){
        this.destroy = !this.destroy;
    }

    greetings(){
        return "hello worlds"
    }

    onDisplayNotice(){
        this.displayNotice = !this.displayNotice;
    }
}