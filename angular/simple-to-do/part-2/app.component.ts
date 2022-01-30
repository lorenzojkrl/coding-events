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
  todoList: string[] = ['Study Angular', 'Add one elememt', 'Correct typo'];

  onSubmit(): void {
    console.log(this.userInput);
    this.todoList = this.todoList.concat(this.userInput);
  }

  onDelete(itemToDelete: string): void {
    this.todoList = this.todoList.filter((item) => item !== itemToDelete);
  }
}
