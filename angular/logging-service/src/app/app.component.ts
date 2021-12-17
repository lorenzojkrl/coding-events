import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Passing Data with Angular Services';
  booksList: Book[] | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booksList = this.bookService.getBooksList();
  }
}
