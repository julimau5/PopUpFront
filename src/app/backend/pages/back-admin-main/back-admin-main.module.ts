import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackAdminMainPageRoutingModule } from './back-admin-main-routing.module';

import { BackAdminMainPage } from './back-admin-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackAdminMainPageRoutingModule
  ],
  declarations: [BackAdminMainPage]
})
export class BackAdminMainPageModule {}
