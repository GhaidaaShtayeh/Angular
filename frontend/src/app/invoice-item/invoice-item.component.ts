import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent implements OnInit {

  inovoicesList: Array<any> = [];
  constructor(private _http: HttpClient,
    private route:ActivatedRoute
    ) {}
  id :number = -1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._http
      .get('http://localhost:8085/invoiceItem/viewList/'+this.id)
      .subscribe((response: any) => {
        this.inovoicesList = response;
      });
  }

}
