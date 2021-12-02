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

  @Input() pointX: Number;
  @Input() pointY: Number;
  @Input() homePage: any;

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder
  ) {
    this.imgForm = this.fb.group({
      url: ['', Validators.required],
      beschreibung: ['', Validators.required],
    });
  }

  ngOnInit() {}

  submitImgForm() {
    console.log(this.imgForm.value);
    console.log(this.pointX);
    console.log(this.pointY);
    var button = {
      url: this.imgForm.value.url,
      beschreibung: this.imgForm.value.beschreibung,
      x: this.pointX + 'px',
      y: this.pointY + 'px',
    };
    this.homePage.addNewButton( button );
    this.dismissModal();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
