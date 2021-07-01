import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
import { GotService } from "../../services/got.service";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  providers: [GotService]
})
export class BookViewComponent implements OnInit {

  allBooks = [];

  constructor(
    private service: GotService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getBooks();
    this.spinner.show();

  }

  getBooks() {
    this.service.viewAllBooks().subscribe(
      (data: any) => {
        this.allBooks = data;
        console.log(this.allBooks);
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide()
        }, 1000);
      }
    )
  }

  // method to get id from url strinr
  // navigateToBookinfo(url: string) {
  //   let id = url.split('/')[5];
  //   console.log(id);
  // }

}
