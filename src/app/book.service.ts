// book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'https://zzya6gxb24.execute-api.us-east-1.amazonaws.com/books/api/book';

 
 constructor(private http: HttpClient) {
	
 }
 
  getAllBooks(): Observable<Book[]> {
	// Get the token from the session storage
   var token = window.sessionStorage.getItem('Token');
	var option = {
  //method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
  headers: {
    'Authorization': 'Bearer ' + token, // Send the token in the Authorization header
    'Content-Type': 'application/json' // Specify the content type of the request body
  },
 // body: JSON.stringify(book) // Convert the book object to a JSON string
}; 
console.log(option);
    return this.http.get<Book[]>(this.baseUrl,option);
  }

  getBookById(id: number): Observable<Book> {
	// Get the token from the session storage
   var token = window.sessionStorage.getItem('Token');
  var option = {
  //method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
  headers: {
    'Authorization': 'Bearer ' + token, // Send the token in the Authorization header
    'Content-Type': 'application/json' // Specify the content type of the request body
  },
 // body: JSON.stringify(book) // Convert the book object to a JSON string
}; 
    return this.http.get<Book>(`${this.baseUrl}/${id}`,option);
  }

  createBook(book: Book): Observable<Book> {
	// Get the token from the session storage
   var token = window.sessionStorage.getItem('Token');
	var option = {
  method: 'POST', // or 'GET', 'PUT', 'DELETE', etc.
  headers: {
    'Authorization': 'Bearer ' + token, // Send the token in the Authorization header
    'Content-Type': 'application/json', // Specify the content type of the request body
  }
};
    return this.http.post<Book>(this.baseUrl,book, option);
  }

  updateBook(id: number, book: Book): Observable<Book> {
	// Get the token from the session storage
   var token = window.sessionStorage.getItem('Token');
	var option = {
  method: 'PUT', // or 'GET', 'PUT', 'DELETE', etc.
  headers: {
    'Authorization': 'Bearer ' + token, // Send the token in the Authorization header
    'Content-Type': 'application/json' // Specify the content type of the request body
  }
};
    return this.http.put<Book>(`${this.baseUrl}/${id}`,book, option);
  }

  deleteBook(id: number): Observable<any> {
	// Get the token from the session storage
   var token = window.sessionStorage.getItem('Token');
	 var option = {
  method: 'DELETE', // or 'GET', 'PUT', 'DELETE', etc.
  headers: {
    'Authorization': 'Bearer ' + token, // Send the token in the Authorization header
    'Content-Type': 'application/json' // Specify the content type of the request body
  }
  
}; 
    return this.http.delete<any>(`${this.baseUrl}/${id}`,option);
  }
}
