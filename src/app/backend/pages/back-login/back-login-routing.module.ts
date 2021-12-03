import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackLoginPage } from './back-login.page';

const routes: Routes = [
  {
    path: '',
    component: BackLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackLoginPageRoutingModule {}
