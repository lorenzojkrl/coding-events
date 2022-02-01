import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ng To Do';
  userInput: string;

  onSubmit(form: NgForm) {
    console.log('Submitted: ', form);
  }
}
