import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackAdminMainPage } from './back-admin-main.page';

const routes: Routes = [
  {
    path: '',
    component: BackAdminMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackAdminMainPageRoutingModule {}
