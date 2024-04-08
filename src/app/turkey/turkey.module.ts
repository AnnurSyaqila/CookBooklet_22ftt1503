import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurkeyPageRoutingModule } from './turkey-routing.module';

import { TurkeyPage } from './turkey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurkeyPageRoutingModule
  ],
  declarations: [TurkeyPage]
})
export class TurkeyPageModule {}
