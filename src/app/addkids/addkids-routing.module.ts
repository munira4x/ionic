import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddkidsPage } from './addkids.page';

const routes: Routes = [
  {
    path: '',
    component: AddkidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddkidsPageRoutingModule {}
