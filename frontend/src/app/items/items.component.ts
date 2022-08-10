import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemsList: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:8085/item/viewList')
      .subscribe((response: any) => {
        this.itemsList = response;
      });
  }
  deleteitem(id: number)  {
    const url = 'http://localhost:8085/item/deleteItem/'+id;
    console.log(id);
    console.log(url+id);
    this._http.get<any>(url).subscribe(res=> {console.log(res)});
    location.reload();

  }

}
