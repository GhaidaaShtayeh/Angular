import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {


  inovoicesList: Array<any> = [];
  searchText: any;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:8085/invoice/viewList')
      .subscribe((response: any) => {
        this.inovoicesList = response;
      });
  }


}
