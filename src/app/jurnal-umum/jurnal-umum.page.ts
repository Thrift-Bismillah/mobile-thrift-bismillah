import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-jurnal-umum',
  templateUrl: './jurnal-umum.page.html',
  styleUrls: ['./jurnal-umum.page.scss'],
})
export class JurnalUmumPage implements OnInit {
 
  jurnalUmumData: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('').subscribe((response: any)=>{
      this.jurnalUmumData = response;
    });
  }

}
