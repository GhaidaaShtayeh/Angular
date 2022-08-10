import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editStudentform: FormGroup = this._formbuilder.group({
    serialNumber : ['' , Validators.required],
    firstName : ['' , Validators.required],
    lastName : ['' , Validators.required],
    email : ['' , Validators.required],
    mobileNumber : ['' , Validators.required]
  });
  id :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
        ) { }

    invoice : any;

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this._http
   .get('http://localhost:8085/customer/getCustomer/'+this.id)
   .subscribe((response: any) => {
     this.invoice = response;
     this.editStudentform.get('serialNumber')?.setValue(this.invoice.serialNumber)
     this.editStudentform.get('firstName')?.setValue(this.invoice.firstName)
     this.editStudentform.get('lastName')?.setValue(this.invoice.lastName)
     this.editStudentform.get('email')?.setValue(this.invoice.email)
     this.editStudentform.get('mobileNumber')?.setValue(this.invoice.mobileNumber)

   });
  }

  editStudent(){
    let serialNumber = this.editStudentform.get('serialNumber')?.value;
    let firstName = this.editStudentform.get('firstName')?.value;
    let lastName = this.editStudentform.get('lastName')?.value;
    let email = this.editStudentform.get('email')?.value;
    let mobileNumber = this.editStudentform.get('mobileNumber')?.value;

    let url = "http://localhost:8085/customer/update/"+this.invoice.id;
    let obj = {serialNumber:serialNumber , firstName:firstName , lastName:lastName,email:email,mobileNumber:mobileNumber}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }

}
