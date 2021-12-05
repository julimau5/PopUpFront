import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FireauthService } from '../backend/services/authentication/fireauth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public userState: any;

  constructor(
    private fireAuthService: FireauthService,
    private router: Router
    ) {}

  ngOnInit() {
    this.userState = this.fireAuthService.currentUser;
  }

  toLogIn() {
    this.router.navigateByUrl('/back-login', { replaceUrl: true });
  }
  singOut() {
    this.fireAuthService.singOut()
    window.location.reload()
  }

}
