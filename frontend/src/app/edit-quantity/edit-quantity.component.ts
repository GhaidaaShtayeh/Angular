import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-quantity',
  templateUrl: './edit-quantity.component.html',
  styleUrls: ['./edit-quantity.component.css']
})
export class EditQuantityComponent implements OnInit {


  editStudentform: FormGroup = this._formbuilder.group({
    quantity : ['' , Validators.required],
    itemSerialNumber : ['' , Validators.required]

  });
  id :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    ) { }

    invoice : any;

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
  }

  editStudent(){
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("access_token")});
    let quantity = this.editStudentform.get('quantity')?.value;
    let itemSerialNumber = this.editStudentform.get('itemSerialNumber')?.value;
    let invoiceSerialNumber = this.id;

    let url = "http://localhost:8085/invoiceItem/updateQuantity/"+this.id;
    let obj = {quantity:quantity , itemSerialNumber:itemSerialNumber , invoiceSerialNumber:invoiceSerialNumber}
    this._http.put<{invoice:any}>(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }


}
