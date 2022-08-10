import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editStudentform: FormGroup = this._formbuilder.group({
    firstName : ['' , Validators.required],
    lastName : ['' , Validators.required],
    serialNumber : ['' , Validators.required],
    email : ['' , Validators.required],
    mobileNumber : ['' , Validators.required],
    country : ['' , Validators.required],
    roleId : ['' , Validators.required],
  });
  id :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute,
    private sanitizer:DomSanitizer
    ) { }

    invoice : any;

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this._http
   .get('http://localhost:8085/employee/get-employee/'+this.id)
   .subscribe((response: any) => {
     this.invoice = response;
     this.editStudentform.get('firstName')?.setValue(this.invoice.firstName)
     this.editStudentform.get('lastName')?.setValue(this.invoice.lastName)
     this.editStudentform.get('serialNumber')?.setValue(this.invoice.serialNumber)
     this.editStudentform.get('email')?.setValue(this.invoice.email)
     this.editStudentform.get('mobileNumber')?.setValue(this.invoice.mobileNumber)
     this.editStudentform.get('country')?.setValue(this.invoice.country)
     this.editStudentform.get('roleId')?.setValue(this.invoice.roleId)


   });
  }

  editStudent(){
    let firstName = this.editStudentform.get('firstName')?.value;
    let lastName = this.editStudentform.get('lastName')?.value;
    let serialNumber = this.editStudentform.get('serialNumber')?.value;
    let mobileNumber = this.editStudentform.get('mobileNumber')?.value;
    let country = this.editStudentform.get('country')?.value;
    let email = this.editStudentform.get('email')?.value;
    let roleId = this.editStudentform.get('roleId')?.value;

    let url = "http://localhost:8085/employee/update/"+this.invoice.id;
    let obj = {firstName:firstName ,lastName:lastName, serialNumber:serialNumber ,  mobileNumber:mobileNumber, country:country, email:email, roleId:roleId}
    this._http.put(url,obj).subscribe(obj=>{console.log(obj)
    alert("row edited");
    })

  }

}
