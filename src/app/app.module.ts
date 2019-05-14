import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
