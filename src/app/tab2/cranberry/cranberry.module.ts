import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CranberryPageRoutingModule } from './cranberry-routing.module';

import { CranberryPage } from './cranberry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CranberryPageRoutingModule
  ],
  declarations: [CranberryPage]
})
export class CranberryPageModule {}
