import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AddImageModalPage } from '../../../modals/add-image-modal/add-image-modal.page';
import { Image } from '../../Interfaces/image.module';

import { FireauthService } from '../../services/authentication/fireauth.service';
import { FiredataService } from '../../services/datamanagement/firedata.service';

@Component({
  selector: 'app-back-admin-main',
  templateUrl: './back-admin-main.page.html',
  styleUrls: ['./back-admin-main.page.scss'],
})
export class BackAdminMainPage implements OnInit {
  public imgButtons: Observable<Image[]>;
  public userState: any;

  constructor(
    private fireAuthService: FireauthService,
    public modalController: ModalController,
    public fireDB: FiredataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userState = this.fireAuthService.currentUser;
    this.imgButtons = this.fireDB.getImages();
  }

  async addImage(e: any){
    if (this.fireAuthService.currentUser != null) {
      const modal = await this.modalController.create({
        component:AddImageModalPage,
        componentProps: {
          'pointX': e.offsetX,
          'pointY': e.offsetY,
          'backImageComp': this
        }
      });
      return await modal.present();
    } else {
      return
    }
  }



}
