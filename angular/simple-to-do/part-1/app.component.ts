import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Ng To Do';
  subtitle: string = 'Write something to do in the form';
  userInput: string | undefined;

  onSubmit(): void {
    console.log(this.userInput);
  }
}
