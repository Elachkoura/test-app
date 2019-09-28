import { Component, OnInit, Input , OnChanges} from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
  }

}
