import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { BackLoginPageRoutingModule } from './back-login-routing.module';

import { BackLoginPage } from './back-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BackLoginPage]
})
export class BackLoginPageModule {}
