import { Component } from "@angular/core";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']

})
export class ContainerComponent {

    inputValue: string = "";

    destroy: boolean = false;

    displayNotice : boolean = false;

    occupation: string = "pilot";

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