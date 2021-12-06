import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

import { FiredataService } from 'src/app/backend/services/datamanagement/firedata.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-image-modal',
  templateUrl: './add-image-modal.page.html',
  styleUrls: ['./add-image-modal.page.scss'],
})
export class AddImageModalPage implements OnInit {
  public imgForm: any;
  public innerWidth: any;
  

  //uploaading variables
  public downloadURL: Observable<string>;
  public url: string;
  public uploadPercent: Observable<number>
  public uploadFinished: boolean;

  @Input() pointX: number;
  @Input() pointY: number;
  @Input() backImageComp: any;

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
    public fireDB: FiredataService,
    private storage: AngularFireStorage
  ) {
    this.imgForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  submitImgForm() {
    console.log(this.imgForm.value);
    console.log(this.pointX);
    console.log(this.pointY);
    var image = {
      title: this.imgForm.value.title,
      url: this.url,
      description: this.imgForm.value.description,
      x: this.getXPosition(this.pointX) + '%',
      y: this.getYPosition(this.pointY) + 'vw',
    };
    this.fireDB.saveNewImage(image);
    this.dismissModal();
  }

  getXPosition(x: number) {
    let actualWidth: number = this.innerWidth;
    let xProportion = (100 / actualWidth) * x;
    return xProportion;
  }

  getYPosition(y: number) {
    let yProportion = (100 / this.innerWidth) * y;
    return yProportion;
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = '' + Date.now();
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe(per => console.log(per))

    task
      .snapshotChanges()
      .pipe(finalize(() => {
        this.downloadURL = fileRef.getDownloadURL()
        this.downloadURL.subscribe(url => {
          if (url) {
            this.url = url;
            console.log(this.url);
          }
        });
      }))
      .subscribe(url => {
        console.log(url)
        this.uploadFinished = true;
      });
    
  }
}
