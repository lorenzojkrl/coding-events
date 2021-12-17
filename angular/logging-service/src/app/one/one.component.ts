import { Component, ElementRef, ViewChild } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  @ViewChild('titleInput')
  titleInputReference!: ElementRef;

  constructor(private bookService: BookService) {}

  onAddBook() {
    this.bookService.createBook(this.titleInputReference.nativeElement.value);
  }
}
