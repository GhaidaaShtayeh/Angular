import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-invoice-item',
  templateUrl: './add-invoice-item.component.html',
  styleUrls: ['./add-invoice-item.component.css']
})
export class AddInvoiceItemComponent implements OnInit {

  addstudentform: FormGroup = this._formbuilder.group({
    quantity: ['', Validators.required],
    itemSerialNumber: ['', Validators.required]

});

constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute

) { }
id :number = -1;


ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];

 }

onSave(): void {

    let quantity = this.addstudentform.get('quantity')?.value;
    let itemSerialNumber = this.addstudentform.get('itemSerialNumber')?.value;


    let body = {
      quantity: quantity,
      itemSerialNumber: itemSerialNumber,
      invoiceSerialNumber: this.id
    }
    console.warn(body);

    this._http.post("http://localhost:8085/invoiceItem/save", body).subscribe()

}
}
