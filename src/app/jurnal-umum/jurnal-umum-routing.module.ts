import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JurnalUmumPage } from './jurnal-umum.page';

const routes: Routes = [
  {
    path: '',
    component: JurnalUmumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JurnalUmumPageRoutingModule {}
