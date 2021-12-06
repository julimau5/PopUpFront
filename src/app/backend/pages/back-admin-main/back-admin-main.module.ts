import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackAdminMainPageRoutingModule } from './back-admin-main-routing.module';

import { BackAdminMainPage } from './back-admin-main.page';

//Custom Components
import { PopUpCardComponent } from '../../../components/pop-up-card/pop-up-card.component';
import { BackImageComponent } from '../../../components/back-image/back-image.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackAdminMainPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BackAdminMainPage, PopUpCardComponent, BackImageComponent],
  exports: [PopUpCardComponent, BackImageComponent]
})
export class BackAdminMainPageModule {}
