import { Component, OnInit } from '@angular/core';
import { GotService } from "../../services/got.service";
import { House } from "../../model/house.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.scss']
})
export class HouseViewComponent implements OnInit {

  currentHouse: House = {
    name: 'string',
    region: 'string',
    coatOfArms: 'string',
    words: 'string',
    titles: 'string',
    seats: 'string',
  }

  constructor(
    private service: GotService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        let pid = +param.get('id');
        this.service.getCurrentHouseById(pid).subscribe(
          (res) => {
            console.log(res);
            this.currentHouse = res;
          }
        )
      }
    )
  }

}
