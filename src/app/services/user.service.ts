import { Injectable } from "@angular/core"
import { LoggerService } from "./logger.service"

@Injectable()
export class UserService {

    constructor(private logger: LoggerService){}

    users = [
        {name: 'John', status: 'active'},
        {name: 'Mark', status: 'inactive'},
        {name: 'James', status: 'active'},
    ]

    addNewUser(name: string, status: string){
        this.users.push({
            name,
            status,
        })

        this.logger.logMessage(name, status);
    }
}