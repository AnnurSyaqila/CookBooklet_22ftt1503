import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WajidPage } from './wajid.page';

const routes: Routes = [
  {
    path: '',
    component: WajidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WajidPageRoutingModule {}
