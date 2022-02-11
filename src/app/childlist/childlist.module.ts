import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildlistPageRoutingModule } from './childlist-routing.module';

import { ChildlistPage } from './childlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildlistPageRoutingModule
  ],
  declarations: [ChildlistPage]
})
export class ChildlistPageModule {}
