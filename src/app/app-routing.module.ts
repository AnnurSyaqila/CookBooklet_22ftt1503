import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'roastedturkey',
    loadChildren: () => import('./roastedturkey/roastedturkey.module').then( m => m.RoastedturkeyPageModule)
  },
  {
    path: 'cranberry',
    loadChildren: () => import('./cranberry/cranberry.module').then( m => m.CranberryPageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'beef',
    loadChildren: () => import('./beef/beef.module').then( m => m.BeefPageModule)
  },
  {
    path: 'ketupat',
    loadChildren: () => import('./ketupat/ketupat.module').then( m => m.KetupatPageModule)
  },
  {
    path: 'wajid',
    loadChildren: () => import('./wajid/wajid.module').then( m => m.WajidPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
