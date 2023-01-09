import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService {
    // dataEmitter = new EventEmitter<string>();

    dataEmitter = new Subject<string>()

    onRaiseData(data: string){
        this.dataEmitter.next(data);
    }
}

