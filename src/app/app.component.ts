import { Component, ViewChild } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { NotificationComponent } from './notification/notification.component';
import { EnrollService } from './services/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [EnrollService]
})
export class AppComponent {
  title = 'angularBasics';

  // constructor(private enrollService: EnrollService){}

  @ViewChild(ContainerComponent, {static: true}) notification!: ContainerComponent;

}
