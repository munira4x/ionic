import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuesPageRoutingModule } from './ques-routing.module';

import { QuesPage } from './ques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuesPageRoutingModule
  ],
  declarations: [QuesPage]
})
export class QuesPageModule {}
