import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuesPage } from './ques.page';

const routes: Routes = [
  {
    path: '',
    component: QuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuesPageRoutingModule {}
