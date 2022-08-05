import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  inovoicesList: Array<any> = [];
  searchText: any;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:8085/employee/viewList')
      .subscribe((response: any) => {
        this.inovoicesList = response;
      });
  }

}
