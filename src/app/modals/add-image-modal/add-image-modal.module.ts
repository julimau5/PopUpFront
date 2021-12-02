import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddImageModalPageRoutingModule } from './add-image-modal-routing.module';

import { AddImageModalPage } from './add-image-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddImageModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddImageModalPage]
})
export class AddImageModalPageModule {}
