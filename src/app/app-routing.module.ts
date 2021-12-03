import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-image-modal',
    loadChildren: () => import('./modals/add-image-modal/add-image-modal.module').then( m => m.AddImageModalPageModule)
  },
  {
    path: 'back-login',
    loadChildren: () => import('./backend/pages/back-login/back-login.module').then( m => m.BackLoginPageModule)
  },
  {
    path: 'back-admin-main',
    loadChildren: () => import('./backend/pages/back-admin-main/back-admin-main.module').then( m => m.BackAdminMainPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
