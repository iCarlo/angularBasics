import { EventEmitter, Injectable } from "@angular/core";
import { AppUser } from "../all-user/all-user.component";

@Injectable()
export class AppUserService {
    users = [
        {
            name: 'John',
            job: 'Teacher',
            gender: 'Male',
            country: 'United States',
            age: 35,
            avatar: 'assets/men.jpg'
        },
        {
            name: 'Mark',
            job: 'Designer',
            gender: 'Male',
            country: 'Germany',
            age: 35,
            avatar: 'assets/men.jpg'
        },
        {
            name: 'Merry',
            job: 'Lawyer',
            gender: 'Female',
            country: 'Ireland',
            age: 35,
            avatar: 'assets/women.jpg'
        },
        {
            name: 'Jonah',
            job: 'Doctor',
            gender: 'Female',
            country: 'India',
            age: 35,
            avatar: 'assets/women.jpg'
        }
    ]

    showUserDetailsClicked = new EventEmitter<AppUser>;

    showUserDetails(user: AppUser){
        this.showUserDetailsClicked.emit(user);
    }
}