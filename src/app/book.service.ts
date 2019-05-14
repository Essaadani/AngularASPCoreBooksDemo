import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string="http://localhost:52360/api/books"
  books:Book[];
  book:Book;

  constructor(private http:HttpClient) { }

  getAllBooks(){
    this.http.get(this.url).toPromise().then(
      res=>{
        this.books = res as Book[];
      }
    )
  }

  postBook(){
    return this.http.post(this.url,this.book);
  }

  putBook(){
    return this.http.put(this.url + "/" + this.book.id,this.book);
  }

  deleteBook(id){
    return this.http.delete(this.url+"/"+id);
  }


}
