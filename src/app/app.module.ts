import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CognitoService } from './cognito-service/cognito.service';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ListBooksComponent } from './list-books/list-books.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CognitoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
