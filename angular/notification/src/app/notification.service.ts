import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  private notificationSource = new Subject<string>();
  notificationChanges$ = this.notificationSource.asObservable();

  changeText(textToDisplay: string) {
    this.notificationSource.next(textToDisplay);
  }
}
