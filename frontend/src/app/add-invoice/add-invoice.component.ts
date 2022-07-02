import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {


  addstudentform: FormGroup = this._formbuilder.group({
    serialNumber: ['', Validators.required],
    status: ['', Validators.required],
    customerSerialNumber: ['', Validators.required],
    employeeSerialNumber: ['', Validators.required],

});

constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient
) { }

ngOnInit(): void { }

onSave(): void {

    let serialNumber = this.addstudentform.get('serialNumber')?.value;
    let status = this.addstudentform.get('status')?.value;
    let customerSerialNumber =this.addstudentform.get('customerSerialNumber')?.value;
    let employeeSerialNumber = this.addstudentform.get('employeeSerialNumber')?.value;


    let body = {
      serialNumber: serialNumber,
      status: status,
      customerSerialNumber: customerSerialNumber,
      employeeSerialNumber: employeeSerialNumber
    }
    console.warn(body);

    this._http.post("http://localhost:8085/invoice/save", body).subscribe()


}


}
