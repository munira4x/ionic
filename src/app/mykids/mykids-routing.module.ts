import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MykidsPage } from './mykids.page';

const routes: Routes = [
  {
    path: '',
    component: MykidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MykidsPageRoutingModule {}
