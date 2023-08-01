// book.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService, Book } from './../book.service';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import ConfirmDialogComponent from './../confirm-dialog-component/confirm-dialog-component.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  selectedBook: Book=null;
  viewBook: Book=null;
  addBook : boolean=false;
  bookCreated :string=null;
  bookupdated :String=null;
  bookDeleted :string=null;

  constructor(private bookService: BookService,public dialog: MatDialog//,private modalService: NgbModal
  ) { 
	
}

  ngOnInit(): void {
//	 let token = location.href.split('=')[2].split('&')[0];
// Get the URL fragment as a string
var fragment = location.hash;
// Remove the # character from the fragment
fragment = fragment.substring(1);
// Create a URLSearchParams object from the fragment
var params = new URLSearchParams(fragment);
// Get the value of the id_token parameter
var idToken = params.get('id_token');
// Log the idToken to the console
//console.log(idToken);

	// console.log(token);
    window.sessionStorage.setItem('Token', idToken);
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAllBooks().subscribe(
      data => {
        this.books = data;
      },
      error => {
        console.log(error);
      }
    );
  }
    addBooks(): void {
    this.viewBook = null;
    this.selectedBook = null;
    this.bookCreated=null;
    this.bookupdated=null;
    this.bookDeleted=null;
    this.addBook=true;
    
  }

  selectBook(book: Book): void {
    this.viewBook = null;
    this.addBook= false;
    this.bookCreated=null;
    this.bookupdated=null;
    this.bookDeleted=null;
    this.selectedBook = book;
    
  }

 viewBooks(book: Book): void {
    this.selectedBook = null;
     this.addBook= false;
    this.bookCreated=null;
    this.bookupdated=null;
    this.bookDeleted=null;
    this.viewBook = book;
  }

  createBook(book: Book): void {
    this.bookupdated=null;
    this.bookCreated=null;
    this.bookService.createBook(book).subscribe(
      (data :Book) => {
        this.books.push(data);
        this.bookCreated='Book created as :'+JSON.stringify(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateBook(book: Book): void {
    this.bookupdated=null;
    this.bookCreated=null;
     this.bookDeleted=null;
    this.bookService.updateBook(book.id, book).subscribe(
      data => {
        let index = this.books.findIndex(b => b.id === data.id);
        this.books[index] = data;
        this.bookupdated='Book updated as:'+JSON.stringify(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  
  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(
      data => {
        let index = this.books.findIndex(b => b.id === id);
        this.books.splice(index, 1);        
      },
      error => {
	let index = this.books.findIndex(b => b.id === id);
        this.books.splice(index, 1);  
        console.log(error);
      }
    );
  }
  
openConfirmDialog (id: number): void {
	 this.selectedBook = null;
     this.addBook= false;
    this.viewBook = null;
    this.bookCreated=null;
    this.bookupdated=null;
const dialogRef = this.dialog.open (ConfirmDialogComponent, { width: '250px', data: { action: 'delete book id '+id } });

dialogRef.afterClosed ().subscribe (result => {
  if (result) {
    console.log ('You chose to delete this item');
    this.deleteBook(id);
    this.bookDeleted='Book deleted for id '+id;
  } else {
    // User cancelled action
    console.log ('You chose not to delete this book');
  }
});
}
}
