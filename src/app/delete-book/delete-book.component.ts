import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

selectedBook = { title: '', author: '', description: '' };

  onDelete() {
    // Add logic to delete the selected book using your API and CognitoService.
    // Example: this.cognitoService.deleteBook(this.selectedBook).subscribe(result => console.log(result));
  }


}
