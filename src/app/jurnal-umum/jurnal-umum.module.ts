import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JurnalUmumPageRoutingModule } from './jurnal-umum-routing.module';

import { JurnalUmumPage } from './jurnal-umum.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JurnalUmumPageRoutingModule,
    HttpClientModule
  ],
  declarations: [JurnalUmumPage]
})
export class JurnalUmumPageModule {}
