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

  var formData:any = new FormData();
  formData.append("serialNumber",this.addstudentform.get('serialNumber')?.value);
  formData.append("status",this.addstudentform.get('status')?.value);
  formData.append("customerSerialNumber",this.addstudentform.get('customerSerialNumber')?.value);
  formData.append("employeeSerialNumber",this.addstudentform.get('employeeSerialNumber')?.value);
  formData.append("photo",this.addstudentform.get('photo')?.value);
  this._http.post("http://localhost:8085/invoice/save", formData).subscribe()

}


}
