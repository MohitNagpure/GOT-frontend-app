import { Component, OnInit } from '@angular/core';
import { GotService } from '../../services/got.service';
import { ActivatedRoute } from "@angular/router";
import { Character } from "../../model/character.model";

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.scss']
})
export class CharInfoComponent implements OnInit {

  currentCharacter: Character = {
    name: '',
    gender: 'string',
    culture: 'string',
    aliases: 'string',
    playedBy: 'string',
  }

  constructor(
    private service: GotService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        let pid = +param.get('id');
        this.service.getCurrentCharById(pid).subscribe(
          (res) => {
            console.log(res);
            this.currentCharacter = res;
          }
        )
        // console.log(res)
      }
    )
  }

}
