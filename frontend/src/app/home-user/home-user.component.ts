import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {



  inovoicesList: Array<any> = [];
  searchText: any;
  constructor(private _http: HttpClient,private _formbuilder: FormBuilder) {}

  addstudentform: FormGroup = this._formbuilder.group({
    search: ['', Validators.required]
});

  ngOnInit(): void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem("access_token")!
    });

    this._http
      .get('http://localhost:8085/invoice/getInvoices',{headers:headers})
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
