import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Ng To Do ";
  todoList: {
    id: number;
    title: string;
    description?: string;
    date?: string;
  }[] = [
    { id: 1, title: "Study Angular" },
    { id: 2, title: "Add one elememt" },
    { id: 3, title: "Correct typo" },
    { id: 4, title: "Add dates", date: "2022-09-10" },
  ];

  onSubmit(form: NgForm) {
    this.todoList = this.todoList.concat({
      id: Math.random(),
      title: form.form.value.taskInfo.userInput,
      date: form.form.value.date,
    });
    console.log("Submitted", form.form);
  }

  onDelete(id: number) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}
