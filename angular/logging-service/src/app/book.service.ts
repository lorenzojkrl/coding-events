import { Injectable } from '@angular/core';
import { Book } from './models';

@Injectable({ providedIn: 'root' })
export class BookService {
  private favBooks: Book[] = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];

  getBooksList() {
    return this.favBooks;
  }

  createBook(bookTitle: string) {
    // simple check, title must be at least 1 char
    if (bookTitle.length !== 0) {
      const bookObj = { title: bookTitle };
      this.favBooks.push(bookObj);
    }
  }
}
