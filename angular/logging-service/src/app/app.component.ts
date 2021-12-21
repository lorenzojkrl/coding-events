import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Books To Read';
  booksList: Book[] | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booksList = this.bookService.getBooksList();
  }

  onRemoveBook(book: any) {
    this.bookService.removeBook(book);
    // this is not great! Use Observables!
    this.booksList = this.bookService.getBooksList();
  }
}
