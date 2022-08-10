import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})

export class InvoicesComponent implements OnInit {

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

 serach(){
  let input = document.getElementById("input_search") as HTMLInputElement
 let id = Number(input?.value)
    this._http.get<any>("http://localhost:8085/invoice/search/"+id)
    .subscribe(x=> this.inovoicesList = x)
  }

  deleteinvoice(id: number)  {
    const url = 'http://localhost:8085/invoice/deleteInvoice/'+id;
    console.log(id);
    console.log(url+id);
    this._http.get<any>(url).subscribe(res=> {console.log(res)});
    location.reload();
  }
 /* onSearch(): void {
    let search = this.addstudentform.get('search')?.value;
    let body = {
      search : search
    }
    console.warn(body);

    this._http.get("http://localhost:8085/item/save", body).subscribe()
  }*/

}
