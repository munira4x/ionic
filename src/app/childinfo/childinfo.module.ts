import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildinfoPageRoutingModule } from './childinfo-routing.module';

import { ChildinfoPage } from './childinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildinfoPageRoutingModule
  ],
  declarations: [ChildinfoPage]
})
export class ChildinfoPageModule {}
