import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging-service.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  constructor(private logService: LoggingService) {}

  ngOnInit(): void {}

  onClick() {
    this.logService.addClick();
  }
}
