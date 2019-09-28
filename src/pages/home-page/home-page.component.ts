import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/usersService/user.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public user: User = null;
  public genericError: string = null;

  constructor(
    private usersService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {}

  public getUserProfile(username) {
    this.usersService
      .getUser(username)
      .then(res => {
        this.user = res;

      }).catch(error => {
        this.genericError = error;
        // Handle error gently
      });
  }

  public searchUser(event, username) {
    event.preventDefault();
    this.getUserProfile(username);
  }

  public goToShortUrl() {
    this.router.navigate(['/short-url']);
  }
}
