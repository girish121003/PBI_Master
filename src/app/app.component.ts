import { Component } from '@angular/core';
import { BookService } from './app.service';
import { IBooks } from 'src/app/IBooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PBI';
  bookTitles$=this.service.getBooks()
  constructor(private service:BookService){}
  ngOnInit(){
        this.bookTitles$.subscribe(resp=>{
          console.log(resp)
        })
    }
}
