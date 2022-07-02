import { InvoiceService } from './../invoice.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InvoiceClass } from '../Invoice';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-home-superuser',
  templateUrl: './home-superuser.component.html',
  styleUrls: ['./home-superuser.component.css']
})
export class HomeSuperuserComponent implements OnInit {
  posts:any;
  //if it doesn't work try it with 1
  p: number = 0;
  private _http: any;

  constructor(private service:PostService,private http:HttpClient) {}

  ngOnInit() {
    // to get the post for the first time we call the fuction from OnInit
     this.getPosts(this.p)
  }

  //now this function will get called when you will click the button and pass the page number to api
  getPosts(page:number){
    this.service.getPosts(page)
    .subscribe(response => {
      this.posts = response;
    });
  }

  deleteinvoice(id: any) {
    let url = "http://localhost:8085/invoices/deleteInvoice/"+id;
    let body={id:id}
     this.http.put(url,body).subscribe((body: any)=>{console.log(body)})
  }
}
