import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Notification App';
  notification?: string;

  constructor(private notificationService: NotificationService) {
    this.notificationService.notificationChanges$.subscribe(
      (textToDisplay: string) => {
        this.notification = textToDisplay;
      }
    );
  }
}
