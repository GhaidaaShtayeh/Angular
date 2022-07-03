import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {


  editStudentform: FormGroup = this._formbuilder.group({
    serialNumber : ['' , Validators.required],
    status : ['' , Validators.required],
    customerSerialNumber : ['' , Validators.required],
    employeeSerialNumber : ['' , Validators.required]

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
   .get('http://localhost:8085/invoice/get-invoice/'+this.id)
   .subscribe((response: any) => {
     this.invoice = response;
     this.editStudentform.get('serialNumber')?.setValue(this.invoice.serialNumber)
     this.editStudentform.get('status')?.setValue(this.invoice.status)
     this.editStudentform.get('employeeSerialNumber')?.setValue(this.invoice.employee.serialNumber)
     this.editStudentform.get('customerSerialNumber')?.setValue(this.invoice.customerSerialNumber)

   });
  }

  editStudent(){
    let serialNumber = this.editStudentform.get('serialNumber')?.value;
    let status = this.editStudentform.get('status')?.value;
    let customerSerialNumber = this.editStudentform.get('customerSerialNumber')?.value;
    let employeeSerialNumber = this.editStudentform.get('employeeSerialNumber')?.value;

    let url = "http://localhost:8085/invoice/update/"+this.invoice.id;
    let obj = {serialNumber:serialNumber , status:status , customerSerialNumber:customerSerialNumber,employeeSerialNumber:employeeSerialNumber}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }

}
