import { Component, OnInit } from '@angular/core';

interface Book {
	title : String;
	author : String;
}


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

books :Book[] = [
    // Add logic to fetch the list of books using your API and CognitoService.
    // Example: 
    { title: 'Book 1', author: 'Author 1'},
              { title: 'Book 2', author: 'Author 2' },
    //          ...
  ];

  onEdit(book: any) {
    // Add logic to set the selected book for updating.
    // Example: this.updateBookComponent.selectedBook = book;
  }

  onDelete(book: any) {
    // Add logic to set the selected book for deleting.
    // Example: this.deleteBookComponent.selectedBook = book;
  }


}
