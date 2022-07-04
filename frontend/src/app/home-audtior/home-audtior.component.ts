import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-audtior',
  templateUrl: './home-audtior.component.html',
  styleUrls: ['./home-audtior.component.css']
})
export class HomeAudtiorComponent implements OnInit {

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
