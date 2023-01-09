import { Component, ViewChild } from '@angular/core';
import { ContainerComponent } from './container/container.component';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBasics';

  @ViewChild(ContainerComponent, {static: true}) notification!: ContainerComponent;

}
