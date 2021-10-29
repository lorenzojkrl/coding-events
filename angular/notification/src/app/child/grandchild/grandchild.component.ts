import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
})
export class GrandchildComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {}

  onClick() {
    this.notificationService.changeText(`Here is a notification!`);
  }
}
