import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

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
