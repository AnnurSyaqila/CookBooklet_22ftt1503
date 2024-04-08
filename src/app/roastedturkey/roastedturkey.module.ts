import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoastedturkeyPageRoutingModule } from './roastedturkey-routing.module';

import { RoastedturkeyPage } from './roastedturkey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoastedturkeyPageRoutingModule
  ],
  declarations: [RoastedturkeyPage]
})
export class RoastedturkeyPageModule {}
