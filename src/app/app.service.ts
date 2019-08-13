import {Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBooks } from './IBooks';




@Injectable({
    providedIn:'root',
})

export class BookService{
     private apiUrl= "assets/api/books.json";

    constructor(private http :HttpClient){

    }

    getBooks():Observable<any>{
        return this.http.get(this.apiUrl)
    }
}