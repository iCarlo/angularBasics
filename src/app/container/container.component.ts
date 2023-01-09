import { Component, OnInit } from "@angular/core";
import { filter, from, map, Observable, of, interval, Subscription } from "rxjs";
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

    constructor(
        private userService: UserService, 
        private appUser: AppUserService,
        ){}

    // myObservable = new Observable((observer)=> {
    //     console.log('observable starts');
    //     setTimeout(() =>observer.next('1'), 1000);
    //     setTimeout(() =>observer.next('2'), 2000);
    //     setTimeout(() =>observer.next('3'), 3000);
    //     setTimeout(() =>observer.next('4'), 4000);
    // })


    array1 = [1,2,3,4]
    array2 = ['a', 'b', 'c']

    // myObservable = of(this.array1, this.array2);

    // can also convert promise to obervable
    myObservable = from(this.array1); 

    // operators
    transformData = this.myObservable
    .pipe(map((item) => item * 5))
    .pipe(filter(item => item % 10 === 0));

    counterObservable = interval(1000);
    counterSub?: Subscription;


    ngOnInit(){
        this.users = this.userService.users;

        // this.transformData.subscribe(
        //     (data)=> console.log(data), 
        //     err=>console.log(err),
        //     // () => alert(' completed')
        //     )
    }

    onUnsubscribe(){
        this.counterSub?.unsubscribe();
    }
    onSubscribe(){
        this.counterSub = this.counterObservable.subscribe((val)=> console.log(val))
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