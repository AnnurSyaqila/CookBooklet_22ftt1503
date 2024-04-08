import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetupatPage } from './ketupat.page';

const routes: Routes = [
  {
    path: '',
    component: KetupatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetupatPageRoutingModule {}
