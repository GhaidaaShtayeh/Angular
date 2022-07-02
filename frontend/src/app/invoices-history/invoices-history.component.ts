import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoices-history',
  templateUrl: './invoices-history.component.html',
  styleUrls: ['./invoices-history.component.css']
})
export class InvoicesHistoryComponent implements OnInit {

  inovoicesList: Array<any> = [];
  constructor(private _http: HttpClient,
    private route:ActivatedRoute
    ) {}
  id :number = -1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._http
      .get('http://localhost:8085/invoicehistory/get-invoice-history/'+this.id)
      .subscribe((response: any) => {
        this.inovoicesList = response;
      });
  }
}
