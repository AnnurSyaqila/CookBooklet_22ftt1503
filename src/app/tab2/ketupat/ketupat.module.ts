import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetupatPageRoutingModule } from './ketupat-routing.module';

import { KetupatPage } from './ketupat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetupatPageRoutingModule
  ],
  declarations: [KetupatPage]
})
export class KetupatPageModule {}
