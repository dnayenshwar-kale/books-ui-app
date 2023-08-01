import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import  ConfirmDialogComponentComponent  from './confirm-dialog-component/confirm-dialog-component.component';


@NgModule({
  declarations: [
    BookComponent,
    ConfirmDialogComponentComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,BrowserAnimationsModule,MatDialogModule//,NgbModule
  ],
  providers: [BookService],
  bootstrap: [BookComponent]
})
export class AppModule { }
