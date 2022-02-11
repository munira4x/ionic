import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildlistPage } from './childlist.page';

const routes: Routes = [
  {
    path: '',
    component: ChildlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildlistPageRoutingModule {}
