import { Component, OnInit } from '@angular/core';

import { FireauthService } from '../../backend/services/authentication/fireauth.service';
// import { FiredataService } from 'src/app/backend/services/datamanagement/firedata.service';

@Component({
  selector: 'back-image',
  templateUrl: './back-image.component.html',
  styleUrls: ['./back-image.component.scss'],
})
export class BackImageComponent implements OnInit {

  public userState: any;
  public imgButtons: any;

  constructor(
    private fireAuthService: FireauthService,
    // private savedData; FiredataService,
  ) { }

  ngOnInit() {
    this.userState = this.fireAuthService.currentUser;
  }



}
