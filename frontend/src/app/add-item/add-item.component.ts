import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  itemsList: Array<any> = [];

  addstudentform: FormGroup = this._formbuilder.group({
    serialNumber: ['', Validators.required],
    name: ['', Validators.required],
    unitPrice: ['', Validators.required],

});

constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient
) { }

ngOnInit(): void {
    this._http
      .get('http://localhost:8085/item/viewList')
      .subscribe((response: any) => {
        this.itemsList = response;
      });

}

onSave(): void {

    let serialNumber = this.addstudentform.get('serialNumber')?.value;
    let name = this.addstudentform.get('name')?.value;
    let unitPrice =this.addstudentform.get('unitPrice')?.value;



    let body = {
      serialNumber: serialNumber,
      name: name,
      unitPrice: unitPrice,

    }
    console.warn(body);

    this._http.post("http://localhost:8085/item/save", body).subscribe()


}


}

