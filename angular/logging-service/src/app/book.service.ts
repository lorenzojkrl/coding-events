import { Injectable } from '@angular/core';
import { Book } from './models';

@Injectable({ providedIn: 'root' })
export class BookService {
  favBooks: Book[] = [
    { id: 0, title: 'Principles' },
    { id: 1, title: 'The Story of Success' },
    { id: 2, title: 'Extreme Economies' },
  ];

  getBooksList() {
    return this.favBooks;
  }

  createBook(bookTitle: string) {
    // simple check, title must be at least 1 char
    if (bookTitle.length !== 0) {
      const bookObj = {
        id: Math.floor(Math.random() * 1000),
        title: bookTitle,
      };
      this.favBooks.push(bookObj);
    }
  }

  removeBook(bookToRemove: Book) {
    this.favBooks = this.favBooks.filter(
      (book: Book) => book.id != bookToRemove.id
    );
  }
}
