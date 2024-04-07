import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  {
    path: 'cranberry',
    loadChildren: () =>
      import('./tab2/cranberry/cranberry.module').then(
        (m) => m.CranberryPageModule
      ),
  },
  {
    path: 'cookies',
    loadChildren: () =>
      import('./tab2/cookies/cookies.module').then((m) => m.CookiesPageModule),
  },
  {
    path: 'beef',
    loadChildren: () =>
      import('./tab2/beef/beef.module').then((m) => m.BeefPageModule),
  },
  {
    path: 'ketupat',
    loadChildren: () =>
      import('./tab2/ketupat/ketupat.module').then((m) => m.KetupatPageModule),
  },
  {
    path: 'wajid',
    loadChildren: () =>
      import('./tab2/wajid/wajid.module').then((m) => m.WajidPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
