import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  tokenInfo:  any;


  addstudentform: FormGroup = this._formbuilder.group({
    serialNumber: ['', Validators.required],
    status: ['', Validators.required],
    customerSerialNumber: ['', Validators.required],
    employeeSerialNumber: ['', Validators.required],

});

  file!: File ;
  base64textString!: string;

constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient
) { }

ngOnInit(): void {
  /*let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ localStorage.getItem("access_token")!
  });*/
  this.tokenInfo = jwt_decode(localStorage.getItem("access_token")!);

  console.log(this.tokenInfo)
  console.log(this.tokenInfo.serialNumber)

}


_handleReaderLoaded(readerEvt: any) {
  var binaryString = readerEvt.target.result;
         this.base64textString= btoa(binaryString);
         console.log(btoa(binaryString));
 }

fileChanged(e : any): any {
  //this.file = e.target.files[0];
  var files = e.target.files;
      var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
}
onSave(): void {
  let serialNumber = this.addstudentform.get('serialNumber')?.value;
  let status = this.addstudentform.get('status')?.value;
  let customerSerialNumber =this.addstudentform.get('customerSerialNumber')?.value;
  let employeeSerialNumber = this.tokenInfo.serialNumber;
  let photo = this.addstudentform.get('photo')?.value;


  let body = {
    serialNumber: serialNumber,
    status: status,
    customerSerialNumber: customerSerialNumber,
    employeeSerialNumber: employeeSerialNumber,
    photo:this.base64textString

  }

  /*const formData : FormData = new FormData();
  formData.append("serialNumber",this.addstudentform.get('serialNumber')?.value);
  formData.append("status",this.addstudentform.get('status')?.value);
  formData.append("customerSerialNumber",this.addstudentform.get('customerSerialNumber')?.value);
  formData.append("employeeSerialNumber",this.addstudentform.get('employeeSerialNumber')?.value);
  formData.append('photo', this.base64textString);
  console.log(formData.getAll("photo"));*/

  this._http.post("http://localhost:8085/invoice/save", body).subscribe()

}


}
