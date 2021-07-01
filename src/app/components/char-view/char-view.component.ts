import { Component, OnInit } from '@angular/core';
import { GotService } from '../../services/got.service';
import { Character } from "../../model/character.model";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-char-view',
  templateUrl: './char-view.component.html',
  styleUrls: ['./char-view.component.scss'],
  providers: [GotService]
})
export class CharViewComponent implements OnInit {

  allChar = []
  constructor(
    private service: GotService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getChar();
    this.spinner.show();
  }

  getChar() {
    this.service.viewAllChar().subscribe(
      (data: any) => {
        this.allChar = data;
        console.log(this.allChar);
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide()
        }, 1000);
      }
    )

  }

}
