import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MykidsPageRoutingModule } from './mykids-routing.module';

import { MykidsPage } from './mykids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MykidsPageRoutingModule
  ],
  declarations: [MykidsPage]
})
export class MykidsPageModule {}
