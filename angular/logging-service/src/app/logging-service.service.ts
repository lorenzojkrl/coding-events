import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  clicksNumber: number = 0;

  addClick(number: number = 1) {
    this.clicksNumber += number;
    console.log(this.clicksNumber);
  }
}
