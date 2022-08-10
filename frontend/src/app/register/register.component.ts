import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm : FormGroup = this._formBuilder.group({
    firstName : ['' , Validators.required],
    lastName : ['' , Validators.required],
    serialNumber : ['' , Validators.required],
    roleId : ['' , Validators.required],
    email : ['' , Validators.required],
    mobileNumber : ['' , Validators.required],
    country : ['' , Validators.required],
    password : ['' , Validators.required]

  });
  constructor(private _formBuilder : FormBuilder ,
    private _http : HttpClient) { }

  ngOnInit(): void {

  }
  onSave() : void {
    let firstName = this.RegisterForm.get('firstName')?.value
    let lastName = this.RegisterForm.get('lastName')?.value
    let serialNumber = this.RegisterForm.get('serialNumber')?.value
    let email = this.RegisterForm.get('email')?.value
    let mobileNumber = this.RegisterForm.get('mobileNumber')?.value
    let password = this.RegisterForm.get('password')?.value

    let body = {
      firstName: firstName,
      lastName : lastName ,
      serialNumber : serialNumber,
      roleId : 11,
      email:email,
      mobileNumber:mobileNumber,
      country : "Palestine",
      password:password
    }

    this._http.post("http://localhost:8085/employee/save" , body)
    .subscribe(x=> console.log(x))

   }

}
