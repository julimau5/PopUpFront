import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddImageModalPage } from '../modals/add-image-modal/add-image-modal.page';
import { Router } from '@angular/router';

import { FireauthService } from '../backend/services/authentication/fireauth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public innerWidth: any;
  public imgButtons = [ ];
  public userState: any;

  constructor(
    public modalController: ModalController,
    private fireAuthService: FireauthService,
    private router: Router
    ) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.userState = this.fireAuthService.currentUser;
  }

  async addImage(e){
    if (this.fireAuthService.currentUser != null) {
      const modal = await this.modalController.create({
        component:AddImageModalPage,
        componentProps: {
          'pointX': e.offsetX,
          'pointY': e.offsetY,
          'homePage': this
        }
      });
      return await modal.present();
    } else {
      return
    }
  }

  addNewButton(button) {
    this.imgButtons.push(button)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  toLogIn() {
    this.router.navigateByUrl('/back-login', { replaceUrl: true });
  }
  singOut() {
    this.fireAuthService.singOut()
    window.location.reload()
  }

}
