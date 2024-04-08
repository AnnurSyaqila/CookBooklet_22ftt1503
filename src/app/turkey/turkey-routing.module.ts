import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurkeyPage } from './turkey.page';

const routes: Routes = [
  {
    path: '',
    component: TurkeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurkeyPageRoutingModule {}
