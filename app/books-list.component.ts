import { Component, OnInit } from '@angular/core';
import { Book }              from './book';
import { BookService }       from './book.service';
@Component({
  selector: 'books-list',
  templateUrl: 'app/books-list.component.html',
  providers: [ BookService ]
})
export class BooksListComponent implements OnInit {
  errorMessage: string;
  books: Book[];
  mode = 'Observable';

  constructor (private bookService: BookService) {}

  ngOnInit() { this.getBooks(); }

  getBooks() {
    this.bookService.getBooks()
                     .subscribe(
                       books => this.books = books,
                       error =>  this.errorMessage = <any>error);
  }
}

