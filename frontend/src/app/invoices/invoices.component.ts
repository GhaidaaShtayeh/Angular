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
  deleteinvoice(id: number)  {
    const url = 'http://localhost:8085/invoice/deleteInvoice/'+id;
    console.log(id);
    console.log(url+id);
    this._http.get<any>(url).subscribe(res=> {console.log(res)});
    location.reload();

  }

}
