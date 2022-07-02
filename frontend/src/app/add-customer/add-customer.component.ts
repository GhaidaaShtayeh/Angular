import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addstudentform: FormGroup = this._formbuilder.group({
    serialNumber: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    mobileNumber: ['', Validators.required],

});

constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient
) { }

ngOnInit(): void { }

onSave(): void {

    let serialNumber = this.addstudentform.get('serialNumber')?.value;
    let firstName = this.addstudentform.get('firstName')?.value;
    let lasName =this.addstudentform.get('lastName')?.value;
    let email = this.addstudentform.get('email')?.value;
    let mobileNumber = this.addstudentform.get('mobileNumber')?.value;


    let body = {
      serialNumber: serialNumber,
      firstName: firstName,
      lastName: lasName,
      email: email,
      mobileNumber:mobileNumber

    }
    console.warn(body);

    this._http.post("http://localhost:8085/customer/save", body).subscribe()


}


}
