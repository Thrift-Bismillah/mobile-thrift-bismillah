import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-jurnal-umum',
  templateUrl: 'jurnal-umum.page.html',
  styleUrls: ['jurnal-umum.page.scss'],
})
export class JurnalUmumPage {
  jurnal_memorials: any[] = [];
  tanggal_awal: string = '';
  tanggal_akhir: string = '';
  showFilter: boolean = false;

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController
  ) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
  }

  async loadData() {
    await this.presentLoading();
    let url = `http://127.0.0.1:8000/api/indexIon`;

    if (this.tanggal_awal && this.tanggal_akhir) {
      url += `?tanggal_awal_filter=${this.tanggal_awal}&tanggal_akhir_filter=${this.tanggal_akhir}`;
    }

    this.http.get(url).subscribe(
      (response: any) => {
        this.jurnal_memorials = response.jurnal_memorials;
        this.loadingController.dismiss();
      },
      (error) => {
        console.log(error);
        this.loadingController.dismiss();
      }
    );
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  onSubmitFilter() {
    this.loadData();
    this.toggleFilter();
  }
}
