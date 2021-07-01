import { Component, OnInit } from '@angular/core';
import { GotService } from "../../services/got.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
  providers: [GotService]
})
export class HouseComponent implements OnInit {

  allHouse = [];

  constructor(
    private service: GotService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getHouse();
    this.spinner.show();
  }

  getHouse() {
    this.service.viewAllHouse().subscribe(
      (data: any) => {
        this.allHouse = data;
        console.log(data);
        // console.error('Request failed with error')
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide()
        }, 1000)
      }
    )
    console.log("get house method calling");
  }

}