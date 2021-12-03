import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-image-modal',
  templateUrl: './add-image-modal.page.html',
  styleUrls: ['./add-image-modal.page.scss'],
})
export class AddImageModalPage implements OnInit {
  imgForm: any;

  @Input() pointX: number;
  @Input() pointY: number;
  @Input() homePage: any;

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder
  ) {
    this.imgForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {}

  submitImgForm() {
    console.log(this.imgForm.value);
    console.log(this.pointX);
    console.log(this.pointY);
    var button = {
      title: this.imgForm.value.title,
      url: this.imgForm.value.url,
      description: this.imgForm.value.description,
      x: this.getXPosition(this.pointX) + '%',
      y: this.getYPosition(this.pointY) + 'vw',
    };
    this.homePage.addNewButton( button );
    this.dismissModal();
  }

  getXPosition( x: number ) {
    let actualWidth: number = this.homePage.innerWidth;
    let xProportion = (100 / actualWidth) * x;
    return  xProportion
  }

  getYPosition( y: number ) {
    let yProportion = (100 / this.homePage.innerWidth) * y;
    return  yProportion
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
