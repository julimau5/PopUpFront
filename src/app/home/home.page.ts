import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddImageModalPage } from '../modals/add-image-modal/add-image-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  imgButtons = [ ]

  constructor(
    public modalController: ModalController,
    ) {}

  ngOnInit() {
  }

  async addImage(e){
    const modal = await this.modalController.create({
      component:AddImageModalPage,
      componentProps: {
        'pointX': e.offsetX,
        'pointY': e.offsetY,
        'homePage': this
      }
    });
    return await modal.present();
  }

  addNewButton(button) {
    this.imgButtons.push(button)
  }

}
