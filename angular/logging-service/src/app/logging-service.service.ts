import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  private clicksNumber: number = 0;

  addClick(number: number = 1) {
    this.clicksNumber += number;
    console.log(`${number} click added. ${this.clicksNumber} clicks in total`);
  }
}
