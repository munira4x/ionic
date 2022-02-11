import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildinfoPage } from './childinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ChildinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildinfoPageRoutingModule {}
