import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GotService } from "../../services/got.service";
import { Books } from '../../model/book.model'

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  currentBook: Books = {
    name: '',
    authors: '',
    publisher: '',
    released: null,
    numberOfPages: null,
    isbn: null,
    country: '',
    mediaType: '',
  }

  constructor(
    private activateRoute: ActivatedRoute,
    private service: GotService

  ) { }

  ngOnInit(): void {
    // this.activateRoute.paramMap.subscribe(
    //   (param) => {
    //     let pid = +param.get('id');
    //     this.service.getCurrentBookById(pid).subscribe(
    //       (res) => {
    //         console.log(res);
    //         this.currentBook = res;
    //       }
    //     )
    //   }
    // )

    this.activateRoute.params.subscribe(
      (paramData) => {
        let bookId = paramData['id'];
        console.log(bookId);
        this.service.getCurrentBookById(bookId).subscribe(
          (res) => {
            console.log(res);
            this.currentBook=res;
          }
        );
      }
    )

  }

  //method to get current book
  // getcurrentBook(id: number) {
  //   this.service.getCurrentBookById(id).subscribe(
  //     (currentBook: Books) => {
  //       console.log(currentBook);
  //     }
  //   )
  // }

}