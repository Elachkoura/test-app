import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-url-page',
  templateUrl: './short-url-page.component.html',
  styleUrls: ['./short-url-page.component.scss']
})
export class ShortUrlPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public shortUrl(event, longUrl) {
    event.preventDefault();
  }
}
