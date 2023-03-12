import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getJurnalMemorials(): Observable<any> {
    return this.http.get(this.apiUrl + 'indexIon');
  }

  getJurnalMemorialsByDate(tanggalAwal: string, tanggalAkhir: string): Observable<any> {
    return this.http.get(this.apiUrl + 'indexIon', { params: { tanggal_awal_filter: tanggalAwal, tanggal_akhir_filter: tanggalAkhir } });
  }

}
