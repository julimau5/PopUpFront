import { Component, OnInit } from '@angular/core';

import { FiredataService } from 'src/app/backend/services/datamanagement/firedata.service';
import { Observable } from 'rxjs';

import { Image } from '../../backend/Interfaces/image.module';


@Component({
  selector: 'back-image',
  templateUrl: './back-image.component.html',
  styleUrls: ['./back-image.component.scss'],
})
export class BackImageComponent implements OnInit {

  public userState: any;
  public imgButtons: Observable<Image[]>;

  constructor(
    private fireDB: FiredataService,
  ) { }

  ngOnInit() {
    this.imgButtons = this.fireDB.getImages();
  }





}
