import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging-service.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  constructor(private logService: LoggingService) {}

  ngOnInit(): void {}

  onClick() {
    this.logService.addClick(2);
  }
}
