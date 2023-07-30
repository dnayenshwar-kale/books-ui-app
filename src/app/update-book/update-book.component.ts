import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedBook = { title: '', author: '', description: '' };

  onSubmit() {
    // Add logic to update the selected book using your API and CognitoService.
    // Example: this.cognitoService.updateBook(this.selectedBook).subscribe(result => console.log(result));
  }


}
