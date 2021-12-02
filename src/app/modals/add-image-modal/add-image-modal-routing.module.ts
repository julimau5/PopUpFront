import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddImageModalPage } from './add-image-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddImageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddImageModalPageRoutingModule {}
