import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Image } from '../../Interfaces/image.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiredataService {
  constructor(
    private angularFirestore: AngularFirestore
  ) {}

  saveNewImage(image) {
    return this.angularFirestore.collection('images').add({
      image
    });
  }

  getImages() {
    return this.angularFirestore.collection('images').valueChanges({ idField: 'id'}) as Observable<Image[]>
  }
}
