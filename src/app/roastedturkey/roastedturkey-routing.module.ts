import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoastedturkeyPage } from './roastedturkey.page';

const routes: Routes = [
  {
    path: '',
    component: RoastedturkeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoastedturkeyPageRoutingModule {}
