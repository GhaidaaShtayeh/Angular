import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  feedbackslist: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:8085/customer/viewList')
      .subscribe((response: any) => {
        this.feedbackslist = response;
      });
  }

  deleteinvoice(id: number)  {
    const url = 'http://localhost:8085/customer/deleteCustomer/'+id;
    console.log(id);
    console.log(url+id);
    this._http.get<any>(url).subscribe(res=> {console.log(res)});
    location.reload();

  }

}
